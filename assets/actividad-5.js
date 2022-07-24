console.log('Conectado a actividad - 5 - parte 5')

let tipoHuevo = parseInt(prompt(`¿Cúal es el tipo de huevos que quieres comprar?: Elije 1 para llevar huevos tipo 'A' o elije 2 para llevar huevos tipo 'AA'`))

let huevosAdquiridos = parseInt(prompt('Ingrese la cantidad de huevos que desea llevar'))

if (tipoHuevo = 1 && huevosAdquiridos < 101){
    alert(`Usted debe pagar una cantidad de ${(220 * huevosAdquiridos)}`)
} 
else 
if (tipoHuevo = 1 && huevosAdquiridos > 100 && huevosAdquiridos < 201){
    alert(`Usted debe pagar una cantidad de ${(220 * huevosAdquiridos) / 0.05}`)
}
else
if (tipoHuevo = 1 && huevosAdquiridos > 221 && huevosAdquiridos < 301){
    alert(`Usted debe pagar una cantidad de ${(220 * huevosAdquiridos) / 0.08}`)
}
else
if (tipoHuevo = 1 && huevosAdquiridos > 301){
    alert(`Usted debe pagar una cantidad de ${(220 * huevosAdquiridos) / 0.1}`)
}
else
if (tipoHuevo = 2 && huevosAdquiridos < 101){
    alert(`Usted debe pagar una cantidad de ${(220 * huevosAdquiridos)}`)
}
else 
if(tipoHuevo = 2 && tipoHuevo > 100 && huevosAdquiridos < 201){
    alert(`El total a pagar es ${(250 * huevosAdquiridos)/ 0.05}`)
}
else 
if(tipoHuevo = 2 && huevosAdquiridos> 201 && huevosAdquiridos < 301){
    alert(`El total a pagar es ${(250 * huevosAdquiridos)/ 0.08}`)
}
else 
if(tipoHuevo = 2 && huevosAdquiridos >= 301){
    alert(`El total a pagar es ${(250 * huevosAdquiridos)/ 0.10}`)
}