// Pido datos por prompt
let categoria = parseInt(prompt("Ingrese categoría (1, 2 o 3) para salarios de usd 1000, usd 1500 y usd 2000"));
let subcategoria = prompt("Elija la subcategoría (A, B, C) para multiplicadores de 1.5, 2 y 2.5");
// Asigno sueldo según la categoría
if(categoria == 1) {
    let sueldo = 1000;
}
else if(categoria == 2) {
    let sueldo = 1500;
}
else {
    let sueldo = 2000;
}

alert(`El sueldo es de ${sueldo}`);