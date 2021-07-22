/**
 * Affichage des recettes
 * @param {recipe} recipe permet de recupérer la liste des recettes
 * @returns {Recipe} Retourne chaque recettes
 */
class Recipe {
  constructor(recipe) {
    recipe && Object.assign(this, recipe);
    this.ingredients = this.ingredients.map(
      (ingredient) => new Ingredient(ingredient)
    );
  }
  show() {
    let ingredientString = "";
    for (let ingredient of this.ingredients) {
      ingredientString += ingredient.show();
    }
    return `<article class="recipe-card">
        <div class="img-recipe" alt="photo de la recette">
          </div>
      <section class="recipe-datas">
        <h2 class="recipe-title">${this.name}</h2>
        <div class="recipe-time">
          <i class="far fa-clock"></i>
          <p class=>${this.time} min</p>
        </div>
        <aside class="items">
            ${ingredientString}
        </aside>
        <aside class="craft">
            <p class="description">${this.description}</p>
        </aside>
      </section>
    </article>`;
  }
}
