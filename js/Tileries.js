const tileriesArea = document.getElementById('tileries-searched');


document.querySelectorAll('.ingredient-item').forEach(e => e.addEventListener('click', function (){
    var value = this.dataset.value;
    this.style.color="grey";
    this.style.cursor="default";
    tileriesArea.innerHTML += `<div class="tile-ingredient-searched tile">
    <p class="tile-value" data-value="${value}">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`
    closeTile();
    }, {once: true}
))

document.querySelectorAll('.appliance-item').forEach(e => e.addEventListener('click', function (){
    var value = this.dataset.value;
    this.style.color="grey";
    this.style.cursor="default";
    tileriesArea.innerHTML += `<div class="tile-appliance-searched tile">
    <p class="tile-value">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`
    closeTile();
    }, {once: true}
))

document.querySelectorAll('.ustensil-item').forEach(e => e.addEventListener('click', function (){
    var value = this.dataset.value;
    this.style.color="grey";
    this.style.cursor="default";
    tileriesArea.innerHTML += `<div class="tile-ustensil-searched tile">
    <p class="tile-value">${value}</p>
    <i class="far fa-times-circle tile-close"></i>
    </div>`
    closeTile();
    }, {once: true}
))

function closeTile(){
    document.querySelectorAll('.tile-close').forEach(e => e.addEventListener('click', function (){
        this.closest('.tile').classList.add('remove');
        }
    ))
}