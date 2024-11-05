let valorDeCompra = document.getElementById('monto');
let si = document.getElementById('confirm')
let no = document.getElementById('notConfirm')
let tarjetas = document.getElementById('dropdown-tarjetas')

let bancos = [
    'banco de cordoba mastercard',
    'visa banco hipotecario',
    'visa banco bbva',
    'visa banco macro',
    'mastercard banco hipotecario',
    'mastercard banco bbva',
    'mastercar banco macro',
]

let financieras = [
    'cencosud',
    'naranja',
    'montemar shopping'
]

const cuotasBancarizadas = [
    {
        id: 'Un pago',
        cuotas: 1,
        porcentaje: 0/100
    },
    {
        id: 'tres pagos',
        cuotas: 3,
        porcentaje: 5/100
    },
    {
        id: 'seis pagos',
        cuotas: 6,
        porcentaje: 15/100
    },
    {
        id: 'doce pagos',
        cuotas: 12,
        porcentaje: 20/100
    },

];
const cuotasSinBancarizar = [
    {
        id: 'Un pago',
        cuotas: 1,
        porcentaje: 10/100
    },
    {
        id: 'tres pagos',
        cuotas: 3,
        porcentaje: 20/100
    },
    {
        id: 'seis pagos',
        cuotas: 6,
        porcentaje: 30/100
    },
    {
        id: 'doce pagos',
        cuotas: 12,
        porcentaje: 40/100
    },

];

si.addEventListener('click', () => {
    tarjetas.innerHTML = '';
    for (const banco of bancos) {
        let option = document.createElement('option');
        option.innerHTML = banco;
        tarjetas.appendChild(option);
        option.className = 'bancarizadas';
    }
})

no.addEventListener('click', () => {
    tarjetas.innerHTML = '';
    for (const financiera of financieras) {
        let option = document.createElement('option')
        option.innerHTML = financiera
        tarjetas.appendChild(option)
        option.className = 'no-bancarizadas'
    }
})

const calcularCuotas = (esBancarizada) => {
    const montoDeCompra = parseFloat(valorDeCompra.value);
    if (isNaN(montoDeCompra) || montoDeCompra <= 0) {
        alert("Por favor, ingrese un valor de compra válido.");
        return;
    }

    const cuotas = esBancarizada ? cuotasBancarizadas : cuotasSinBancarizar;
    const resultadosContainer = document.getElementById('resultados-contenedor');

    resultadosContainer.innerHTML = '';

    const resultados = cuotas.map(cuota => {
        const recargo = montoDeCompra * cuota.porcentaje;
        const total = montoDeCompra + recargo;
        const valorCuota = total / cuota.cuotas;

        return {
            id: cuota.id,
            total: total.toFixed(2),
            valorCuota: valorCuota.toFixed(2)
        };
    });

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
};

si.onclick = () => calcularCuotas(true);
no.onclick = () => calcularCuotas(false);

