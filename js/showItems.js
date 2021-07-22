  /**
 * Affichage de la liste Ingredients dans son combobox
 * @param {listIngredients} listIngredients est la liste des ingrédients
 * @returns {} Affiche la liste des ingrédients dans le combobox
 */
function showIngredients(listIngredients) {
  var ingredientsBox = document.getElementById("ingredients-list");
  ingredientsBox.innerHTML = "";
  for (let ingredient of listIngredients) {
    ingredientsBox.innerHTML += `<p class="ingredient-item" data-value="${ingredient}" alt="${ingredient}">${ingredient}</p>`;
  }
}

  /**
 * Affichage de la liste appareils dans son combobox
 * @param {listAppliances} listAppliances est la liste des appareils
 * @returns {} Affiche la liste des appareils dans le combobox
 */
function showAppliances(listAppliances) {
  var applianceBox = document.getElementById("appliances-list");
  applianceBox.innerHTML = "";
  for (let appliance of listAppliances) {
    applianceBox.innerHTML += `<p class="appliance-item" data-value="${appliance}" alt="${appliance}">${appliance}</p>`;
  }
}

  /**
 * Affichage de la liste appareils dans son combobox
 * @param {listUstensils} listUstensils est la liste des ustensiles
 * @returns {} Affiche la liste des ustensiles dans le combobox
 */
function showUstensils(listUstensils) {
  var ustensilsBox = document.getElementById("ustensils-list");
  ustensilsBox.innerHTML = "";
  for (let ustensil of listUstensils) {
    ustensilsBox.innerHTML += `<p class="ustensil-item" data-value="${ustensil}" alt="${ustensil}">${ustensil}</p>`;
  }
}
