/*Affichage de la liste Ingredients*/
function showIngredients(){
    var ingredientsBox = document.getElementById('ingredients-list');
    var ingredientsArray = [];
    for(let recipe of recipes){
        for(let ingredient of recipe.ingredients){
          let ingredientValue = Object.values(ingredient);
          var insertIngredients = ingredientsArray.push(ingredientValue[0]);
          var ingredientsArrayCleaned = [...new Set(ingredientsArray)];
        }
    }
    for(let i=0; i<ingredientsArrayCleaned.length; i++){
      ingredientsBox.innerHTML += `<p class="ingredient-item" data-value="${ingredientsArrayCleaned[i]}" alt="${ingredientsArrayCleaned[i]}">${ingredientsArrayCleaned[i]}</p>`;
    }

}


  /*Affichage de la liste Appareils*/
function showAppliances(){
    var applianceBox = document.getElementById('appliances-list');
    var appliancesArray = [];
    for(let recipe of recipes){
        let appliance = recipe.appliance;
        var insertAppliances = appliancesArray.push(appliance);
        var appliancesArrayCleaned = [...new Set(appliancesArray)];
    }
    for(let i=0; i<appliancesArrayCleaned.length; i++){
    applianceBox.innerHTML += `<p class="appliance-item" value="${appliancesArrayCleaned[i]}" alt="${appliancesArrayCleaned[i]}">${appliancesArrayCleaned[i]}</p>`
    }
}


/*Affichage de la liste Ustensiles*/
function showUstensils(){
    var ustensilsBox = document.getElementById('ustensils-list');
    var ustensilsArray = [];
    for(let recipe of recipes){
        for(let ustensils of recipe.ustensils){
        var insertUstensils = ustensilsArray.push(ustensils);
        var ustensilsArrayCleaned = [...new Set(ustensilsArray)];
        }
    }
    for(let i=0; i<ustensilsArrayCleaned.length; i++){
    ustensilsBox.innerHTML += `<p class="ustensil-item" value="${ustensilsArrayCleaned[i]}" alt="${ustensilsArrayCleaned[i]}">${ustensilsArrayCleaned[i]}</p>`
    }
}