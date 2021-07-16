// What is the differences between let, const and var?

/*let allows you to declare variables that are limited to the scope
of a block statement or expression*/

/* A const variables can not be reasigned as it create a read
only reference to a value though has immutable binding but not 
immutability as a result a const can not share its
name with a function or variable in the same scope 
*/

/*----
Var is at function level and it scope more wider than the const and
and let that are block scoping i.e Var variables can be declared
globally or locally to an entire function irrespective of the block scope
----*/


//  When would each be appropriate too use?

/*   
Var declarations are globally scoped or function scoped, 
let and const are block scope

let, const and var can all be used in a function scope
you only can use Var in global scope, not let and const
let and const can be used in a local scope but not Var
And finally, Var and Let can be reassigned but Const can
not
*/

// generally is advisable to use const by default and let when there is need to change a variable


// Three codes example on Var,Let and Const.


function greet() {
    for (var i = 0; i < 4; i++) {
        console.log("Hello");
        
    }
    // console.log(i)
}
   greet()


  
  
   if(true){
    const color = "blue";

    console.log(color);
}




function myWork() {
    let allSayHello = true;
    let ourDuty;

    if (allSayHello === true) {
        
        ourDuty = "Morning";
        console.log(ourDuty +" "+ "work")

    }
    else {
        ourDuty = "Afternoon";
        console.log(ourDuty +" "+ "work")
    }
}

myWork();



// Hoisting

/*Hoisting is the default behaviour of moving all variables declared
at the top of the scope prior to code being executed.

Basically, it gives us an advantage that no matter where function
and variables are declared, they re moved to the top of the scope
be it global or local scope



*/
   