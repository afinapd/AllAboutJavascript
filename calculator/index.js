function Calculator() {
    let angkaPertama = parseInt(document.getElementById("Angka1").value)
    let angkaKedua = parseInt(document.getElementById("Angka2").value)
    let operasi = document.getElementById("Operation").value
    let hasil;

    if (operasi = "+") {
        hasil = angkaPertama + angkaKedua
    } else if (operasi = "-") {
        hasil = angkaPertama - angkaKedua
    } else if (operasi = "*") {
        hasil = angkaPertama * angkaKedua
    } else {
        hasil = angkaPertama / angkaKedua
    }

    // switch (operasi) {
    //     case "+": hasil = angkaPertama + angkaKedua; break;
    //     case "-": hasil = angkaPertama - angkaKedua; break;
    //     case "*": hasil = angkaPertama * angkaKedua; break;
    //     case "/": hasil = angkaPertama / angkaKedua; break;
    // }
    document.getElementById("hasilCalculator").innerHTML = hasil
}
