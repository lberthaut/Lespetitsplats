function loadIngredients(){
var items = Array.from (document.getElementsByClassName('ingredient-item'));
return items.map(el => el.dataset.value);
}

function itemsSearchTool(){
    let ingredient = loadIngredients();
    var inputs = document.getElementById('inputingredients').value;
}
