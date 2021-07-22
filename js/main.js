/**
 * Affichage des recettes
 * @param {recipes} recipes est la liste des recettes
 * @returns {} l'affichage de chaque recettes
 */
function loadRecipes(recipes) {
  var recipeElement = document.getElementById("recipes-list");
  recipeElement.innerHTML = "";
  for (let recipe of recipes) {
    recipeElement.innerHTML += recipe.show();
  }
}
loadRecipes(recipes);

/**
 * Affichages des items dans les combobox
 * @param {recipes} recipes est la liste des recettes, chaque fonctions "load" est la liste des items, sans doublons
 * @returns {} L'affichage des ingrédients, appareils et ustensiles dans chaque combobox
 */
showIngredients(loadIngredients(recipes));
showAppliances(loadAppliances(recipes));
showUstensils(loadUstensils(recipes));

/**
 * Rechercher des items dans les combobox
 * @param {searchbar} searchbar pointe les trois barres de recherches liés aux items
 * @returns {show(items)} permettra d'afficher les items selon les tableaux filtrés des items
 */
document.querySelectorAll(".inputcombobox").forEach((searchbar) => {
  searchbar.addEventListener("input", function () {
    let show =
      window[
        "show" +
          this.closest(".combobox").dataset.item[0].toUpperCase() +
          this.closest(".combobox").dataset.item.slice(1) +
          "s"
      ];
    if (this.value.length >= 3) {
      let items = searchItem(
        this.value,
        recipes,
        this.closest(".combobox").dataset.item
      );
      show(items);
      this.style.width = "185px";
      this.closest(".combobox").querySelector(
        ".combo-list"
      ).style.flexDirection = "column";
    } else {
      this.closest(".combobox").querySelector(
        ".combo-list"
      ).style.flexDirection = "row";
      let load =
        window[
          "load" +
            this.closest(".combobox").dataset.item[0].toUpperCase() +
            this.closest(".combobox").dataset.item.slice(1) +
            "s"
        ];
      show(load(recipes));
      this.style.width = "555px";
    }
    tiles("." + this.closest(".combobox").dataset.item + "-item");
  });

  /**
   * Affichage des listes d'items
   * @param {}
   * @returns {} l'affichage des listes d'items lors du focus sur chacun de leurs barres de recerche
   */
  searchbar.addEventListener("focus", function () {
    this.closest(".combobox")
      .querySelector(".combo-list")
      .classList.add("activ");
    this.style.width = "555px";
    if (this.value.length >= 3) {
      this.style.width = "185px";
    }
  });
});

/**
 *Fermeture des combobox
 * @param {}
 * @returns {} ferme les tuiles de tags
 */
document.addEventListener("click", function (e) {
  document.querySelectorAll(".inputcombobox").forEach((searchbar) => {
    if (
      e.target != searchbar &&
      e.target.closest(".combobox") != searchbar.closest(".combobox")
    ) {
      searchbar
        .closest(".combobox")
        .querySelector(".combo-list")
        .classList.remove("activ");
      searchbar.style.width = "185px";
    }
  });
});
