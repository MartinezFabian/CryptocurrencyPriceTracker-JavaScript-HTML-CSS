import { fetchCryptocurrencies } from "../utils/functions.js";

class App {
  constructor() {
    this.initApp();
  }

  initApp() {
    // obtener las 10 criptomonedas mas populares
    fetchCryptocurrencies();
  }
}

export default App;
