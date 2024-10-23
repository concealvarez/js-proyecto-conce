const cuotasBancarizadas = {
    cuotaUno: 0/100,
    cuotaTres: 5/100,
    cuotaSeis: 15/100,
    cuotaDoce: 20/100,
};
const cuotasSinBancarizar = {
    cuotaUno: 10/100,
    cuotaTres: 20/100,
    cuotaSeis: 30/100,
};

function calcularRecargo(valordeCuota, cuotas) {
    return {
        uno: valordeCuota * cuotas.cuotaUno + valordeCuota,
        tres: valordeCuota * cuotas.cuotaTres + valordeCuota,
        seis: valordeCuota * cuotas.cuotaSeis + valordeCuota,
        doce: valordeCuota * cuotas.cuotaDoce + valordeCuota,
    };
}

function mostrarResultados(resultados) {
    console.log('El valor de la cuota en un pago es $' + resultados.uno);
    console.log('El valor de cada cuota en tres pagos es $' + resultados.tres / 3);
    console.log('El valor de cada cuota en seis pagos es $' + resultados.seis / 6);
    console.log('El valor de cada cuota en doce pagos es $' + resultados.doce / 12);
}

let valordeCuota = parseInt(prompt('Ingrese un valor para calcular'));
let bancarizada = prompt('¿Su tarjeta pertenece a algún banco? si/no').toLowerCase();

const menu = ['Ver valor total por cada financiación', 'Ver el valor de las cuotas por cada financiación', 'Ver el valor de recargo por cada financiación', 'Ver el porcentaje de recargo por cada financiación'];

let confirmar = true;

while (confirmar) {
    for (i=0; i < menu.length; i++){
        console.log (menu[i])
    }
    let seleccion = parseInt(prompt('Seleccione la opción (1 - 2 - 3 - 4)'));
    let cuotas = bancarizada === 'si' ? cuotasBancarizadas : cuotasSinBancarizar;
    let resultados;

    switch (seleccion) {
        case 1:
            console.log ('El total a pagar en un pago es de '+ (valordeCuota*cuotas.cuotaUno+valordeCuota))
            console.log ('El total a pagar en tres pagos es de '+ (valordeCuota*cuotas.cuotaTres+valordeCuota))
            console.log ('El total a pagar en seis pagos es de '+ (valordeCuota*cuotas.cuotaSeis+valordeCuota))
            if (bancarizada == 'si'){
                console.log ('El total a pagar en  es de '+ (valordeCuota*cuotas.cuotaDoce+valordeCuota))
            }
            break;
        case 2:
            resultados = calcularRecargo(valordeCuota, cuotas);
            mostrarResultados(resultados);
            break;
        case 3:
            console.log('El valor del recargo en un pago es de $' + (valordeCuota * cuotas.cuotaUno));
            console.log('El valor del recargo en tres pagos es $' + (valordeCuota * cuotas.cuotaTres));
            console.log('El valor del recargo en seis pagos es $' + (valordeCuota * cuotas.cuotaSeis));
            if (bancarizada == 'si') {
                console.log('El valor del recargo en doce pagos es $' + (valordeCuota * cuotas.cuotaDoce));
            }
            break;
        case 4:
            console.table(bancarizada === 'si' ? cuotasBancarizadas : cuotasSinBancarizar);
            break;
        default:
            console.log('Opción no válida');
    }
    let continuar = prompt('desea realizar otra accion? si/no').toLowerCase()
    if (continuar == 'no'){
        confirmar = false
        console.log ('Hasta Luego!')
    }


}
