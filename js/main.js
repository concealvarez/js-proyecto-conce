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

// function mostrarResultados(resultados) {
//     console.log('El valor de la cuota en un pago es $' + resultados.uno);
//     console.log('El valor de cada cuota en tres pagos es $' + resultados.tres / 3);
//     console.log('El valor de cada cuota en seis pagos es $' + resultados.seis / 6);
//     console.log('El valor de cada cuota en doce pagos es $' + resultados.doce / 12);
// }

// let valordeCuota = parseInt(prompt('Ingrese un valor para calcular'));
// let bancarizada = prompt('¿Su tarjeta pertenece a algún banco? si/no').toLowerCase();

// const menu = ['Ver valor total por cada financiación', 'Ver el valor de las cuotas por cada financiación', 'Ver el valor de recargo por cada financiación', 'Ver el porcentaje de recargo por cada financiación'];

// let confirmar = true;

// while (confirmar) {
//     for (i=0; i < menu.length; i++){
//         console.log (menu[i])
//     }
//     let seleccion = parseInt(prompt('Seleccione la opción (1 - 2 - 3 - 4)'));
//     let cuotas = bancarizada === 'si' ? cuotasBancarizadas : cuotasSinBancarizar;
//     let resultados;

//     switch (seleccion) {
//         case 1:
//             console.log ('El total a pagar en un pago es de '+ (valordeCuota*cuotas.cuotaUno+valordeCuota))
//             console.log ('El total a pagar en tres pagos es de '+ (valordeCuota*cuotas.cuotaTres+valordeCuota))
//             console.log ('El total a pagar en seis pagos es de '+ (valordeCuota*cuotas.cuotaSeis+valordeCuota))
//             if (bancarizada == 'si'){
//                 console.log ('El total a pagar en  es de '+ (valordeCuota*cuotas.cuotaDoce+valordeCuota))
//             }
//             break;
//         case 2:
//             resultados = calcularRecargo(valordeCuota, cuotas);
//             mostrarResultados(resultados);
//             break;
//         case 3:
//             console.log('El valor del recargo en un pago es de $' + (valordeCuota * cuotas.cuotaUno));
//             console.log('El valor del recargo en tres pagos es $' + (valordeCuota * cuotas.cuotaTres));
//             console.log('El valor del recargo en seis pagos es $' + (valordeCuota * cuotas.cuotaSeis));
//             if (bancarizada == 'si') {
//                 console.log('El valor del recargo en doce pagos es $' + (valordeCuota * cuotas.cuotaDoce));
//             }
//             break;
//         case 4:
//             console.table(bancarizada === 'si' ? cuotasBancarizadas : cuotasSinBancarizar);
//             break;
//         default:
//             console.log('Opción no válida');
//     }
//     let continuar = prompt('desea realizar otra accion? si/no').toLowerCase()
//     if (continuar == 'no'){
//         confirmar = false
//         console.log ('Hasta Luego!')
//     }


// }
