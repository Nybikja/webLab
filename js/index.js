import { renderItemsList, 
         clearInputs,
         getInputValues,
         addItemToPage, } from "./dom-util.js"

const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const priceInput = document.getElementById("price_input");
const submitButton = document.getElementById("submit_button");
const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const filterCheckbox = document.getElementById("checkbox_sort");
const countButton = document.getElementById("total_price_button");
const errorTitle = document.getElementById("errorTitle");
const errorPrice = document.getElementById("errorPrice");


let items = [];


const addItem = ({title, description, price}) => {
    const generatedId = 'id_' + Math.random().toString(36).substr(2, 9);;

    const newItem = {
        id: generatedId,
        title,
        description,
        price,
    };
    items.push(newItem);
    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const invalidSymbols = ["@", "#", "<", ">", "/", "\\", "*", "+", "-", "=", ")", "(", "[", "]",
        "{", "}", "&", "^", "%", "$","!", "~"];

    if(titleInput.value == 0){
        errorTitle.textContent = "Please enter a title";
        window.alert("Oops,something went wrong");

    }
    else if(invalidSymbols.some(symbol =>titleInput.value.includes(symbol))){
        errorTitle.textContent = "Wrong symbols";
        window.alert("Oops,something went wrong");
    }
    else if(priceInput.value <= 0) {
        errorPrice.textContent = "Please enter a valid number";
        window.alert("Oops,something went wrong");
    }
    else {
        const {title, description, price} = getInputValues();
        clearInputs();

        addItem({
            title,
            description,
            price,
        });

        errorPrice.textContent = "";
        errorTitle.textContent = "";
    }
});

searchButton.addEventListener("click", () => {
    const foundItems = items.filter(
        (item) => item.title.search(searchInput.value) ==! -1);
    
    renderItemsList(foundItems);
});

filterCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedPrice = items.sort(
            (a, b) => parseFloat(a.price) - parseFloat(b.price));

        renderItemsList(sortedPrice);
    }
    else {
        renderItemsList(items);
    }
});

countButton.addEventListener("click", () => {
    let sum = items.map(o => o.price).reduce((a, c) => { return a + c });
    document.getElementById("total-price").innerText = sum;
})

renderItemsList(items);
