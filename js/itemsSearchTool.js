/* Valeurs des ingredients et de la barre de recherche ingredients */
function loadIngredients(){
    var ingredientItem = Array.from (document.getElementsByClassName('ingredient-item'));
    return ingredientItem.map(el => el.dataset.value);
}
var ingredientsValues = loadIngredients();
var ingredientsSearchTool = document.getElementById('inputingredients').value;
const filteredIngredients = ingredientsValues.filter(i => i.includes(ingredientsSearchTool));


/* Valeurs des appareils et de la barre de recherche appareils */
function loadAplliances(){
    var applianceItem = Array.from (document.getElementsByClassName('appliance-item'));
    return applianceItem.map(el => el.dataset.value);
}
var appliancesValues = loadAplliances();
var appliancesSearchTool =  document.getElementById('inputappliances').value;
const filteredAppliances = appliancesValues.filter(i => i.includes(appliancesSearchTool));


/* Valeurs des ustensils et de la barre de recherche ustensils */
function loadUstensils(){
    var ustensilItem = Array.from (document.getElementsByClassName('ustensil-item'));
    return ustensilItem.map(el => el.dataset.value);
}  
var ustensilsValues = loadUstensils();
var ustensilsSearchTool =  document.getElementById('inputustensils').value;
const filteredUstensils = ustensilsValues.filter(i => i.includes(ustensilsSearchTool));