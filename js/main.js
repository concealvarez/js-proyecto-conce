import { si, no, tarjetas } from "./variables.js";
import { bancos, financieras,} from './arrays.js'
import { calcularCuotas } from "./calculador.js";

si.addEventListener('click', () => {
  tarjetas.innerHTML = '';
  bancos.forEach(banco => {
    let option = document.createElement('option');
    option.innerHTML = banco;
    tarjetas.appendChild(option);
  });
});

no.addEventListener('click', () => {
  tarjetas.innerHTML = '';
  financieras.forEach(financiera => {
    let option = document.createElement('option');
    option.innerHTML = financiera;
    tarjetas.appendChild(option);
  });
});

si.onclick = () => calcularCuotas(true);
no.onclick = () => calcularCuotas(false);

