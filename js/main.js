    var recipesElement = document.querySelectorAll('.recipes-list');

    for(recipe of recipes){
        recipesElement.innerHTML +=`<article class="recipe-card">
        <div class="img-recipe" alt="photo de la recette">
          </div>
      <section class="recipe-datas">
        <h2 class="recipe-title">${recipe.name}</h2>
        <div class="recipe-time">
          <i class="far fa-clock"></i>
          <p class=>${recipe.time}</p>
        </div>
        <aside class="items">
          <p class="item">${recipe.ingredients.ingredient}</p> 
          <p class="quantity">${recipe.ingredients.quantity} ${recipe.ingredients.unit}</p>
        </aside>
        <aside class="craft">
            <p class="description">${recipe.description}</p>
        </aside>
      </section>
    </article>`
    }