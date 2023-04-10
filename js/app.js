///creacion de objetos con constructor y class "exoplanetas"

const exo1 = new exoPlanetas("Trappist", 0.41, 41, 14.85, "candidato", 6.1);
const exo2 = new exoPlanetas("ProximaCentaurib", 1.27, 4.2, -46.7, "Psicroplaneta", 11.2);
const exo3 = new exoPlanetas("Kepler442b", 2.36, 1115, -38.5, "Psicroplaneta", 112);
const exo4 = new exoPlanetas("KOI4878", 0.99, 1075, 14.85, "candidato", 449);
const exo5 = new exoPlanetas("Teegardenb", 1.55, 12, -6.15, "mesoplaneta", 4.91);
const exo6 = new exoPlanetas("Gliese667", 3.8, 22.8, 13.25, "mesoplaneta", 28.14);
const exo7 = new exoPlanetas("Ross128b", 25.93, 14, 38.55, "candidato", .82);
const exo8 = new exoPlanetas("Wolf1661b", 3.41, 14, 1.85, "mesoplaneta", 17.9)
const exo9 = new exoPlanetas("tierra", 1, 0, 14, "mesoplaneta", 365)

///creo un array con los exoplanetas:
const planetas = [exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9]
console.log(planetas)

/// funcion para mostrar lista de planetas y navegar entre distintos objetos del array

function mostrarDatosPlaneta(planeta) {
    const mensaje = "nombre: " + planeta.nombre + "\n" +
        "masa: " + planeta.masa + "\n" +
        "distancia: " + parseFloat(planeta.distancia) + "\n" +
        "temperatura: " + parseFloat(planeta.temperatura) + "\n" +
        "tipo: " + planeta.hClase + "\n" +
        "periodoOrbital: " + parseFloat(planeta.duracionAno);
    alert(mensaje);
}

function seleccionarPlaneta() {
    let opciones = "";
    for (let i = 0; i < planetas.length; i++) {
        opciones += i + 1 + ". " + planetas[i].nombre + "\n";
    }
    let menu = prompt("Seleccione un planeta o exit para salir: " + opciones);
    while (menu !== null) {
        const index = parseInt(menu) - 1;
        if (index >= 0 && index < planetas.length) {
            mostrarDatosPlaneta(planetas[index]);
        } else {
            alert("adios!");
            break;
        }
        menu = prompt("Seleccione otro planeta o presione Cancelar para salir: " + opciones);
    }
}

/// Llamada a la función 
seleccionarPlaneta();

/// utilizacion de filter() para crear un nuevo array con los planetas candidatos a tener vida
const planetasCandidatos = planetas.filter(planeta => planeta.hClase === "candidato");
console.log(planetasCandidatos)

/// ordeno los planetas de menos a mas masa

console.table(planetas.sort((a, b) => a.masa - b.masa));

/// funcion para separar en dos array nuevos los exoplanetas segund su distancia de la tierra en UA

function distanciasUa() {
    let noTanLejos = []
    let lejisimos = []
    for (let i = 0; i < planetas.length; i++) {
        if (planetas[i].distancia < 50) {
            noTanLejos.push(planetas[i]);
        } else {
            lejisimos.push(planetas[i])
        }
    }
    console.log("Planetas no tan lejos:", noTanLejos)
    console.log("Planetas lejanos:", lejisimos)
}

//llamo la funcion
distanciasUa()




