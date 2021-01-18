// var name1 = 'mateo'
// var obj = { }

// obj[name1] = 105
// obj.name1 = 106
// obj.mateo = 107
// obj["mateo"] = 108

// console.log(obj)

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5}
let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5}


// let tester = Object.keys(obj)
// let tester = Object.values(obj)
// console.log(tester)

let tester = Object.is(obj, obj1)
console.log(tester)



