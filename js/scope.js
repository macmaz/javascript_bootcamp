'use strict';

var par4 = 10; //zmienna o zasięgu globalnym

function multiply(par1, par2, par3) {
    var result; //zmienna lokalna
    var par4 = 2;
    
    result = par1 * par2 * par3 * par4;
    
    return result;
}

console.log("Wynik: " + multiply(2,3,4));