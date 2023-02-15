//Modifica el tiempo de tardanza según la estación del año (default: PRIMAVERA/VERANO)
function estacionDelAno() {   
    lagunaJakob.modificaSegunEstacion();
}

//Modifica el tiempo de tardanza según el peso de la mochila (default: 9kg)
function pesoMochila() {   
    lagunaJakob.modificaSegunPesoMochila();
    console.log(lagunaNegra.tiempo);

}


//Muestra las montañas ingresadas y sus datos modificados por el usuario      
const compararMontanasIngresadas = () => {
    let compararMontanas = 'Compará las montañas ingresadas:';
    listaDeMontanasIngresadas.forEach((el, index) => {
        compararMontanas += `
                ${index + 1}) ${el.nombre} ---> ${el.dificultad}, ${el.altura}m, ${el.desnivel}m, ${el.tiempo}hs en subida
                `;
    });
    console.log(compararMontanas);
    alert(compararMontanas);
}         

//Muestra las opciones de las montañas disponibles
const montanasDisponibles = () => {
    let menuOpcionesMontanas = `Escribí el número correspondiente según la montaña a seleccionar:`;
    Montanas.forEach((el, index) => {
        menuOpcionesMontanas += `
                ${index + 1}) ${el.nombre} ---> ${el.dificultad}
                `;
    });
    let menuOpciones = parseInt(prompt(menuOpcionesMontanas));     
    listaDeMontanasIngresadas.push(Montanas[menuOpciones - 1]);      
    }; 


//Array de las montañas ingresadas
const listaDeMontanasIngresadas = [];

//Constructor de montañas e instancias
class Montana {
    constructor (nombre, dificultad, altura, desnivel, tiempo) {
        this.nombre = nombre;
        this.dificultad = dificultad; 
        this.altura = altura;
        this.desnivel = desnivel;
        this.tiempo = tiempo;
        }
        modificaSegunEstacion() {
            let estaciones = prompt('Ingrese la estación del año a viajar:');
            let estacionesMayus = estaciones.toUpperCase();
             if (estacionesMayus == "PRIMAVERA" || "VERANO") {
            return this.tiempo + 0;   
            } else {
             return this.tiempo + (this.tiempo * 0.6);
            }
          }

        modificaSegunPesoMochila() {
            let pesoMochila = parseInt(prompt("Ingrese el peso de su mochila expresado en kg mayor a 9kg")); 
            console.log(this.tiempo + (this.tiempo * (pesoMochila/100)));
            }
 }

//Montañas disponibles y datos de las mismas, el default del tiempo es en la estación PRIMAVERA/VERANO con una mochila de 9kg
const lagunaNegra = new Montana ("Laguna Negra", "Media", 1730, 800, 5);
const cerroCatedral = new Montana ("Cerro Catedral", "Baja", 2405, 1150, 6);
const cerroTronador = new Montana ("Cerro Tronador", "Alta", 2000, 1050, 8);
const lagunaJakob = new Montana ("Laguna Jakob", "Alta", 1600, 850, 7.30);
const refugioFrey = new Montana ("Refugio Frey", "Media", 1700, 890, 4.30);

const Montanas = [lagunaNegra, cerroCatedral, cerroTronador, lagunaJakob, refugioFrey];

//Bienvenida general y explicación
const bienvenida = `BIENVENIDX A TU CALCULADORA DE MONTAÑA DE BARILOCHE 
        Te ofrecemos distintas opciones de cerros según tu ubicación y calcularemos tu tiempo estimado de trekking para que puedas organizar de la mejor forma tu viaje`
alert(bienvenida);

//Menú principal
let nombreTurista = prompt ("Ingresá tu nombre");
let menuOpciones = prompt ("Hola " + nombreTurista + ` ---> Escribí la letra correspondiente según la opción a seleccionar.: 
            A) Cerros disponibles 
            B) Ingresar estación del año
            C) Ingresar peso de la mochila 
            D) Comparar cerros seleccionados
            E) SALIR`
            );

while(menuOpciones != 'E') {
    switch (menuOpciones) {
        case "A":
            montanasDisponibles();
            break;
        case "B":
            estacionDelAno();            
            break;
        case "C":
            pesoMochila();
            break;
        case "D":
            compararMontanasIngresadas();
                break;
        default:
            break;
     }
     menuOpciones = prompt ("Hola " + nombreTurista + ` ---> Escribí la letra correspondiente según la opción a seleccionar: 
                A) Cerros disponibles 
                B) Ingresar estación del año
                C) Ingresar peso de la mochila 
                D) Comparar cerros seleccionados
                E) SALIR`
     );
     if (menuOpciones == 'E') {
        alert ("Gracias por utilizar nuestra Calculadora de Montaña");
     }
    }
