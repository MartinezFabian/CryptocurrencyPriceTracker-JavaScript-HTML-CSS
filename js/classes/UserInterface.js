import { selectCryptocurrency, form } from "../utils/selectors.js";

class UserInterface {
  static AddCryptocurrenciesToSelect(cryptocurrencies) {
    cryptocurrencies.forEach((crypto) => {
      const {
        CoinInfo: { FullName, Name },
      } = crypto;

      // crear los <option></option>
      const option = document.createElement("option");
      option.value = Name;
      option.textContent = FullName;

      selectCryptocurrency.appendChild(option);
    });
  }

  static showErrorAlert(message) {
    const exist = document.querySelector(".error-alert");

    if (exist) return;

    // crear la alerta
    const errorAlert = document.createElement("div");
    errorAlert.textContent = message;
    errorAlert.classList.add("error-alert");

    // agregar la alerta al contenedor
    form.appendChild(errorAlert);

    // eliminar la alerta luego de 2 segundos
    setTimeout(() => {
      errorAlert.remove();
    }, 2000);
  }
}

export default UserInterface;
