//function - #NORMAL
function hello()
{
    console.log("I AM FUNCTION");
}
hello();
//Function #EXPRESION assign function to a variable!

var bye = function(){
    console.log("BYEEE");
}

bye();

//As bye() is a variable we can use it as an argument to another function
function Callme(fun){
    fun();
}

//call callMe and pass bye as parameter
Callme(bye);