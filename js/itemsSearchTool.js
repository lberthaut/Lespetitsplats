function itemsSearchTool(ingredientsArrayCleaned){
    var reg = new RegExp("^[a-zA-Z]{1,99}/i$")
    var filtred = ingredientsArrayCleaned.filter(reg);
}