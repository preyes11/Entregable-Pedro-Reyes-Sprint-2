function envio() {
    const nombre = document.getElementById("nombre")
    const monto = document.getElementById("monto");

    if (nombre != "" && monto.value != "") {
        sumaTotal(monto.value);
        agregarPersonas(nombre, monto.value);

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
    Total.innerHTML = ' $ {montoTotal} ';
}

let cantPeople = 0;

const agregarPersonas =(nombre, monto) => {
    const Totales = document.getElementById("Totales");
    let persona = document.createElement("p");
    const texto = nombre + " : $" + monto;
    persona.innerHTML = texto;
    resultados.appendChild(persona);

    cantPeople++;

    const CUPaga = document.getElementById("CUPaga");
    const montoAPagarCU = parseINT(montoAPagarCU) / cantPeople;
    CUPaga.innerHTML = "$" + montoAPagarCU;
}