/*-----------------------------Cartegory--------------------------*/
function showSubCategory(id){
    const itemsliderbar = document.getElementById(id);
    var list= itemsliderbar.classList;
    if(list.length==1){
        list.add("open");
    }
    else{
        list.remove("open");
    }
}