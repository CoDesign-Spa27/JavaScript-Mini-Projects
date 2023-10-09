 const box=document.querySelector(".box")

 box.addEventListener("mousemove",function(mousedetails){

  var boxLocation=box.getBoundingClientRect()
  var  inX=mousedetails.clientX - boxLocation.left;
  var  inY=mousedetails.clientY - boxLocation.top;

  if( inX<boxLocation.width/2){
    var greencolor=gsap.utils.mapRange(0,boxLocation.width/2,255,0, inX);
    gsap.to(box,{

     backgroundColor:`rgb(0,${greencolor},0)`,
    

    });
  }
  else{
   var bluecolor=gsap.utils.mapRange(boxLocation.width,boxLocation.width/2,255,0, inX);
   gsap.to(box,{

    backgroundColor:`rgb(0,0,${bluecolor})`,
   

   });
  }
 

 })
  