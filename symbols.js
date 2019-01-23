/*
    A symbol is a Javascript Primitive data type added in ES6

    Every symbol value returned from Symbol() is unique.

    A symbol value may be used as an identifier for object
    properties; this is the data type's only purpose.
*/

let log = console.log;

const sym1 = Symbol();
const sym2 = Symbol(123);
const sym3 = Symbol('Tashi');

log(sym1);
log(sym2);
log(sym3);
log(typeof(sym2));
log(sym3.toString());

// Symbol are unique
log(Symbol() == Symbol());
log(Symbol() === Symbol());

log(Symbol.for(123) === Symbol(123)); // false
log(Symbol.for(123) === Symbol.for(123)); // true
log(Symbol.keyFor(sym2)); //undefined

let sym4 = Symbol.for(444); //key created
log(Symbol.keyFor(sym4)); // retrieve the key i.e 444

// Using Symbol in Object
let obj = {};
obj['prop1']  = 'value1';
obj['prop2']  = 'value2';
obj[Symbol()] = 'value3';
obj['prop4']  = Symbol();

for (let item in obj) {
    log(item, obj[item]);
}

log(JSON.stringify(obj)); 