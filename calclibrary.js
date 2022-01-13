'use strict';

function sum (a,b){
    if (a==undefined || b==undefined){
        throw Error('parameter missing')   
    }
    if(typeof a !== ('number') || typeof b !==('number')){
        throw Error('only numbers allowed');
    }
    return a+b;
}
function subtract (a,b){
    if (a==undefined || b==undefined){
        throw Error('parameter missing')   
    }
    if(typeof a !== ('number') || typeof b !==('number')){
        throw Error('only numbers allowed');
    }
    return a-b;
}

module.exports={sum, subtract};