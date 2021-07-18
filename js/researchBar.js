const researchBarr = document.getElementById('searchbarr');


function recipesNames(recipes, word){
    return recipes.filter(recipe => recipe.name.toUpperCase().includes(word.toUpperCase()));
}


function recipesIngredients (recipes, word){
    return recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(word.toUpperCase())));
}


function recipesDescriptions (recipes, word){
    return recipes.filter(recipe => recipe.description.toUpperCase().includes(word.toUpperCase()))
}

function globalValue(word){
    var globalArray = recipesNames(recipes, word).concat(recipesIngredients(recipes, word), recipesDescriptions(recipes, word));
    return [...new Set(globalArray)];
}



researchBarr.addEventListener('input', function (){
    var searchValue = this.value;
    if(searchValue.length>= 3){
        loadRecipes(globalValue(searchValue));
    }else if(searchValue.length == 0){
        loadRecipes(recipes);
    }
})