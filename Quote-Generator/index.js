function  generateQuote(){
    let quoteArr=[`“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,`“Be the change that you wish to see in the world.”`,`“We accept the love we think we deserve.”`,`“Without music, life would be a mistake.”`,`“I have not failed. I've just found 10,000 ways that won't work.”`];
   
    let quoteNew=quoteArr[Math.floor(Math.random()*quoteArr.length)]
    let q=quoteNew
    document.getElementById("qoute").innerHTML=q;
}