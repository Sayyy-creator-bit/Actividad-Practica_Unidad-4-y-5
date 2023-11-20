function calcularFacturacion() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var costoConsulta = parseFloat(document.getElementById('costoConsulta').value);
    var costoHospitalizacion = parseFloat(document.getElementById('costoHospitalizacion').value);
    var diasHospital = parseInt(document.getElementById('diasHospital').value);
    var costosVarios = parseFloat(document.getElementById('costosVarios').value);
    var costoMedicamentos = parseFloat(document.getElementById('costoMedicamentos').value);
    var deduccionesMedicamentos = parseFloat(document.getElementById('deduccionesMedicamentos').value) || 0;
    var deduccionesConsulta = parseFloat(document.getElementById('deduccionesConsulta').value) || 0;
    var deduccionesHospitalizacion = parseFloat(document.getElementById('deduccionesHospitalizacion').value) || 0;
    var deduccionesSeguro = parseFloat(document.getElementById('deduccionesSeguro').value) || 0;

    // Realizar cálculos
    var gastosTotales = costoConsulta + (costoHospitalizacion * diasHospital) + costosVarios + costoMedicamentos;
    var deducciones = deduccionesMedicamentos + deduccionesConsulta + deduccionesHospitalizacion + (gastosTotales * deduccionesSeguro / 100);
    var gastoTotalMenosDeducciones = gastosTotales - deducciones;

    // Mostrar resultados
    var resultadoHTML = "Nombre del Paciente: " + nombre + "<br>";
    resultadoHTML += "Desglose de Gastos:<br>";
    resultadoHTML += " - Costo de Consulta: $" + costoConsulta + "<br>";
    resultadoHTML += " - Costo de Hospitalización: $" + (costoHospitalizacion * diasHospital) + "<br>";
    resultadoHTML += " - Costos Varios: $" + costosVarios + "<br>";
    resultadoHTML += " - Costo de Medicamentos: $" + costoMedicamentos + "<br>";
    resultadoHTML += "Gastos Totales: $" + gastosTotales + "<br>";
    resultadoHTML += "Deducciones: $" + deducciones + "<br>";
    resultadoHTML += "Gasto Total menos Deducciones: $" + gastoTotalMenosDeducciones;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}
function limpiar() {
    
    document.getElementById("resultado").innerHTML= "";  
    document.getElementById('nombre').value = "";
    document.getElementById('costoConsulta').value = "";
    document.getElementById('costoHospitalizacion').value = "";
    document.getElementById('diasHospital').value = "";
    document.getElementById('costosVarios').value = "";
    document.getElementById('costoMedicamentos').value = "";
    document.getElementById('deduccionesMedicamentos').value = "";
    document.getElementById('deduccionesConsulta').value = "";
    document.getElementById('deduccionesHospitalizacion').value = "";
    document.getElementById('deduccionesSeguro').value = "";
}

