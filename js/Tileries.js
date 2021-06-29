const tileriesArea = document.getElementById('tileries-searched');

const itemsIngredients = document.querySelectorAll('.ingredient-item');
itemsIngredients.forEach(e => e.addEventListener('click', function (){
    var value = this.dataset.value;
    this.style.color="grey";
    this.style.pointerEvents="none";
    tileriesArea.innerHTML += `<div class="tile-ingredient-searched tile" data-value="${value}">
    <p class="tile-value">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`
    closeTile();
    }
))

document.querySelectorAll('.appliance-item').forEach(e => e.addEventListener('click', function (){
    var value = this.dataset.value;
    this.style.color="grey";
    this.style.pointerEvents="none";
    tileriesArea.innerHTML += `<div class="tile-appliance-searched tile" data-value="${value}">
    <p class="tile-value">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`
    closeTile();
    }
))

document.querySelectorAll('.ustensil-item').forEach(e => e.addEventListener('click', function (){
    var value = this.dataset.value;
    this.style.color="grey";
    this.style.pointerEvents="none";
    tileriesArea.innerHTML += `<div class="tile-ustensil-searched tile" data-value="${value}">
    <p class="tile-value">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`
    closeTile();
    }
))

function closeTile(){
    document.querySelectorAll('.tile-close').forEach(e => e.addEventListener('click', function (){
        this.closest('.tile').classList.add('remove');
        var tileValue = this.closest('tile').data.value;
        var itemValue = document.getElementsByClassName('.combo-list').querySelector('p[data-value="${tileValue}"');
        if(tileValue == itemValue.data.value){
            itemValue.style.color="white";
            itemValue.style.pointerEvents="initial";
        }
    }))
}