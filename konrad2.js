var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var hcell1 = document.getElementById("hcell1");
var hcell2 = document.getElementById("hcell2");
var hcell3 = document.getElementById("hcell3");
var hcell4 = document.getElementById("hcell4");
var hcell5 = document.getElementById("hcell5");


var celllist=[cell1,cell2,cell3,cell4,cell5]

hcell1.addEventListener("mouseover", function(event) {
    // for(i=0; i=celllist.length;i++){
    //     celllist[i].classList.remove(("cellfocus"))
    // }
    cell1.classList.remove("cellfocus");
    cell2.classList.remove("cellfocus");
    cell3.classList.remove("cellfocus");
    cell4.classList.remove("cellfocus");
    cell5.classList.remove("cellfocus");
    cell1.classList.add("cellfocus")
});
hcell2.addEventListener("mouseover", function(event) {
    // for(i=0; i=celllist.length;i++){
    //     celllist[i].classList.remove(("cellfocus"))
    // }
    cell1.classList.remove("cellfocus");
    cell2.classList.remove("cellfocus");
    cell3.classList.remove("cellfocus");
    cell4.classList.remove("cellfocus");
    cell5.classList.remove("cellfocus");
    cell2.classList.add("cellfocus")
});
hcell3.addEventListener("mouseover", function(event) {
    // for(i=0; i=celllist.length;i++){
    //     celllist[i].classList.remove(("cellfocus"))
    // }
    cell1.classList.remove("cellfocus");
    cell2.classList.remove("cellfocus");
    cell3.classList.remove("cellfocus");
    cell4.classList.remove("cellfocus");
    cell5.classList.remove("cellfocus");
    cell3.classList.add("cellfocus")
});
hcell4.addEventListener("mouseover", function(event) {
    // for(i=0; i=celllist.length;i++){
    //     celllist[i].classList.remove(("cellfocus"))
    // }
    cell1.classList.remove("cellfocus");
    cell2.classList.remove("cellfocus");
    cell3.classList.remove("cellfocus");
    cell4.classList.remove("cellfocus");
    cell5.classList.remove("cellfocus");
    cell4.classList.add("cellfocus")
});
hcell5.addEventListener("mouseover", function(event) {
    // for(i=0; i=celllist.length;i++){
    //     celllist[i].classList.remove(("cellfocus"))
    // }
    cell1.classList.remove("cellfocus");
    cell2.classList.remove("cellfocus");
    cell3.classList.remove("cellfocus");
    cell4.classList.remove("cellfocus");
    cell5.classList.remove("cellfocus");
    cell5.classList.add("cellfocus")
});


