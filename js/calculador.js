import { valorDeCompra } from "./variables.js";
import { cuotasBancarizadas, cuotasSinBancarizar } from './arrays.js'

export const calcularCuotas = (esBancarizada) => {
    const montoDeCompra = parseFloat(valorDeCompra.value);
    if (isNaN(montoDeCompra) || montoDeCompra <= 0) {
        alert("Por favor, ingrese un valor de compra válido.");
        return;
    }

    const cuotas = esBancarizada ? cuotasBancarizadas : cuotasSinBancarizar;
    const resultadosContainer = document.getElementById('card');
    resultadosContainer.innerHTML = '';

    const calculoRecargo = (data) => {
        return data.map(cuota => {
            const recargo = montoDeCompra * cuota.porcentaje;
            const total = montoDeCompra + recargo;
            const valorCuota = total / cuota.cuotas;

            return {
                id: cuota.id,
                total: total.toFixed(2),
                valorCuota: valorCuota.toFixed(2)
            };
        });
    };
    const resultados = calculoRecargo(cuotas);

    resultados.forEach(resultado => {
        const resultadoHTML = document.createElement('div');
        resultadoHTML.classList.add('resultado');
        resultadoHTML.innerHTML = `
              <p class="resultado-texto"><strong>Opción:</strong> ${resultado.id}</p>
              <p class="resultado-texto"><strong>Total a pagar:</strong> $${resultado.total}</p>
              <p class="resultado-texto"><strong>Valor por cuota:</strong> $${resultado.valorCuota}</p>
          `;
        resultadosContainer.appendChild(resultadoHTML);
    });

    const guardarDatos = () => {
        let historial = JSON.parse(localStorage.getItem("valores")) || [];
        let valores = resultados;
        historial.push(valores);
        localStorage.setItem("valores", JSON.stringify(historial));
    }
    guardarDatos();
}