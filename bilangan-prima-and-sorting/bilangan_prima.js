function BilanganPrima() {
    let MasukanAngka = parseInt(document.getElementById("AngkaPrima").value)
    for (let i = 1; i <= MasukanAngka; i++) {
        let div = document.createElement('div');

        if (i == 2 || i == 3 || i == 5 || i == 7) {
            div.textContent = i + " bilangan prima"
            document.getElementById("hasilBilanganPrima").appendChild(div)
        } else if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            div.textContent = i + " bukan bilangan prima"
            document.getElementById("hasilBilanganPrima").appendChild(div)
        } else if (i == 1) {
            div.textContent = i + " bukan bilangan prima"
            document.getElementById("hasilBilanganPrima").appendChild(div)
        } else {
            div.textContent = i + "  bilangan prima"
            document.getElementById("hasilBilanganPrima").appendChild(div)
        }
    }
}
