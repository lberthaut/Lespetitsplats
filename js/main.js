/*Affichage des recettes*/
function loadRecipes(recipes){
  var recipeElement = document.getElementById('recipes-list');
  recipeElement.innerHTML = '';
  for(let recipe of recipes){
    recipeElement.innerHTML += recipe.show();
  }
  }
  
  
  loadRecipes(recipes);


loadRecipes(recipes);
/*Affichages des items dans les combobox */
showIngredients(loadIngredients(recipes));
showAppliances(loadAppliances(recipes));
showUstensils(loadUstensils(recipes));


/* Rechercher des items dans les combobox */
document.querySelectorAll('.inputcombobox').forEach(searchbar => {
  searchbar.addEventListener('input', function () {
    let show = window['show'+this.dataset.item[0].toUpperCase()+this.dataset.item.slice(1)+'s'];
    if(this.value.length >= 3){
      let items = searchItem(this.value, recipes, this.dataset.item);
      show(items);
      this.style.width="185px";
      this.closest('.combobox').querySelector('.combo-list').style.flexDirection="column";
    } else{
        this.closest('.combobox').querySelector('.combo-list').style.flexDirection="row";
        let load = window['load'+this.dataset.item[0].toUpperCase()+this.dataset.item.slice(1)+'s'];
        show(load(recipes));
        this.style.width="555px";
    }
  })

/* searchbar.addEventListener('blur', function (){
    if(this.closest('.combobox').querySelector('.combo-list').addEventListener('click', function(){})){
    }else{
      this.closest('.combobox').querySelector('.combo-list').classList.remove('activ');
      this.style.width="185px";}
  }) */

  searchbar.addEventListener('focus', function (){
    this.closest('.combobox').querySelector('.combo-list').classList.add('activ');
    this.style.width="555px";
    if(this.value.length >= 3){
      this.style.width="185px";
    }
  })
})

