// shopping_list.js

const addItemButton = document.getElementById("add_item");
const itemList = document.getElementById("shopping_list");
const itemNameInput = document.getElementById("item_name");
const itemQuantityInput = document.getElementById("item_quantity");
const clearListButton = document.getElementById("clear_list");

let shoppingList = [];

const showShoppingList = () => {
    itemList.innerHTML = "";
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `${item.name} - ${item.quantity}`;

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-sm btn-danger ms-2";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteItem(index));

        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
    });
};

const addItem = () => {
    const name = itemNameInput.value.trim();
    const quantity = itemQuantityInput.value.trim();
    if (name !== "" && quantity !== "") {
        const newItem = { name, quantity };
        shoppingList.push(newItem);
        showShoppingList();
        saveShoppingList();
        itemNameInput.value = "";
        itemQuantityInput.value = "";
    }
};

const deleteItem = (index) => {
    shoppingList.splice(index, 1);
    showShoppingList();
    saveShoppingList();
};

const clearList = () => {
    shoppingList = [];
    showShoppingList();
    saveShoppingList();
};

addItemButton.addEventListener("click", addItem);
clearListButton.addEventListener("click", clearList);

const saveShoppingList = () => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
};

const loadShoppingList = () => {
    const savedList = localStorage.getItem("shoppingList");
    if (savedList) {
        shoppingList = JSON.parse(savedList);
        showShoppingList();
    }
};

loadShoppingList();
