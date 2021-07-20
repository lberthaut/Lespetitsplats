function searchItem(term, recipes, item) {
    let fn = window['load'+item[0].toUpperCase()+item.slice(1)+'s'];
    return fn(recipes).filter(i => i.toLowerCase().includes(term.toLowerCase()));
}

/*Génération des ingredients pour combobox ingredients*/
function loadIngredients(recipes) {
    var ingredientsArray = [];
    for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {
            ingredientsArray.push(ingredient.ingredient);
        }
    }
    return [...new Set(ingredientsArray)];
}

/*Génération des appareils pour combobox appareils*/
function loadAppliances(recipes) {
    var appliancesArray = [];
    for (let recipe of recipes) {
        appliancesArray.push(recipe.appliance);
    }
    return [...new Set(appliancesArray)];
}

/*Génération des ustensiles pour combobox ustensils*/
function loadUstensils(recipes) {
    var ustensilsArray = [];
    for (let recipe of recipes) {
        for (let ustensils of recipe.ustensils) {
            ustensilsArray.push(ustensils);
        }
    }
    return [...new Set(ustensilsArray)];
}