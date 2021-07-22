/**
 * Affichage des ingredients
 * @param {ingredient} ingredient permet de recuperer la liste des ingredients
 * @returns {Ingredient} les ingredients pour chaque recettes
 */
class Ingredient {
  constructor(ingredient) {
    ingredient && Object.assign(this, ingredient);
  }
  show() {
    if (this.unit == undefined) {
      this.unit = "";
    }
    if (this.quantity == undefined) {
      this.quantity = "";
    }
    var unit = this.unit;
    var unitSplit = unit.split(" ");
    return `<div class="ingredient"><p>${this.ingredient}&nbsp;</p>
          <p class="quantity">${this.quantity} ${unitSplit[0]}</p></div>`;
  }
}
