const researchBarr = document.getElementById('searchbarr');


function recipesName(){
    const arrayNames = [];
    for (let recipe of recipes){
        arrayNames.push(recipe.name);
    }
    return arrayNames;
}


function recipesIngredients (){
    const arrayIngredients = [];
    for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {
            arrayIngredients.push(ingredient.ingredient);
        }
    }
    return arrayIngredients;
}

var test = recipesIngredients();


function recipesDescription (){
    const arrayDescription = [];
    for(let recipe of recipes){
        var splitDescription = recipe.description.split(' ');
        for(let words of splitDescription){
            arrayDescription.push(words);
            for(let i=0; i<arrayDescription.length; i++){
                
            }
        }
    }
    return arrayDescription;
}

var globalArray = recipesName().concat(recipesIngredients()).concat(recipesDescription());

var globalArrayCleaned = [...new Set(globalArray)];

researchBarr.addEventListener('input', function (){
    var searchValue = this.value;
    if(searchValue.length>= 3){

    }
})