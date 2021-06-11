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
  ingredientsDropdown.innerHTML += `<a class="dropdown-item" href="#">${ingredientsArrayCleaned[i]}</a>`;
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
  applianceDropdown.innerHTML += `<a class="dropdown-item" href="#">${appliancesArrayCleaned[i]}</a>`
}

/*Affichage du dropdown Ustensiles*/
var ustensilsDropdown = document.querySelector('.ustensils-list');
var ustensilsArray = [];
for(let recipe of recipes){
    for(let ustensils of recipe.ustensils){
      let ustensilsValue = Object.values(ustensils);
      var insertUstensils = ustensilsArray.push(ustensilsValue);
      var ustensilsArrayCleaned = [...new Set(ustensilsArray)];
    }
}
for(let i=0; i<appliancesArrayCleaned.length; i++){
  ustensilsDropdown.innerHTML += `<a class="dropdown-item" href="#">${ustensilsArrayCleaned[i]}</a>`
}
