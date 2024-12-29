// difference between var, let, and const

function testVar() {
    console.log(x); // undefined
    var x = 10;
    console.log("Initial value of x:", x); // 10
    var x = 20;
    console.log("Redeclared value of x:" , x); // 20
}

testVar();

function testLet() {
    // console.log(x); // Cannot access 'x' before initialization
    let x = 30;
    console.log("Initial value of x:", x); // 30
    x = 40; // value can be changed but cannot be redclared like let x =40 ;
    console.log("changed value of x:" , x); // 40
}

testLet();

function testConst() {
    // console.log(x); // Cannot access 'x' before initialization
    const x = 50;
    console.log("Initial value of x:", x); // 30
    // x = 60; // TypeError: Assignment to constant variable.
}

testConst();