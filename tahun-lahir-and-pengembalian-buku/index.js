// readline
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const readline = require("readline").createInterface(process.stdin, process.stdout);
readline.question(`masukan tahun lahir: ` ,(angka) => {
    console.log(`tahun lahir anda adalah ${angka}!`)
    readline.close()
    if (angka<2000){
        console.log("umur ada lebih dari 20 tahun");
    } else{
        console.log("umur anda belum 20 tahun");
    }
})

const pengembalianBuku = require("readline").createInterface(process.stdin, process.stdout);
pengembalianBuku.question(`Tanggal Pengembalian Buku :`,(tanggal)=>{
    console.log(`anda mengembalikan buku tanggal ${tanggal} Februari 2020`)
    pengembalianBuku.close()
    if (tanggal > 3 && tanggal < 12){
        console.log("Anda tepat waktu");
    } else{
        console.log("Anda Telat !");
    }
})


function myFunction() {
    let Pengembalian_Buku = document.getElementById("pengembalianBuku").value;
    (Pengembalian_Buku > 3 && Pengembalian_Buku < 12)?
    alert("Anda tepat waktu") : alert("Anda Telat !");
}