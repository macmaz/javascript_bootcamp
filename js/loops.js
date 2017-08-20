/* petla for */ 

for (var i=0; i< 4; i++) {
    console.log(i); //poczatek 0 ; jesli i<4 dodaje ++1 i wyswietla az i=4;
}

var imiona = ["Maciej", "Wojtek", "Kacper", "Paweł"];

for (var i=0; i<imiona.length; i++) {
    console.log(imiona[i]); //poczatek 0 ; jesli i<długość tablicy dodaje ++1 i wyswietla az i=4;
}

/* petla foreach */

var tablica = ["Krystian", "Monika", "Danuta"];

tablica.forEach( function( element, index ) {
console.log( "Element z Indexem: " + index + " ma wartość " + element );
});

/* petla while */


var i= 0 ;
while(i < 10) {
    console.log(i); //nieskonczonosc
    i++ //konczy petle po 10 razach
}

/* petla do...while */

/*var j=0;

do {
    console.log(j);
    j--;
}
while (j > 10 ) */ 
    
    for(var i=0; i<3; i++) {
        for(var j=0; i<3; i++) {
            console.log("i: " + i + " j: " + j);
            break;
        }
    }
    
    
/* petla continium */ 

for(var i=0; i<3; i++) {
        for(var j=0; i<3; i++) {
            console.log("i: " + i + " j: " + j);
           if(j % 2 == 0) {
               continue;
           }
            console.log("Koniec obiegu");
        }
    }
    