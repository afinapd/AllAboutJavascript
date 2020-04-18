// new
function laptop() {
    return"";
}
const l = new laptop()
console.log(l)

function computer(price) {
    this.brand="apple";
    // no return statement == return this;
    // return must be object, e.g return price;will return this
    // return {price:price}==return{price};
}
const p = new computer(1000);
console.log(p);
console.log(p.brand);

function global() {
    console.log("from global",this);
    function sub() {
        console.log("from sub global",this);
    }
    sub();
    this.sub2=function() {
        console.log(this);
        setTimeout(()=> {
            console.log(this);
        },1000)
    };
    // this.sub2=function() {
    //     console.log(this);
    //     setTimeout(function() {
    //         console.log(this);
    //     },1000)
    // };
    return this;
}
let g=new global();
g.sub2();

// function p1() {
//     console.log("enigma 1");
// }
// function p2(callback) {
//     setTimeout(
//         function () {
//             console.log("enigma 2")
//             callback()
//         },5000
//     )
// }
// function p3() {
//     console.log("enigma 3")
// }
// p1()
// p2(p3)

// function one() {
//     setTimeout(function(){
//         console.log("first");
//     },2000)
// };

// // Promise
// let janjian = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve(" sukses")
//     },250)
// })
// janjian.then((successMessage)=>{
//     console.log("yay"+successMessage)
// })

// Resolve Reject
// function rr(angka){
//     return new Promise((resolve,reject){
//         setTimeout(
//             ()=>{
//                 if(angka===3){
//                     resolve("berhasil")
//                 } else{
//                     reject("gagal")
//                 }
//             },3000);
//     })
// }
// rr(2)
// .then(ok=>{
//     console.log(ok);
// })
// .catch(err=>{
//     console.log(err);
// })
const firstPromise=()=>(new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("first promise")},1000)
}))
const secondPromise=()=>(new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("second promise")},1000)
}))
const thirdPromise=()=>(new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("third promise")},1000)
}))

async function paralel(){
    let a = firstPromise()
    let b = secondPromise()
    let c = thirdPromise()
    console.log("done paralel")
}

var serial = async () =>{
    // try{
    //     let a = await firstPromise()
    // } catch(error){
    //     console.log(error)
    // }
    let a = await firstPromise()
    let b = await secondPromise()
    let c = await thirdPromise()
    console.log("done serial")
};
serial()

// Promise.all([
//     firstPromise(),
//     secondPromise(),
//     thirdPromise()
// ])
// .then(function(values){
//     console.log(values)
// })
// paralel()
serial()