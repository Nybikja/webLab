import React, {Fragment, useEffect} from 'react'
import { connect } from 'react-redux';
import CardMedia from '@material-ui/core/CardMedia';
import { clearProduct } from '../actions/clearProduct';
import Modal from "../Checkout/Modal";

function Buy({basketProps, clearProduct}) {
    useEffect(() => {
        console.log(basketProps)
    })

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item){
        console.log(item);
        console.log(basketProps.products[item].title);
        if(basketProps.products[item].title){
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })

    productsInCart = productsInCart.map( (product) =>{
        console.log("My product is:");
        console.log(product);
        return (
            <Fragment>
                <div className="product"><ion-icon onClick={() => clearProduct(product)} name="close-circle"></ion-icon><CardMedia
                        className="media"
                        image= {product.imageUrl}
                    />
                    <span>{product.title}</span>
                    <span>{product.quantity}</span>
                </div>
                <div className="quantity">${product.price},00</div>
                <div className="paragraph">${product.paragraph}</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="quantity sm-hide">QUANTITY</h5>
                <h5 className="price">PRICE</h5>
                <h5 className="paragraph">PARAGRAPH</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
                
            </div>
            <div>
            <Modal />
            <div className="row  justify-content-center align-self-center">
                <div>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td style={{verticalAlign: "inherit"}} className="text-center">
                                <button type="button" className="btn btn-primary" data-toggle="modal"
                                        data-target="#checkoutModal">Checkout
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        basketProps: state.basketState
    };
};


export default connect(mapStateToProps, {clearProduct})(Buy);
