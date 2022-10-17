function biggerElement(arr) {
    let tampung = []
    let angka = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > angka){
            angka = arr[i]
        }
        
    }
    return angka
  }
  
  console.log(biggerElement([8,19,2,4]))
  // output: 19
 