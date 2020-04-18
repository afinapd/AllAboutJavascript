// operator
var angka1 = 10;
var angka2 = 5;
var bagi = angka1 / angka2
var kali = angka1 * angka2
var tambah = angka1 + angka2
var kurang = angka1 - angka2
console.log(`${angka1} dibagi ${angka2} = ${bagi}`)
console.log(`${angka1} dikali ${angka2} = ${kali}`)
console.log(`${angka1} dijumlah ${angka2} = ${tambah}`)
console.log(`${angka1} dikurang ${angka2} = ${bagi}`)
let s = "hello" + "world"
console.log(s)
console.log("6"/"2")
console.log(2*"2")
let a =2;
let res=--a;
console.log(res)


// comparisons
console.log(5>7)
console.log(5==7)
console.log(5!=7)


// logical operator & conditional operator
let year = 2000
if (year == 2015) {
    console.log("right");
} else {
    console.log("wrong");
}

if (year<2015) {
    console.log("too early")
} else if (year>2015){
    console.log("too late")
} else {
    console.log("exactly")
}

(year == 2015)?
console.log("right") : console.log("wrong");

const readline = require(`readline`).createInterface({
    input:process.stdin,
    input:process.stdout
})