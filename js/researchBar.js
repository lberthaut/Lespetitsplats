const researchBarr = document.getElementById("searchbarr");

  /**
 * Filtres des titres des recettes en fonction d'un mot
 * @param {recipes, word} recipes est les recettes, word est le terme filtrant
 * @returns {recipesNames()} retourne la fonction de filtrage des titres des recettes
 */
function recipesNames(recipes, word) {
  return recipes.filter((recipe) =>
    recipe.name.toUpperCase().includes(word.toUpperCase())
  );
}

 /**
 * Filtres des ingredients des recettes en fonction d'un mot
 * @param {recipes, word} recipes est les recettes, word est le terme filtrant
 * @returns {recipesIngredients()} retourne la fonction de filtrage des ingrédients
 */
function recipesIngredients(recipes, word) {
  return recipes.filter((recipe) =>
    recipe.ingredients.some((ingredient) =>
      ingredient.ingredient.toUpperCase().includes(word.toUpperCase())
    )
  );
}

/**
 * Filtres des descriptions des recettes en fonction d'un mot
 * @param {recipes, word} recipes est les recettes, word est le terme filtrant
 * @returns {recipesDescriptions()} retourne la fonction de filtrage des descriptions des recettes
 */
function recipesDescriptions(recipes, word) {
  return recipes.filter((recipe) =>
    recipe.description.toUpperCase().includes(word.toUpperCase())
  );
}

/**
 * Filtres des appareils des recettes en fonction du tag cliqué dans son combobox
 * @param {recipes, taglist} recipes est les recettes, taglist sera la valeur du tag cliqué
 * @returns {recipes} retourne la fonction de filtrage des appareils dans les recettes
 */
function recipesAppliances(recipes, taglist) {
  for (let tag of taglist) {
    recipes = recipes.filter((recipe) =>
      recipe.appliance.toUpperCase().includes(tag.toUpperCase())
    );
  }
  return recipes;
}

/**
 * Filtres des ustensiles des recettes en fonction du tag cliqué dans son combobox
 * @param {recipes, taglist} recipes est les recettes, taglist sera la valeur du tag cliqué
 * @returns {recipes} retourne la fonction de filtrage des ustensiles dans les recettes
 */
function recipesUstensils(recipes, taglist) {
  for (let tag of taglist) {
    recipes = recipes.filter((recipe) =>
      recipe.ustensils.some((ustensils) =>
        ustensils.toUpperCase().includes(tag.toUpperCase())
      )
    );
  }
  return recipes;
}

/**
 * Filtres des ingredients des recettes en fonction du tag cliqué dans son combobox
 * @param {recipes, taglist} recipes est les recettes, taglist sera la valeur du tag cliqué
 * @returns {recipes} retourne la fonction de filtrage des ingredients dans les recettes
 */
function filteredIngredientsPerTags(recipes, taglist) {
  for (let tag of taglist) {
    recipes = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toUpperCase().includes(tag.toUpperCase())
      )
    );
  }
  return recipes;
}

/**
 * Concaténage des filtres précédents
 * @param {string} word permet de filtrer les recettes
 * @returns {[Recipe]} les recettes filtrées
 */
function globalValue(word) {
  var globalArray = recipesNames(recipes, word).concat(
    recipesIngredients(recipes, word),
    recipesDescriptions(recipes, word)
  );
  let appliancesTag = Array.from(
    document.querySelectorAll('.tile[data-item="appliance"]')
  ).map((tag) => tag.dataset.value);
  let ustensilsTag = Array.from(
    document.querySelectorAll('.tile[data-item="ustensil"]')
  ).map((tag) => tag.dataset.value);
  let filteredIngredientsTag = Array.from(
    document.querySelectorAll('.tile[data-item="ingredient"]')
  ).map((tag) => tag.dataset.value);

  globalArray = recipesAppliances(globalArray, appliancesTag);
  globalArray = recipesUstensils(globalArray, ustensilsTag);
  globalArray = filteredIngredientsPerTags(globalArray, filteredIngredientsTag);
  return [...new Set(globalArray)];
}

/**
 * Affichage des recettes par le mot recherché dans les filtrages précédents
 * @param {globalValue} définit les recettes selon les filtres des tags
 * @returns {} Affichage ou non des recettes filtrés
 */
researchBarr.addEventListener("input", function () {
  var searchValue = this.value;
  if (searchValue.length >= 3) {
    loadRecipes(globalValue(searchValue));
    if(document.getElementById("recipes-list").childNodes.length == 0){
      document.getElementById("recipes-list").innerHTML = `<p class="zerorecipes">Aucune recette ne correspond à votre critère… vous pouvez
      chercher « tarte aux pommes », « poisson », etc </p>`
    }
  } else if (searchValue.length == 0) {
    loadRecipes(recipes);
  }
});
