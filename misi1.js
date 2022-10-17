function checkMunculnyaVocal(str) {
  let result = {
      a: 0,
      i: 0,
      u: 0,
      e: 0,
      o: 0,
  }
  // kerjakan disini
  for(let i =0; i < str.length; i ++){
    if(str[i].toLowerCase() == "a"){
      result.a += 1
    }else if(str[i].toLowerCase() == "i"){
      result.i += 1
    }else if(str[i].toLowerCase() == "u"){
      result.u += 1
    }else if(str[i].toLowerCase() == "e"){
      result.e += 1
    }else if (str[i].toLowerCase() == "o"){
      result.o += 1
    }
  }
  return result
}

console.log(checkMunculnyaVocal("Iwagakure, Kumogakure, Sunagakure, Konohagakure, Kirigakure"))
// { a: 8, i: 3, u: 7, e: 5, o: 3 }