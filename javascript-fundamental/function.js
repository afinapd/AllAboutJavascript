// Function
// let Person = {
//     FirstName: "Afina",
//     MiddleName: "Putri",
//     LastName: "Dayanti",
//     FullName: function () {
//         return this.FirstName + " " + this.MiddleName + " " + this.LastName;
//     }
// }
// document.getElementById("tryFunction").innerHTML = Person.FullName();

var ok = function () {
    console.log("hi")
}
function cetak(apaaja) {
    apaaja()
}
cetak(ok)


var penjumalah = function (a, b) {
    console.log(a + b)
}
function calculate(a, b, operass) {
    operass(a, b)
}
calculate(1, 2, penjumalah)


let student = {
    firstName: "afina",
    lastName: "putri",
    getName: function () {
        let fullname = this.firstName + " " + this.lastName;
        return fullname;
    }
};

let studentName = function () {
    console.log(this.getName() + " namanya");
};

let studentNameWithInfo = function (age, address) {
    console.log(this.getName() + " namanya, umur " + age + ", alamat di " + address)
};

let studen001 = studentName.bind(student);
studen001();

studentNameWithInfo.apply(student, [10, "abc"]);


var motorA = {
    name: "honda",
    bike: function () {
        console.log(this.name)
    }
};
var motorB = {
    name: "yamaha",
    bike: motorA.bike
};
var motorC = {
    name: "vespa",
    bike: function () {
        console.log(this);
    }
}
var name = "kawasaki";
var bike = motorA.bike
bike();
motorA.bike();
motorB.bike();
console.log(this);

let ccc = motorC.bike.bind(motorA);
ccc();

let ddd = motorC.bike.bind(motorB);
ddd();


let oprt = [function penjumlahan(a, b) { console.log(a + b) }, function (a, b) { console.log(a - b) }]
oprt[1](2, 3)

function atas() {
    return function () {
        console.log('sss');
    }
}
atas()()


// Object
let user = {
    name: "Afina",
    age: 19,
    isAdmin: true
};
for (let key in user) {
    // console.log(key)
    console.log(user[key])
}

// // Object Destruction
// // Basic Assignment
// let o = { p: 30, q: true }; let { p, q } = o
// console.log(p)
// // Assigment without declaration
// let a, b; ({ a, b } = { a: 1, b: 2 });
// console.log(a + b)
// // Assigning to new variable names
// let r = { s: 42, t: true }; let { s: foo, t: bar } = r;
// console.log(bar)
var obj ={
    p:{
        q:{
            x:1,
            y:["a","b"]
        }
    }
}
var {p:{q:{x,y:[aa,bb]}}}=obj
console.log(aa)


class Car{
    constructor(brand, model, year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    drive() {
        console.log("move");
    }
    static maintenance() {
        console.log("maintaning");
    }
}
// let myCar = new Car("nissan","serena",2000);
// console.log(myCar.brand);
// myCar.drive();

// let carDewa = new Car("toyota","hilux",2013);
// let carDewi = carDewa;
// carDewi.brand="honda";
// console.log(carDewa.brand)

// // new function
// let carDewa = new Car("toyota","hilux",2013);
// carDewa.engine="V-Tech";
// carDewa.horn=function () {
//     console.log("beep2x");
// }
// console.log(carDewa)

// // Prototype
// Car.engine="Triptonic";
// let myCar = new Car("BMW","V6","2019");
// console.log(myCar.engine);

Car.prototype.engine="Triptonic";
let myCar = new Car("BMW","V6","2019");
console.log(myCar.engine);

// this
var object={
    prop:this,
    method:function () {
        return this;
    },
    embed:{
        method:function () {
            return this
        }
    }
};
console.log(object.prop);
console.log(object.method());
console.log(object.embed.method());
