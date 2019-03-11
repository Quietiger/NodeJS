//Need to try all global Objects

var time = 0;
console.log("Hello World!")
setTimeout(function(){
    console.log("I AM NOW PRINTITNG MYSELF AFTER 3 SECONDS!!!");
},3000);
var timer = setInterval(function(){
    time += 2;
    console.log("I AM NOW PRINTITNG AFTER "+ time+" SECONDS!!!");
    if (time >= 10)
    {
        
        clearInterval(timer);
    }
},2000);
console.log("Your current Directory is : "+ __dirname);
console.log("Your filename is : "+ __filename)
