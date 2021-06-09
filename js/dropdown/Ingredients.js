class Ingredients{
    constructor(ingredient){
        ingredient && Object.assign(this, ingredient);
    }

    show(){
        return `<a class="dropdown-item" href="#">${this.ingredient}</a>`
    }
}