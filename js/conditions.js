var wzrostMateusz = 190;
var wzrostOlgi = 190;

/* warunek if */

if (wzrostOlgi < wzrostMateusz) {
    console.log ("Olga jest niższa");
}

/* warunek if else*/

if (wzrostOlgi < wzrostMateusz) {
    console.log ("Olga jest niższa");
}
else if (wzrostOlgi == wzrostMateusz) {
    console.log ("Są tego samego wzrostu");
}

else {
    console.log ("Olga jest wyższa");
}

/* warunek swich*/

var kolor = 'zielony';

switch (kolor) {
    case 'czerwony' :
    console.log ('Kolor: czerwony');
    break;
      case 'zielony' :
    console.log ('Kolor: zielony');
    break;
      case 'niebieski' :
    console.log ('Kolor: niebieski');
    break;
    default:
    console.log ('Inny kolor');
}