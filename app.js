const nombres = []; //Faltaban declarar las listas de nombres y de montos (sino siempre ibas a tener un solo el último nombre)
const montos = []; //idem pero con montos
const resultados = document.getElementById("list-group") //Faltaba declarar un espacio de lista en el html y levantarlo desde acá

function envio() {
    const nombre = document.getElementById("nombre")
    const monto = document.getElementById("monto");

    if (nombre != "" && monto.value != "") {
        sumaTotal(monto.value); 
        agregarPersonas(nombre.value, monto.value); //Faltaba el  ".value" despues de nombre por lo cual no podia levantar bien el valor por eso te aparecia el ObjectHtml...

        nombre.value ="";
        monto.value ="";
    } 
    else {
        alert("Por favor, complete el formulario");
    }
}

let montoTotal = 0;

function sumaTotal(monto) {
    let Total = document.getElementById("Total");
    montoTotal = montoTotal + parseInt (monto);
    Total.innerHTML = montoTotal;
}

let cantPeople = 0;

const agregarPersonas =(nombre, monto) => {
    //no existe el id "Totales" const Totales = document.getElementById("Totales");
    nombres.push(nombre); //Agrego el nombre a la lista de nombres
    montos.push(monto); //idem con montons

    const li = document.createElement('li'); //inicio un elemento de lista   (<p> es párrafo)
    li.classList.add('list-group-item'); //Agrego mi lista al html
    const text = document.createTextNode(`${nombres[nombres.length - 1]}: $${montos[montos.length - 1]}` ); //Armo el texto de cada línea. esto da como resultado "nombre: $monto
    li.append(text); //agrego mi texto (el anterior) a mi lista
    resultados.appendChild(li); //agrego mi elemento a "resultados"
    
    cantPeople++;

    const CUPaga = document.getElementById("CUPaga");
    const montoAPagarCU = parseINT(montoAPagarCU) / cantPeople;
    CUPaga.innerHTML = "$" + montoAPagarCU; 
}