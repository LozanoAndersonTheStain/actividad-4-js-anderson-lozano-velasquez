console.log('conectado a actividad 4 - parte 4')

let Num1 = prompt('Ingrese el primer numero')
Num1 = parseInt(Num1)

let Num2 = prompt('Ingrese el segundo numero')
Num2 = parseInt(Num2)

let suma = Num1 + Num2

let resta = Num1 - Num2

let multiplicacion = Num1 * Num2

let divicion = Num1 / Num2

let acceder = parseInt(prompt(`Elija la acción que desea realizar: 1 sumar, 2 restar, 3 multiplicar, 4 dividir`))


if (acceder === 1){
    alert(`El resultado de la suma es: ${suma}`)
} 
else
if (acceder === 2){
    alert(`El resultado de la resta es: ${resta}`)
}
else
if (acceder === 3){
    alert(`El resultado de la multiplicación es: ${multiplicacion}`)
}
else
if (acceder === 4){
    alert(`El resultado de la divición es: ${divicion}`)
}
else {
    alert(`Usted eligio una acción no existente`)
}