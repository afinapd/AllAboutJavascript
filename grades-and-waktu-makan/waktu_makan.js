function WaktuMakan() {
    let waktumakan = document.getElementById("JamMakan").value;
    if (waktumakan >= 7 && waktumakan <= 9) {
        alert("Waktu Makan");
    } else if (waktumakan >= 12 && waktumakan <= 14) {
        alert("Waktu Makan");
    } else if (waktumakan >= 19 && waktumakan <= 21) {
        alert("Waktu Makan");
    } else if (waktumakan > 24) {
        alert("Waktu Tidak Ditemukan");
    } else {
        alert("Belum Waktunya Makan");
    }
}

// Tugas Waktu Makan with Console
const Waktu = require("readline").createInterface(process.stdin, process.stdout);
Waktu.question(`Masukan Jam :`, (waktumakan) => {
    console.log(` ${waktumakan}`)
    Waktu.close()
    if (waktumakan >= 1 && waktumakan <= 24) {
        if (waktumakan >= 7 && waktumakan <= 9 || waktumakan >= 12 && waktumakan <= 14 || waktumakan >= 19 && waktumakan <= 21) {
            console.log("Waktu Makan")
        }
        else {
            console.log("Belum Waktu Makan")
        }

    } else {
        console.log("Waktu Tidak Ditemukan");
    }
})