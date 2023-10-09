var index=0;

function changeColor(){
let colors=["red","blue","green","#ece872","purple","aqua","crimpson","black","grey","white"]

document.getElementsByTagName("body")[0].style.background=colors[index++];

if(index>colors.length-1)
index=0;


}