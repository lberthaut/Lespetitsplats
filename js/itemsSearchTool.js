function loadIngredients(){
    var ingredientItem = Array.from (document.getElementsByClassName('ingredient-item'));
    return ingredientItem.map(el => el.dataset.value);
}

function loadAplliances(){
    var applianceItem = Array.from (document.getElementsByClassName('appliance-item'));
    return applianceItem.map(el => el.dataset.value);
    }

function loadUstensils(){
    var ustensilItem = Array.from (document.getElementsByClassName('ustensil-item'));
    return ustensilItem.map(el => el.dataset.value);
    }
    

function itemsSearchTool(){
    return ingredientInput = document.getElementById('inputingredients').value;
}

var searchTool = itemsSearchTool();
var ingredientSearch = loadIngredients();
const filteredItems = ingredientSearch.filter(i => i.includes(itemsTool));