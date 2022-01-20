[![UnitTesting](https://github.com/React21S/Unit_testing/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/React21S/Unit_testing/actions/new)

# Unit testing with jest
- [Jest test getting-started](https://jestjs.io/docs/getting-started)
---
## Jest installation procedure

[Check Documentation:](https://jestjs.io/)

### 1.   Create a project folder

### 2. Create package.json (with npm init or manually)
```shell
> npm init -y
```

```shell
> npm init
```


and answer questions

### 3. Install jest as devDependency 

```shell
> npm install jest --save-dev
```

This modifies the package.json file by adding devDependencies to it
```json
 "devDependencies": {
    "jest": "^27.4.7"
  }
```

### 4. Modify the test-script in package.json change the script from
```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
to

 "scripts": {
    "test": "jest"
  },
```


### 5. Create test folder named 
(underscore underscore tests underscore underscore )
`__tests__`

### 6. Write tests

### 7. Run tests
```shell
> npm test
```

### 7B. To run only one test file 
-   for example (npm test ---testFile calcSum.test.js)
- test all file that have name test in it
```shell
> npm test --testFile fileToBETested.test.js
```

# Procedure in calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Returns the sum of given numbers of 
-   if parameter is missing,  throw an exception: `'parameter missing'`
-   if parameters are not numbers, throws an exception: `'only numbers allowed'`

## **subtract(a,b)**
Function returns the different a-b of two numbers. Number are passed to the function as parameters.

Returns the difference of given numbers
-   if parameter is missing, throws an exception:`'only number allowed'`


### Test cases

#### Sums


##### Integers
-   sum(1,1) returns 2
-   sum(2,3) returns 5
-   sum(-2,-4) returns -6
-   sum(-2,4) returns 2
a, b, expected **another to write** 
[2, -4,  -2],
[0, 0,  0],
[0,3,   3],
[3, 0,  3],
[0, -3, -3],
[-3, 0  -3],

##### Floats
[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[-3, 2.5 -0.5],
[-2.5, -2,5 -5],
[-2.5, 2.5, 0],
[2.4, -2.5, -0.1]

#### Missing parameters
sum() throws an exception `'parameter missing'`
sum(1) throws an exception `'parameter missing'`
sum('a') throws an exception `'parameter missing'`
sum('') throws an exception `'parameter missing'`

#### Parameters are not numbers
-   sum('a', 1) throws an exception `'only number allowed'`
-   sum(1,'a') throws an exception `'only number allowed'`
-   sum('a','b') throws an exception `'only number allowed'`
-   sum('1','b') throws an exception `'only number allowed'`
-   sum('','') throws an exception `'only number allowed'`
-   sum(null, 1) throws an exception `'only number allowed'`
-   sum('1','2') throws an exception `'only number allowed'`

#### Subtract


##### Integers
-   subtract(1,1) returns 0
-   subtract(2,3) returns -1
-   subtract(-2,-4) returns 2
-   subtract(-2,4) returns -6
a, b, expected **another to write** 
 [2, -4,  6],
[0, 0,  0],
[0,3,   -3],
[3, 0,  3],
[0, -3, 3],
[-3, 0,  -3],

##### Floats
[10, 11.5, -1.5],
[2.5, 3, -0.5],
[-2.5, 3, -5.5],
[-3, 2.5, -5.5],
[-2.5, 2.5, -5.0],
[2.5, 2.5, 0],
[2.4, -2.5, 4.9]

#### Missing parameters
subtract() throws an exception `'parameter missing'`
subtract(1) throws an exception `'parameter missing'`
subtract('a') throws an exception `'parameter missing'`
subtract('') throws an exception `'parameter missing'`

#### Parameters are not numbers
-   subtract('a', 1) throws an exception `'only number allowed'`
-   subtract(1,'a') throws an exception `'only number allowed'`
-   subtract('a','b') throws an exception `'only number allowed'`
-   subtract('1','b') throws an exception `'only number allowed'`
-   subtract('','') throws an exception `'only number allowed'`
-   subtract(null, 1) throws an exception `'only number allowed'`
-   subtract('1','2') throws an exception `'only number allowed'`


#### Divide

test:
[0,0, Number.NaN],
[2,0, Number.POSITIVE_INFINITY],
[-2,0, Number.NEGATIVE_INFINITY],
[ Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
