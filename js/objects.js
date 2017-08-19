'use strict';

/*var maciej = {
    imie: "Maciej",
    wzrost: 185,
    przedstawOsobe: function () {
        console.log("Cześć jestem " + this.imie);
    }

}

console.log(maciej["imie"]);
maciej.przedstawOsobe()

maciej.imie = "Adam";
console.log(maciej["imie"]);

maciej.przedstawOsobe()

var kaja = {
    imie: "Kaja",
    wzrost: 165,
    przedstawOsobe: function () {
        console.log("Cześć jestem " + this.imie + " i mam " + this.wzrost + " cm wzrostu:)");
    }

}

kaja.przedstawOsobe() */

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }
    
    wyswietlInfo() {
        console.log (this.imie + "\n" 
            + this.nazwisko + "\n"
            +this.wzrost + "\n"
            +this.oczy)
    }
}

var maciej = new Osoba('Maciej', 'Mazurek', '180', 'niebieskie'); /*stwórz nową instancję obiektu Osoba*/

maciej.wyswietlInfo(); /*wywołuje funkcje*/