import { fetchCryptocurrencies, getSelection, submitForm } from "../utils/functions.js";
import { form, selectCurrency, selectCryptocurrency } from "../utils/selectors.js";

class App {
  constructor() {
    this.initApp();
  }

  initApp() {
    // obtener las 10 criptomonedas mas populares y agregarlas al <select></select> 'Elige tu criptomoneda'
    fetchCryptocurrencies();

    // "change" se activa cada vez que el usuario selecciona una opción diferente en el elemento <select>
    selectCurrency.addEventListener("change", getSelection);
    selectCryptocurrency.addEventListener("change", getSelection);

    // al dar clic en 'Cotizar' validar las selecciones
    form.addEventListener("submit", submitForm);
  }
}

export default App;
