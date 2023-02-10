//bienvenida general
const bienvenida = "Bienvenidx a tu Calculadora de Montaña"
alert(bienvenida);

//bienvenida personalizada y explicación de la aplicación
let bienvenidaPersonalizada = prompt ("Ingresá tu nombre");
alert("Hola " + bienvenidaPersonalizada + " ---> Calcularemos tu tiempo estimado de trekking según distancia en km, desnivel en m, clima, y si el camino lo realizás de forma individual o grupal" )


//selección del Cerro e indicación de su dificultad
let seleccionCerro = prompt ("Escribí la letra correspondiente según el sendero a seleccionar: A) Cerro Aconcagua --- B) Volcán Lanín --- C) Cerro Lindo --- D) Cerro López --- E) Volcán Tronador /// Para saltear, escribí OTRA");

while(seleccionCerro != 'OTRA') {
switch (seleccionCerro) {
    case "A":
        console.log("El cerro/volcán seleccionado es Cerro Aconcagua y su dificultad es ALTA, sólo expertos");
        alert ("Dificultad ALTA, sólo expertos")
        break;
    case "B":
        console.log("El cerro/volcán seleccionado es Volcán Lanín y su dificultad es MEDIA");
        alert ("Dificultad MEDIA")
        break;
    case "C":
        console.log("El cerro/volcán seleccionado es Cerro Lindo y su dificultad es MEDIO/BAJA");
        alert ("Dificultad MEDIO/BAJA")
        break;
    case "D":
        console.log("El cerro/volcán seleccionado es Cerro López y su dificultad es BAJA");
        alert ("Dificultad BAJA")
        break;
    case "E":
        console.log("El cerro/volcán seleccionado es Volcán Tronador y su dificultad es MEDIA/BAJA");
        alert ("Dificultad MEDIA/BAJA")
        break;
    default:
        alert ("Has ingresado una letra NO válida")
        break;
 }
 break;
}

// distancia sólo de subida
let distanciaSubida = parseInt(prompt ("Ingresá la distancia a recorrer en kilómetros sólo en SUBIDA"));

// desnivel sólo de subida
let desnivelSubida = parseInt(prompt ("Ingresá el desnivel en metros sólo en SUBIDA"));

// clima
let clima = prompt ("Elegí la opción climática: A) Clima sin lluvia --- B) Clima lluvioso");

//velocidad grupal o individual
let velocidad = prompt ("Elegí la opción más adecuada a tu viaje: A) velocidad individual --- B) velocidad grupal");





//Tiempo de viaje promedio sólo de SUBIDA: se estima 4km por hora y 300m verticales en ascenso por hora. El cálculo es (DISTANCIA/4) + ((DESNIVEL/300)/2) con clima SOLEADO y de forma INDIVIDUAL; si LLUEVE, se le agrega un 20% a la duración total de subida y si el camino es de forma GRUPAL, se le incrementa un 10% a la duración total de subida. 
let resultadoSUBIDA = 0;

function promedioSUBIDA (distanciaSubida, desnivelSubida) {
    resultadoSUBIDA = distanciaSubida / 4 + ((desnivelSubida/300) / 2)
}

promedioSUBIDA(distanciaSubida, desnivelSubida);


//El tiempo de viaje promedo de BAJADA se calcula un 80% del tiempo total de SUBIDA
let resultadoBAJADA = 0;

function promedioBAJADA (resultadoSUBIDA) {
    resultadoBAJADA = resultadoSUBIDA * 0.8
}
promedioBAJADA(resultadoSUBIDA);


//Suma de tiempo de SUBIDA + BAJADA
let resultadoTOTAL = 0;
let resultadoTOTALredondeo = 0;
let factorClima = 0;
let factorVelocidad = 0;

if (clima == "B") {
    factorClima = resultadoSUBIDA * 0.2;   
} else {
    factorClima = resultadoSUBIDA * 0;
}

if (velocidad == "B") {
    factorVelocidad = resultadoSUBIDA * 0.1;   
} else {
    factorVelocidad = resultadoSUBIDA * 0;
}

function promedioTOTAL (resultadoSUBIDA, resultadoBAJADA, factorClima, factorVelocidad) {
    resultadoTOTAL = resultadoSUBIDA + resultadoBAJADA + factorClima + factorVelocidad
}
promedioTOTAL (resultadoSUBIDA, resultadoBAJADA, factorClima, factorVelocidad);


//Redondeo a 2 decimales
function promedioREDONDEO (resultadoTOTAL) {
     resultadoTOTALredondeo = resultadoTOTAL.toFixed(2);
     return resultadoTOTALredondeo;
}
promedioREDONDEO (resultadoTOTAL);

//Mostramos el resultado promedio en pantalla,redondeado
function mostrar (resultadoTOTALredondeo) {
    alert("El tiempo estimado de SUBIDA y de BAJADA es de " + resultadoTOTALredondeo + " hs")
}

mostrar(resultadoTOTALredondeo);



//Para agregar en el futuro, podría estipularse el tiempo teniendo en cuenta PESO de la mochila, estado FISICO y cantidad de PARADAS en el recorrido.