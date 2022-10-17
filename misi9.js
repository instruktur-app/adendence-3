function male(he) {
    // kerjakan disini
    return 'Hai Mas. ' + he 
}

function feMale(she) {
    // kerjakan disini
    return 'Halo Mba. ' + she
}

function saiHai(name, call) {
    // kerjakan disini
    if (call == 'he'){
        return male (name)
    }
    else {
        return feMale (name)
    }
}

console.log(saiHai("Dono", "he"))
// Hi Mas. Dono

console.log(saiHai("Dini", "she"))
// Halo Mba. Dini