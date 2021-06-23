/*Affichage des recettes*/
var recipeElement = document.getElementById('recipes-list');
for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}

showIngredients(loadIngredients(recipes));
showAppliances(loadAppliances(recipes));
showUstensils(loadUstensils(recipes));



document.querySelectorAll('.inputcombobox').forEach(searchbar => {
  searchbar.addEventListener('input', function () {
    let show = window['show'+this.dataset.item[0].toUpperCase()+this.dataset.item.slice(1)+'s'];
    if(this.value.length >= 3){
      let items = searchItem(this.value, recipes, this.dataset.item);
      show(items);
    } else{
        let load = window['load'+this.dataset.item[0].toUpperCase()+this.dataset.item.slice(1)+'s'];
        show(load(recipes));
    }
  })
  searchbar.addEventListener('blur', function (){
    this.closest('.combobox').querySelector('.combo-list').classList.remove('activ');
  })
  searchbar.addEventListener('focus', function (){
    this.closest('.combobox').querySelector('.combo-list').classList.add('activ');
  })
})
