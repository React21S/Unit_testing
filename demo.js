'use strict';

function testall(dataArray){
    return function(message, callBackFunction){
        for (let row of dataArray){
            console.log(message);
            callBackFunction(...row);
        }
    }
};

const data =[
    [1,2,3],
    [4,5,6]
];

testall(data)('xyz',(a,b,c)=>console.log(a,b,c));

// or run the test in another way

const a =testall(data);
a('xyz',(a,b,c)=>console.log(a,b,c));

// run in the terminal with node demo