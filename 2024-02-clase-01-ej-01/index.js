// Pido dos extremos para comparar
const max = parseInt(prompt("Ingrese el máximo para comparar"));
const min = parseInt(prompt("Ingrese el mínimo para comparar"));

// Pido el número para comparar
const num = parseInt(prompt("Ingrese el número a comparar"));

// Verifico si el número está en rango
if (num >= min && num <= max) {
    // Entra acá si está entre el máximo y el mínimo 
    alert("El número está en rango");
}
else {
    alert("El número no está en rango")
}

if (num % 2 == 1) {
    // Es impar porque tiene resto 1
    alert("El número es impar");
}
else {
    // Es par porque el resto fue 0
    alert("El número es par");
}

// Otra forma
// Pregunta primero si es mayor al mínimo
//if (num >= min) {
    //Si lo anterior no se dio, se hace la otra pregunta
    //if (num <= max) {
        // Está en rango
    //}
    //else {
        // No está en rango
    //}
//}
//else {
    // No está en rango
//}