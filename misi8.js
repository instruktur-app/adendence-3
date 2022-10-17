function kasirApp(cart) {
    let stok = {
        "Buku": 100,
        "Pensil": 100,
        "Pena": 100,
    }
    for (let i = 0; i < cart.length; i++) {
        let jenis_barang = cart [i][0]
        let harga_barang = cart [i][1]
        stok[jenis_barang] -= harga_barang
    }
    return stok;
}

console.log(kasirApp([
    ["Buku", 30],
    ["Pena", 12],
]))