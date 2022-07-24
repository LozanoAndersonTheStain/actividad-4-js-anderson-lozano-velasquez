console.log('Conectado a actividad - 1 - parte 1')


console.warn('Dias de la semana')

const hoy = new Date()

console.log({ hoy })

let dia = hoy.getDay()

console.log({ dia })

if( dia === 0 ){
    console.log('Domingo')
} else if ( dia === 1 ) {
    console.log('Lunes')
} else {
    console.log('No es ni Domingo ni Lunes')
}



console.warn('Actividad-Parte-1')

const diasDeLaSemana = [
    'Domingo', 
    'Lunes', 
    'Martes', 
    'Miercoles', 
    'Jueves', 
    'Viernes', 
    'Sabado',
]

console.log(diasDeLaSemana[dia])