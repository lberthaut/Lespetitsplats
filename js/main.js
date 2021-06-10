/*Affichage des recettes*/
var recipeElement = document.getElementById('recipes-list');
for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}


/*Affichage du dropdown Ingredients*/
var ingredientsDropdown = document.querySelector('.ingredients-list');
for(let recipe of recipes){
    for(let ingredient of recipe.ingredients){
      let ingredientValue = Object.values(ingredient);
      ingredientsDropdown.innerHTML = `<a class="dropdown-item" href="#">${ingredientValue[0]}</a>`
    }
}

/*Affichage du dropdown Appareils*/
var applianceDropdown = document.querySelector('.appliances-list');
for(let recipe of recipes){
    let appliance = recipe.appliance;
      applianceDropdown.innerHTML = `<a class="dropdown-item" href="#">${appliance}</a>`
    }

/*Affichage du dropdown Ustensiles*/
var ustensilsDropdown = document.querySelector('.ustensils-list');
for(let recipe of recipes){
    for(let ustensils of recipe.ustensils){
      let ustensilsValue = Object.values(ustensils);
      ustensilsDropdown.innerHTML = `<a class="dropdown-item" href="#">${ustensilsValue}</a>`
    }
}