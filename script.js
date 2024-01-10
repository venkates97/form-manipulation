
var count = 0;
var ele_id = ["firstName","lastname","Address","pincode","gender","form-check-input","state","country"]
function updateData() {

    console.log("I am here on Functio");
    console.log(document.getElementById(ele_id[0]).value);
    // create elements 
    var append_area = document.getElementById("info-box");
    var tree = document.createElement("tr");
    var tree_head = document.createElement("th");
    tree_head.scope="row";
    tree_head.innerHTML= ++count;
    tree.appendChild(tree_head);
    append_area.append(tree);
    for (let i = 0; i < 8; i++) {

        var tree_def = document.createElement("td");
        tree_def.scope="col";
        if (ele_id[i]==="form-check-input") {
            var liked_foods=[];
            var get_foods =document.getElementsByClassName("form-check-input");
           for (let i  = 0; i  < get_foods.length; i ++) {
            if (get_foods[i].checked == true) {
                liked_foods.push(get_foods[i].value);
            }
            
           }
           tree_def.innerHTML = liked_foods;
        }else{
            tree_def.innerHTML = document.getElementById(ele_id[i]).value;
        }
        tree.append(tree_def);
        append_area.append(tree);
        
    }
    clearData();

}

function clearData(){
    for (let i  = 0; i  < ele_id.length; i ++) {
        if (ele_id[i]==="form-check-input") {
            var get_foods =document.getElementsByClassName("form-check-input");
           for (let i  = 0; i  < get_foods.length; i ++) {
                get_foods[i].checked = false;  
                console.log(get_foods[i].checked);   
           }
        }else{
            document.getElementById(ele_id[i]).value = "";
        }
    }
}