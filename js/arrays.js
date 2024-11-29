export const bancos = [];
export const financieras = [];
export const cuotasBancarizadas = []
export const cuotasSinBancarizar = []


fetch('./json/index.json')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data.bancos)) {
            bancos.push(...data.bancos);
        }
        if (Array.isArray(data.financieras)) {
            financieras.push(...data.financieras);
        }
        if (Array.isArray(data.cuotasBancarizadas)) {
            cuotasBancarizadas.push(...data.cuotasBancarizadas);
        }
        if (Array.isArray(data.cuotasSinBancarizar)) {
            cuotasSinBancarizar.push(...data.cuotasSinBancarizar);
        }
    })
    .catch(error => console.error('Error al cargar los datos:', error));
