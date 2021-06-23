/*Affichage de la liste Ingredients*/
function showIngredients(listIngredients){
    var ingredientsBox = document.getElementById('ingredients-list');
    ingredientsBox.innerHTML = '';
    for(let ingredient of listIngredients){
      ingredientsBox.innerHTML += `<p class="ingredient-item" data-value="${ingredient}" alt="${ingredient}">${ingredient}</p>`;
    }
}


/*Affichage de la liste Appareils*/
function showAppliances(listAppliances){
    var applianceBox = document.getElementById('appliances-list');
    applianceBox.innerHTML = '';
    for(let appliance of listAppliances){
    applianceBox.innerHTML += `<p class="appliance-item" data-value="${appliance}" alt="${appliance}">${appliance}</p>`
    }
}


/*Affichage de la liste Ustensiles*/
function showUstensils(listUstensils){
    var ustensilsBox = document.getElementById('ustensils-list');
    ustensilsBox.innerHTML = '';
    for(let ustensil of listUstensils){
    ustensilsBox.innerHTML += `<p class="ustensil-item" data-value="${ustensil}" alt="${ustensil}">${ustensil}</p>`
    }
}