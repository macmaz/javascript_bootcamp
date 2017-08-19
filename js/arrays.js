var imiona = ["monika", "krystian", "Lukasz"];
console.log (imiona);

imiona[3] = "Maria";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

imiona.push("Geralt");
console.log(imiona);

imiona.pop();
console.log(imiona);

console.log("******dodaje nowe elementy i zwraca długość tablicy******");

console.log(imiona.unshift("Robert"));
console.log(imiona);

console.log("******usuwa pierwszy element i go zwróci******");

console.log(imiona.shift());
console.log(imiona);

console.log("******ilość elementów******");

console.log("Ilość elementów w tablicy: " + imiona.length);

var imię = "Adam";
console.log(imiona.length);

console.log("******łączenie******");

console.log( imiona.join() ); 
console.log( imiona.join( " - " ) ); // wypisze się "Marcin - Ania - Agnieszka"
console.log( imiona.join( " + " ) ); // wypisze się "Marcin + Ania + Agnieszka"

console.log("*******odwrócenie********");

imiona.reverse(); // odwrócenie
console.log( imiona ); // wypisze się " Agnieszka, Ania, Marcin"

console.log("*******służy do sortowania tablicy.********");

imiona.sort(); // podstawowa wersja metody
console.log( imiona ); // wypisze się "Ania, Grześ, Marcin, Piotrek"

var imionaMeskie = ["Maciej", "Marcin", "Sławek"];

var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imiona męskie: " + imionaMeskie);

//przydatne funkcje

// wyswietla ktory index ma element
console.log(zbiorImion.indexOf("Michał")); 

//sprawdza czy zbior jest tablicą
console.log(Array.isArray(zbiorImion));

//wycina indeksy od 2 do 5
console.log(zbiorImion.slice(2,5));



