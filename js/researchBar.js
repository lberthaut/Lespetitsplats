const researchBarr = document.getElementById('searchbarr');

/*Filtres des titres des recettes en fonction d'un mot*/
function recipesNames(recipes, word){
    return recipes.filter(recipe => recipe.name.toUpperCase().includes(word.toUpperCase()));
}

/*Filtres des ingredients des recettes en fonction d'un mot*/
function recipesIngredients (recipes, word){
    return recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(word.toUpperCase())));
}

/*Filtres des descriptions des recettes en fonction d'un mot*/
function recipesDescriptions (recipes, word){
    return recipes.filter(recipe => recipe.description.toUpperCase().includes(word.toUpperCase()))
}

/*Filtres des appareils des recettes en fonction d'un mot*/
function recipesAppliances (recipes, taglist){
    for(let tag of taglist){
        recipes = recipes.filter(recipe => recipe.appliance.toUpperCase().includes(tag.toUpperCase()))
    }
    return recipes;

}

/*Filtres des ustensiles des recettes en fonction d'un mot*/
function recipesUstensils (recipes, taglist){
    for(let tag of taglist){
    recipes =  recipes.filter(recipe => recipe.ustensils.some(ustensils => ustensils.toUpperCase().includes(tag.toUpperCase())))
    }
    return recipes;
}

function filteredIngredientsPerTags (recipes, taglist){
    for(let tag of taglist){
        recipes =  recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(tag.toUpperCase())));
    }
    return recipes;
}

/**
 * Concaténage des 3 filtres précédents
 * @param {string} word permet de filtrer les recettes
 * @returns {[Recipe]} les recettes filtrées
 */
function globalValue(word){
    var globalArray = recipesNames(recipes, word).concat(
        recipesIngredients(recipes, word), 
        recipesDescriptions(recipes, word)
        );
        let appliancesTag = Array.from(document.querySelectorAll('.tile[data-item="appliance"]')).map(tag => tag.dataset.value);
        let ustensilsTag = Array.from(document.querySelectorAll('.tile[data-item="ustensil"]')).map(tag => tag.dataset.value);
        let filteredIngredientsTag = Array.from(document.querySelectorAll('.tile[data-item="ingredient"]')).map(tag => tag.dataset.value);

        globalArray = recipesAppliances(globalArray, appliancesTag);
       globalArray = recipesUstensils (globalArray, ustensilsTag);
        globalArray =  filteredIngredientsPerTags (globalArray, filteredIngredientsTag);
    return [...new Set(globalArray)];
}


/*Recherche des recettes par le mot recherché dans les filtrages précédents*/
researchBarr.addEventListener('input', function (){
    var searchValue = this.value;
    if(searchValue.length>= 3){
        loadRecipes(globalValue(searchValue));
    }else if(searchValue.length == 0){
        loadRecipes(recipes);
    }
})