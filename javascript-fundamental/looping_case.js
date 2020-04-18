// looping
for (var i = 1; i < 11; i += 1) {
    console.log(i);
}


// looping menyamping
var s = "";
for (var i = 1; i < 11; i += 1) {
    s += i + " ";
}
console.log(s);


// Case
let a = 2+2;
switch(a) {
    case 3:
        console.log("too small");
        break;
    case 4:
        console.log("exactly");
        break;
    case 5:
        console.log("too large");
        break;
    default:
        console.log("idk");
}

// let a = 31;
// switch (true) {
//     case a > 84:
//         console.log("A");
//         break;
//     case a > 70:
//         console.log("B");
//         break;
//     case a > 55:
//         console.log("C");
//         break;
//     case a > 30:
//         console.log("D");
//         break;
//     case a < 30:
//         console.log("E");
//         break;
//     default:
//         console.log("idk");
// }



// }
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")
//     }
//     console.log()
// }

// let arr = ["apple", "orange", "pear"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let fruits = ["apple", "orange", "pear"];
// for(let fruit of fruits) {
//     console.log(fruit)
// }

// let arr = ["apple", "orange", "pear"];
// arr.forEach(function(fruits){
//     console.log(fruits);
// })