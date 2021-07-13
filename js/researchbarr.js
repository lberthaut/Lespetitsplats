const researchBarr = document.getElementById('searchbarr');


async function recipesNames(recipes, word){
    return recipes.filter(recipe => recipe.name.toUpperCase().includes(word.toUpperCase()));
}


async function recipesIngredients (recipes, word){
    return recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toUpperCase().includes(word.toUpperCase())));
}


async function recipesDescriptions (recipes, word){
    return recipes.filter(recipe => recipe.description.toUpperCase().includes(word.toUpperCase()))
}

function globalValue(word){
    var globalArray = recipesNames(recipes, word).concat(recipesIngredients(recipes, word), recipesDescriptions(recipes, word));
    return [...new Set(globalArray)];
}



researchBarr.addEventListener('input', async function (){
    var searchValue = this.value;
    if(searchValue.length>= 3){
        await SearchAsync.globalValue(searchValue);
        loadRecipes(SearchAsync.result);
    }else if(searchValue.length == 0){
        loadRecipes(recipes);
    }
})

class SearchAsync {

    static async globalValue (word){
        this.result = [];
        recipesNames(recipes, word).then(filterRecipe => SearchAsync.checkSearch(filterRecipe));
        recipesIngredients (recipes, word).then(filterRecipe => SearchAsync.checkSearch(filterRecipe));
        recipesDescriptions (recipes, word).then(filterRecipe => SearchAsync.checkSearch(filterRecipe));
    }

    static checkSearch(filterRecipe){
        this.result = [...new Set(this.result.concat(filterRecipe))];
    }
}

