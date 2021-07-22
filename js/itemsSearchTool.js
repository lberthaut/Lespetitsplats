/**
 * Filtrage des tableaux des ingrédients, appareils et ustensiles
 * @param {term, recipes, item} term sera le mot filtrant, recipes est la liste des recettes, item est ce qui permettra de cibler l'un des 3 tableaux
 * @returns {searchItem()} Fonction de filtrage selon "term"
 */
function searchItem(term, recipes, item) {
  let fn = window["load" + item[0].toUpperCase() + item.slice(1) + "s"];
  return fn(recipes).filter((i) =>
    i.toLowerCase().includes(term.toLowerCase())
  );
}

/**
 * Génération d'un tableau des ingrédients, sans doublons
 * @param {recipes}
 * @returns {loadIngredients()} Tableau des ingrédients
 */
function loadIngredients(recipes) {
  var ingredientsArray = [];
  for (let recipe of recipes) {
    for (let ingredient of recipe.ingredients) {
      ingredientsArray.push(ingredient.ingredient);
    }
  }
  return [...new Set(ingredientsArray)];
}

/**
 * Génération d'un tableau des appareils, sans doublons
 * @param {recipes}
 * @returns {loadAppliances()} Tableau des appareils
 */
function loadAppliances(recipes) {
  var appliancesArray = [];
  for (let recipe of recipes) {
    appliancesArray.push(recipe.appliance);
  }
  return [...new Set(appliancesArray)];
}

/**
 * Génération d'un tableau des ustensiles, sans doublons
 * @param {recipes}
 * @returns {loadUstensils()} Tableau des ustensiles
 */
function loadUstensils(recipes) {
  var ustensilsArray = [];
  for (let recipe of recipes) {
    for (let ustensils of recipe.ustensils) {
      ustensilsArray.push(ustensils);
    }
  }
  return [...new Set(ustensilsArray)];
}
