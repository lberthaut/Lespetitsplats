const tileriesArea = document.getElementById("tileries-searched");

/**
 * Affichage des tuiles selon l'item cliqué dans un combobox
 * @param {selector} selector pointe sur les items a cliquer pour afficher la tuile
 * @returns {} Affiche une tuile d'un item cliqué
 */
function tiles(selector) {
  document.querySelectorAll(selector).forEach((e) =>
    e.addEventListener("click", function () {
      let value = this.dataset.value;
      this.classList.add("disabled");
      let combobox = this.closest(".combobox");
      tileriesArea.innerHTML += `<div class="tile-${combobox.dataset.item}-searched tile" data-item="${combobox.dataset.item}" data-value="${value}">
    <p class="tile-value">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`;
      closeTile();
      const searchValue = document.getElementById("searchbarr").value;
      loadRecipes(globalValue(searchValue));
    })
  );
}
tiles(".appliance-item, .ingredient-item, .ustensil-item");

/**
 * Fermeture des tuiles
 * @param {}
 * @returns {} Permet de fermer les tuiles des tags et réinitialiser le filtrage des recettes
 */
function closeTile() {
  document.querySelectorAll(".tile-close").forEach((e) =>
    e.addEventListener("click", function () {
      var tile = this.closest(".tile");
      var combobox = document.querySelector(
        `.combobox[data-item="${tile.dataset.item}"]`
      );
      let item = combobox.querySelector(
        `p[data-value="${tile.dataset.value}"]`
      );
      if (item != null) {
        item.classList.remove("disabled");
        tile.remove();
        const searchValue = document.getElementById("searchbarr").value;
        loadRecipes(globalValue(searchValue));
      }
    })
  );
}
