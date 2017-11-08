
// Mutatable Array in For Loop
const old_array = [1,2,3,4,5]
for (let i =0; i < old_array.length; i++) {
  old_array[i] = old_array[i] + 1;
}

console.log(old_array)


// First Improvement to the For Loop
let new_array = [];
const old_array = [1, 2, 3, 4, 5];

for (let i = 0; i < old_array.length; i++) {
  new_array.push(old_array[i] + 1)
}
console.log(new_array)


// For Loop Before Reduce
let new_boolean = false;
const old_array = [false, true, false, false];

for (let i = 0; i < old_array.length; i++) {
  if (old_array[i]) {
    new_boolean = true
  }
}
console.log(new_boolean)