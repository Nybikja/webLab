from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from os import abort

app = Flask(__name__)

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///item.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)


class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40))
    paragraph = db.Column(db.String(1000))
    imageUrl = db.Column(db.String(1000))
    price = db.Column(db.Integer)

    def __init__(self, title, paragraph, imageUrl, price):
        self.title = title
        self.paragraph = paragraph
        self.imageUrl = imageUrl
        self.price = price


class ItemsSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'paragraph', 'imageUrl', 'price')


item_schema = ItemsSchema()
items_schema = ItemsSchema(many=True)


@app.route("/search", methods=["GET"])
@cross_origin()
def get_search():
    search_query = request.args.get('title')

    items = Item.query.filter(Item.title.contains(search_query)).all()
    result = items_schema.dump(items)

    return jsonify(result)


@app.route("/items", methods=["GET"])
@cross_origin()
def get_items():
    items = Item.query.all()
    result = items_schema.dump(items)
    return jsonify(result)


@app.route("/items/<id>", methods=["GET"])
@cross_origin()
def get_item(id):
    item = Item.query.get(id)
    if item is None:
        abort(404)
    return item_schema.jsonify(item)


@app.route("/items", methods=["POST"])
@cross_origin()
def add_item():
    data = ItemsSchema().load(request.json)
    new_item = Item(**data)

    db.session.add(new_item)
    db.session.commit()

    return item_schema.jsonify(new_item)


@app.route("/items/<id>", methods=["PUT"])
@cross_origin()
def update_item(id):
    item = Item.query.get(id)

    if item is None:
        abort(404)

    data = ItemsSchema().load(request.json)

    for i in data:
        setattr(item, i, request.json[i])

    db.session.commit()
    return item_schema.jsonify(item)


@app.route("/items/<id>", methods=["DELETE"])
@cross_origin()
def delete_item(id):
    item = Item.query.get(id)
    if item is None:
        abort(404)
    db.session.delete(item)
    db.session.commit()
    return item_schema.jsonify(item)


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
