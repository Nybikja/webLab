const itemsList = document.getElementById("items_list");
const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const priceInput = document.getElementById("price_input");

const itemTemplate = ({id, title, description, price}) => `
<li id="${id}" class="item-card">
  <img
    src="https://media.istockphoto.com/photos/standing-out-from-the-crowd-concept-picture-id1226181725"
    class="item-image">
  <div>
    <h5>${title}</h5>
    <p>${description}</p>
    <p>Item price: ${price}.</p>
  </div>
</li>
`

export const getInputValues = () => {
  return {
      title: titleInput.value,
      description: descriptionInput.value,
      price: priceInput.value,
  };
};

export const clearInputs = () => {
  titleInput.value = "";
  descriptionInput.value = "";
  priceInput.value = "";
};

export const addItemToPage = ({_id: id, title, description, price}) => {
  itemsList.insertAdjacentHTML(
      "afterbegin",
      itemTemplate({id, title, description, price})
  );
};

export const renderItemsList = (items) => {
    itemsList.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
}