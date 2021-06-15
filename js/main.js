/*Affichage des recettes*/
var recipeElement = document.getElementById('recipes-list');
for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}


/*Affichage du dropdown Ingredients*/
var ingredientsDropdown = document.querySelector('.ingredients-list');
var ingredientsArray = [];
for(let recipe of recipes){
    for(let ingredient of recipe.ingredients){
      let ingredientValue = Object.values(ingredient);
      var insertIngredients = ingredientsArray.push(ingredientValue[0]);
      var ingredientsArrayCleaned = [...new Set(ingredientsArray)];
    }
}
for(let i=0; i<ingredientsArrayCleaned.length; i++){
  ingredientsDropdown.innerHTML += `<a class="ingredient-item" href="#" alt="${ingredientsArrayCleaned[i]}">${ingredientsArrayCleaned[i]}</a>`;
}


/*Affichage du dropdown Appareils*/
var applianceDropdown = document.querySelector('.appliances-list');
var appliancesArray = [];
for(let recipe of recipes){
    let appliance = recipe.appliance;
    var insertAppliances = appliancesArray.push(appliance);
    var appliancesArrayCleaned = [...new Set(appliancesArray)];
}
for(let i=0; i<appliancesArrayCleaned.length; i++){
  applianceDropdown.innerHTML += `<a class="appliance-item" href="#" alt="${appliancesArrayCleaned[i]}">${appliancesArrayCleaned[i]}</a>`
}


/*Affichage du dropdown Ustensiles*/
var ustensilsDropdown = document.querySelector('.ustensils-list');
var ustensilsArray = [];
for(let recipe of recipes){
    for(let ustensils of recipe.ustensils){
      var insertUstensils = ustensilsArray.push(ustensils);
      var ustensilsArrayCleaned = [...new Set(ustensilsArray)];
    }
}
for(let i=0; i<ustensilsArrayCleaned.length; i++){
  ustensilsDropdown.innerHTML += `<a class="ustensil-item" href="#" alt="${ustensilsArrayCleaned[i]}">${ustensilsArrayCleaned[i]}</a>`
}


/* Affichage des tuiles d'ingredients recherchés */


{/* <p></p>
      <i class="far fa-times-circle"></i> */}