 
const prompt=require("prompt-sync")({sigint:true});
 
 let randomNumber=Math.floor(Math.random()*100)
 let input;
  let score=100;
 while(input!= randomNumber)
 {
    score= 100-10;
     input= prompt("enter the number");
  
    if(input==randomNumber){
        console.log("Congratulation You have Guessed Right");
        console.log("Your Score is:"+score);
    }
    else if(input>randomNumber && input<100){
        console.log("OOps! the actual number is smaller then Your number");
 }
 else if(input<randomNumber && input<100){
    console.log("OOps! the actual number is greater then Your number");
}
else{
    console.log("enter Valid number")
}
 }