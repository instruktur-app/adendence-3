function convertItemsArrayOfStringToMultidimentionalArray(items) {
    // jawab disini
    return items.map(item =>item.split("|"))
}

console.log(convertItemsArrayOfStringToMultidimentionalArray([
    "BajuGamis|150000|fashion",
    "Mouse apple gen 3",
    "Macbook Pro M2 2022|22999000|computer",
    "Laging Manohara|320000|fashion",
    "Sepatu Ayu Tingting|31000000|fashion",
    "Pulsa 250000|250000|vocher",
]))

// [
//     [ 'BajuGamis', '150000', 'fashion' ],
//     [ 'Mouse apple gen 3' ],
//     [ 'Macbook Pro M2 2022', '22999000', 'computer' ],
//     [ 'Laging Manohara', '320000', 'fashion' ],
//     [ 'Sepatu Ayu Tingting', '31000000', 'fashion' ],
//     [ 'Pulsa 250000', '250000', 'vocher' ]
// ]