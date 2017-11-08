// P1
const old_array = [1,2,3,4,5]
const new_array = old_array.map(num => num + 1)

// P2
const old_array = [false, true, false, false];
const new_boolean = old_array.reduce((acc, currentVal) => acc || currentVal, false);

// P7
const adder = x => y => x + y;
console.log(adder(1)(2))
