 let count=0;
 let interval;

 const counter=document.getElementById("counter");
 const increaseButton=document.getElementById("increase");
 const decreaseButton=document.getElementById("decrease");

 function increase(){
    count++;
    counter.textContent=count;
 }
 
 function decrease(){
    count--;
    counter.textContent=count;
 }

 increaseButton.addEventListener("click",increase);
decreaseButton.addEventListener("click",decrease);
 
 increaseButton.addEventListener("mousedown",()=>{
  
    interval=setInterval(increase,100);

 });
 
 decreaseButton.addEventListener("mousedown",()=>{
  
    interval=setInterval(decrease,100);
   
 });
     const deleteInterval=()=>{
        clearInterval(interval)

     };
increaseButton.addEventListener("mouseup",deleteInterval)
decreaseButton.addEventListener("mouseup",deleteInterval)
