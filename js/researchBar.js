const researchBarr = document.getElementById('searchbarr');
const recipesArea = document.getElementById('recipes-list');


function recipesNames(recipes){
    const arrayNames = [];
    for (let recipe of recipes){
        arrayNames.push(recipe.name);
    }
    return arrayNames;
}
const namesRecipes = recipesNames(recipes);


function recipesIngredients (recipes){
    const arrayIngredients = [];
    for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {
            arrayIngredients.push(ingredient.ingredient);
        }
    }
    return arrayIngredients;
}


function recipesDescriptions (recipes){
    const arrayDescription = [];
    for(let recipe of recipes){
        var splitDescription = recipe.description.split(' ');
        for(let word of splitDescription){
            arrayDescription.push(word);
            var wordLength = arrayDescription.filter(word => word.length <= 2);
            arrayDescription.splice(wordLength);
        }
    }
    return arrayDescription;
}



researchBarr.addEventListener('input', function (namesRecipes, recipe){
    var searchValue = this.value;
    if(searchValue.length>= 3){
        const filteredRecipes = namesRecipes.filter(p => p.value.includes(searchValue));
        recipesArea.innerHTML = '';
        recipe.show(filteredRecipes);
    }
})