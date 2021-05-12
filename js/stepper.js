"use strict";

// Number
let buttonUp1 = document.getElementById('theButtonUp1');
buttonUp1.addEventListener('click', function() {
    steponup();}
);

function steponup() {
    let input = document.getElementById('theNumber');
    input.stepUp();
}

let buttonDown1 = document.getElementById('theButtonDown1');
buttonDown1.addEventListener('click', function() {
    stepondown();}
);

function stepondown() {
    let input = document.getElementById('theNumber');
    input.stepDown();
}

// Adult
let buttonUp2 = document.getElementById('theButtonUp2');
buttonUp2.addEventListener('click', function() {
    steponup2();}
);
function steponup2() {
    let input = document.getElementById('theAdult');
    input.stepUp();
}
let buttonDown2 = document.getElementById('theButtonDown2');
buttonDown2.addEventListener('click', function() {
    stepondown2();}
);
function stepondown2() {
    let input = document.getElementById('theAdult');
    input.stepDown();
}

// Children
let buttonUp3 = document.getElementById('theButtonUp3');
buttonUp3.addEventListener('click', function() {
    steponup3();}
);

function steponup3() {
    let input = document.getElementById('theChildren');
    input.stepUp();
}

let buttonDown3 = document.getElementById('theButtonDown3');
buttonDown3.addEventListener('click', function() {
    stepondown3();}
);

function stepondown3() {
    let input = document.getElementById('theChildren');
    input.stepDown();
}