var jsonOsoby = {
    "osoby": [
    {
    imię: "Krystian",
    nazwisko:"Dziopa",
    wzrost:180,
    zainteresowania: [
    {nazwa:"podróze"},
    {nazwa:"gotowanie"}]
    
},
        {
    imię: "Wojtek",
    nazwisko:"Potocki",
    wzrost:180,
    zainteresowania: [
    {nazwa:"podróze"},
    {nazwa:"gotowanie"}]
    
},
        {
    imię: "Maciej",
    nazwisko:"Mazurek",
    wzrost:180,
    zainteresowania: [
    {nazwa:"podróze"},
    {nazwa:"gotowanie"}]
    
}
        ]
}

console.log(jsonOsoby);

jsonOsoby.osoby[2].zainteresowania.forEach(function(e,i){
    console.log(e.nazwa);
})

