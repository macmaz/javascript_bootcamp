'use strict';

var osoba = {
    imie: "Maciej",
    wzrost: 185,
    przedstawOsobe: function() {
        console.log("Cześć jestem " + this.imie);
    }
    
}

console.log(osoba["imie"]);
osoba.przedstawOsobe()

osoba.imie = "Adam";
console.log(osoba["imie"]);

osoba.przedstawOsobe()