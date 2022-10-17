function removeDuplicate(arr) {
  // code here

  let result = [];
  let diff = false;

  for (let i = 0; i < arr.length; i++) {
    if (result.length == 0) {
      result.push(arr[i]);
    } else {
      for (let j = 0; j < result.length; j++) {
        if (arr[i] == result[j]) {
          diff = false;
          break;
        } else {
          diff = true;
        }
      }
      if (diff == true) {
        result.push(arr[i]);
      }
    }
  }
  return result.join(', ');
}

console.log(removeDuplicate(['Abi', 'Joko', 'Tono', 'Tono', 'Joko', 'Abi']));
// output: Abi, Joko, Tono
