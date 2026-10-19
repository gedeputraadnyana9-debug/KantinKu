function hitung() {
    var jumlah = document.getElementById("jumlah").value;
    var harga = document.getElementById("harga").getAttribute("value");
    var total = jumlah * harga;
    document.getElementById("subTotal").innerHTML = "Rp " + total;

    if (jumlah === "0" || jumlah === "") {
        alert("Mohon masukkan jumlah pesanan terlebih dahulu");
        document.getElementById("subTotal").innerHTML = "Rp 0";
        document.getElementById("diskon").innerHTML = "Rp 0";
        document.getElementById("totalPembayaran").innerHTML = "Rp 0";
        return;
    };
    if (jumlah < 0) {
        alert("Error jumlah pesanan tidak boleh minus");
        document.getElementById("jumlah").value = 0;
        document.getElementById("subTotal").innerHTML = "Rp 0";
        document.getElementById("diskon").innerHTML = "Rp 0";
        document.getElementById("totalPembayaran").innerHTML = "Rp 0";
        return;
    }
    var subTotal = jumlah * harga;
    
    var persenDiskon = 0;
    if (subTotal >= 100000) {
        persenDiskon = 20;
    } else if (subTotal >= 50000) {
        persenDiskon = 10;
    }

    var nilaiDiskon = (persenDiskon / 100) * subTotal;
    var totalAkhir = subTotal - nilaiDiskon;

    document.getElementById("subTotal").innerHTML = "Rp " + subTotal
    document.getElementById("diskon").innerHTML =" (" + persenDiskon + "%)" + " Rp " + nilaiDiskon;
    document.getElementById("totalPembayaran").innerHTML = "Rp " + totalAkhir;
}


