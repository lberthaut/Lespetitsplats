function searchItem(term, recipes, item) {
    let fn = window['load'+item[0].toUpperCase()+item.slice(1)+'s'];
    return fn(recipes).filter(i => i.toLowerCase().includes(term.toLowerCase()));
}

function loadIngredients(recipes) {
    var ingredientsArray = [];
    for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {
            ingredientsArray.push(ingredient.ingredient);
        }
    }
    return [...new Set(ingredientsArray)];
}

function loadAppliances(recipes) {
    var appliancesArray = [];
    for (let recipe of recipes) {
        appliancesArray.push(recipe.appliance);
    }
    return [...new Set(appliancesArray)];
}

function loadUstensils(recipes) {
    var ustensilsArray = [];
    for (let recipe of recipes) {
        for (let ustensils of recipe.ustensils) {
            ustensilsArray.push(ustensils);
        }
    }
    return [...new Set(ustensilsArray)];
}