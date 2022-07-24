console.log('conectado a actividad-2 parte 2')



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

console.warn('Actividad-Parte-2')

const diasDeLaSemana = {
    0: 'Domingo', 
    1: 'Lunes', 
    2: 'Martes', 
    3: 'Miercoles', 
    4: 'Jueves', 
    5: 'Viernes', 
    6: 'Sabado',
}

console.log(diasDeLaSemana[dia])