function GradesClass() {
    let Nilai = document.getElementById("Grades").value
    switch (true) {
        case Nilai == 100 && Nilai >= 80:
            alert("A");
            break;
        case Nilai >= 60:
            alert("B");
            break;
        case Nilai >= 40:
            alert("C");
            break;
        case Nilai >= 20:
            alert("D");
            break;
        case Nilai >= 0:
            alert("E");
            break;
        default:
            alert("idk");
    }
    console.log(Nilai)
}