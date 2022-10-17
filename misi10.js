function atendence(arr) {
    let result = {}
    // kerjakan disini
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]] in arr) {
           result[arr[i]] += 1
        } else {
            result[arr[i]] = 1
       }
        
    }
    return result;
}

console.log(atendence(['Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit', 'Hadir', 'Sakit']));
//{ Hadir: 5, Sakit: 5 }