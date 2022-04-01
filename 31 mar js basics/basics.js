var a
var a=undefined;
var a=5;
var a=100;
var b;
var b=undefined;
var b=20;
var c;
var c=5;
javascript is synchrounous , single threaded language;
console.log('before',a);
TDZ = temporal dead zone;

hoisting
keyword ===> var , let, and const
var keyword;
var a=5;
var a=20;
console.log('before',a);

hoisting and making of global execution context

hoisting  ==> moving all the declaration on the top of scope;

global scope 
these are steps of hoisting

=========== var keyword +++++++

they can be redeclare;
they can be re initialize
they do not have TDZ



-------- Let keyword ------------


let keyword --> no redeclaration and it should not be possible to access variable before initialization

hoisting of let
---------------

let a=10;
let a=20;









