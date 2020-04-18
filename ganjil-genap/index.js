function GanjilGenap() {
    let MasukanAngka = parseInt(document.getElementById("Angka").value)
    for (let i = 1; i <= MasukanAngka; i++) {
        let div = document.createElement('div');
        if (i % 2 == 0) {
            div.textContent = "Angka " + i + " adalah bilangan genap";
            document.getElementById("hasilGanjilGenap").appendChild(div)

        } else {
            div.textContent = "Angka " + i + " adalah bilangan ganjil";
            document.getElementById("hasilGanjilGenap").appendChild(div)

        }
        // create.innerHTML
    }
}
