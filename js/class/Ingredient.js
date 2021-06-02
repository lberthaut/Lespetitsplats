class Ingredient{
    constructor(ingredient){
        ingredient && Object.assign(this, ingredient);
    }
    show(){
        if(this.unit == undefined){
            this.unit = '';
        }else if(this.quantity == undefined){
            document.querySelectorAll('.quantity').style.display= 'none';
        };
        return `<div class="ingredient"><p>${this.ingredient}</p>
          <p class="quantity">: ${this.quantity} ${this.unit}</p></div>`;
    }
}





