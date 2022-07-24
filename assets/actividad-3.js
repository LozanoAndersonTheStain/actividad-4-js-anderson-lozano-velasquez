console.log('conectado a actividad 3 - parte 3')

let cantidadDeHombres = parseInt(prompt('Ingrese la cantidad de hombres'))
let cantidadDeMujeres = parseInt(prompt('Ingrese la cantidad de mujeres'))

const totalPersonas = cantidadDeHombres + cantidadDeMujeres

let porcentajeDeHombres = ((cantidadDeHombres * 100) / totalPersonas)
let porcentajeDeMujeres = ((cantidadDeMujeres * 100) / totalPersonas)

console.log(`El porcentaje de hombres es ${Math.round(porcentajeDeHombres)
}%, y el porcentaje de mujeres es ${Math.round(porcentajeDeMujeres)}%`)
