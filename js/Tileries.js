const tileriesArea = document.getElementById('tileries-searched');

document.querySelectorAll('.appliance-item, .ingredient-item, .ustensil-item').forEach(e => e.addEventListener('click', function (){
    let value = this.dataset.value;
   this.classList.add('disabled');
   let combobox = this.closest('.combobox');
    tileriesArea.innerHTML += `<div class="tile-${combobox.dataset.item}-searched tile" data-item="${combobox.dataset.item}" data-value="${value}">
    <p class="tile-value">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`
    closeTile();
    }
))

function closeTile(){
    document.querySelectorAll('.tile-close').forEach(e => e.addEventListener('click', function (){
        var tile = this.closest('.tile');
        var combobox = document.querySelector(`.combobox[data-item="${tile.dataset.item}"]`);
       let item = combobox.querySelector(`p[data-value="${tile.dataset.value}"]`);
        if(item != null){
           item.classList.remove('disabled');
           tile.remove();
        }
    }))
}