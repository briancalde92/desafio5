
// ** EJERCICIO 1: **
// Crear una variable con un valor numérico libre:
// var cantidadDeGatos = 10;

console.log('ejercicio 1:');


const cantidadDeGatos = 100;

for (let index =1 ; index <= cantidadDeGatos ; index++){
  
   const gatos= "Gato #";

   if (index % 2 === 0) {

    console.log(gatos + `${ index}:😺`);


} else if (index % 3 === 0) {
    console.log(gatos +`${ index}:😹`);
   } else {
    console.log(gatos + `${ index}:😸`);
    
}
       

}

// ** EJERCICIO 2: **

// Crear 2 variables con valores numéricos libres:
// var cantidadDegatos = 5;
// var cantidadDePasos = 3;

console.log("");

console.log("Ejercicio 2");

var cantidadDegatos = 8;
var cantidadDePasos = 5;

for (let i = 1 ; i <= cantidadDegatos; i++) {
    const gato = "Gato # ";
    const gatitonum = gato + `${i}: 🐈`;
    let huellas= gatitonum;
for (let y=0; y <cantidadDePasos; y++) {
    huellas = huellas.concat("🐾");
    }
    
    console.log(huellas);
    
}


// ** EJERCICIO 3 **
// Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:
// var cantidadDeGatos = 10;
// var cantidadDePasos = 4;

console.log("")

console.log("Ejercicio 3");

var CantidadDeGatos = 12;
var CantidadDePasos = 8; 

for (let i = 1; i <=CantidadDeGatos; i++) {
const gato = "Gato#";
if (i % 2===0) {
    var GatoCuboNegro = ("🐈‍⬛");
} else {
    var GatoCuboNegro = ("🐈");
}

const gatitonum = gato + `${i}: ${GatoCuboNegro}`;
let huellas = gatitonum;

for (let y = 0; 1 < CantidadDePasos; y++) {
    huellas = huellas.concat ("🐾");
    
}
    console.log(huellas);
}

// Gato #1: 🐈 🐾🐾🐾🐾
// Gato #2: 🐈‍⬛ 🐾🐾🐾🐾

