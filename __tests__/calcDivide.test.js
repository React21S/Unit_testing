'use strict';

const {divide}= require('../calclibrary')


describe('Testing the division for test.each method', ()=>{
    const testValues=[
        [0,0, Number.NaN],
        [2,0, Number.POSITIVE_INFINITY],
        [-2,0, Number.NEGATIVE_INFINITY],
        [ Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN]
    ];
    test.each(testValues)('testing divide(%s,%s)=%s', (a,b,expected)=>{
        expect(divide(a,b)).toBe(expected);
    });
});