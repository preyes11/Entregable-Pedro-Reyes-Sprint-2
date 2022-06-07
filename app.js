function envio() {
    const nombreImput = document.getElementById("Nombre")
    const montoImput = document.getElementById("Monto");

    if (nombreImput != "" && montoImput.value != "") {
        sumaTotal(montoImput.value);
        addPeople(nombreImput, montoImput.value);

        nombreImput.value ="";
        montoImput.value ="";
    } 
    else {
        alert("Por favor, complete el formulario");
    }
}

let montoTotal = 0;

function sumaTotal(monto) {
    let totalTextContainer = document.getElementById("totalTextContainer");
    montoTotal = montoTotal + parseInt (monto);
    totalTextContainer.innerHTML = ' $ $ {montoTotal} ';
}

let cantPeople = 0;

const addPeople =(nombre, monto) => {
    const resultados = document.getElementById("resultados");
    let persona = document.createElement("p");
    const texto = nombre + " : $" + monto;
    persona.innerHTML = texto;
    resultados.appendChild(persona);

    cantPeople++;

    const aPagarCU = document.getElementById("aPagarCadaUno");
    const montoAPagarCU = parseINT(montoTotal) / cantPeople;
    aPagarCU.innerHTML = "$" + montoAPagarCU;
}