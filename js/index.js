import { renderItemsList } from "./dom-util.js"
import { getAllItems } from "./api.js";

const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const filterCheckbox = document.getElementById("checkbox_sort");
const countButton = document.getElementById("total_price_button");

let items = [];

export const refetchAllItems = () => {
    const allItems = getAllItems();
    items = allItems.sort((x, y) => y.title.localeCompare(x.title));

    renderItemsList(items);
}

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
        refetchAllItems();
    }
});

countButton.addEventListener("click", () => {
    let sum = items.map(o => o.price).reduce((a, c) => { return a + c });
    document.getElementById("total-price").innerText = sum;
    console.log(sum);
})

// main code
refetchAllItems();