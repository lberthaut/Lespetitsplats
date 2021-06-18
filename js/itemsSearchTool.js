function loadIngredients(){
    var items = Array.from (document.getElementsByClassName('ingredient-item'));
    return items.map(el => el.dataset.value);
}

function loadAplliances(){
    var items = Array.from (document.getElementsByClassName('appliance-item'));
    return items.map(el => el.dataset.value);
    }

function loadUstensils(){
    var items = Array.from (document.getElementsByClassName('ustensil-item'));
    return items.map(el => el.dataset.value);
    }
    

function itemsSearchTool(){
    return inputs = document.getElementById('inputingredients').value;
}

var searchTool = itemsSearchTool();
var ingredientSearch = loadIngredients();
const filteredItems = ingredientSearch.filter(i => i.includes(itemsTool));