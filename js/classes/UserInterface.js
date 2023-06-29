import { selectCryptocurrency, form, dataContainer } from "../utils/selectors.js";

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

  static showAllTheCurrentTradingInfo(data) {
    const { PRICE, CHANGE24HOUR, HIGHDAY, LOWDAY, LASTUPDATE } = data;

    //limpiar HTML
    UserInterface.clearHTML();

    // card Price

    const cardPrice = document.createElement("article");
    cardPrice.classList.add("card");

    const titlePrice = document.createElement("p");
    titlePrice.classList.add("card__title");
    titlePrice.textContent = "El precio es";

    const dataPrice = document.createElement("h3");
    dataPrice.classList.add("card__data");
    dataPrice.textContent = PRICE;

    cardPrice.appendChild(titlePrice);
    cardPrice.appendChild(dataPrice);

    dataContainer.appendChild(cardPrice);

    // card Change 24 Hour

    const cardChange24Hour = document.createElement("article");
    cardChange24Hour.classList.add("card");

    const titleChange24Hour = document.createElement("p");
    titleChange24Hour.classList.add("card__title");
    titleChange24Hour.textContent = "Variación en las últimas 24 horas";

    const dataChange24Hour = document.createElement("h3");
    dataChange24Hour.classList.add("card__data");
    dataChange24Hour.textContent = CHANGE24HOUR;

    cardChange24Hour.appendChild(titleChange24Hour);
    cardChange24Hour.appendChild(dataChange24Hour);

    dataContainer.appendChild(cardChange24Hour);

    // card HIGH DAY
    const cardHighDay = document.createElement("article");
    cardHighDay.classList.add("card");

    const titleHighDay = document.createElement("p");
    titleHighDay.classList.add("card__title");
    titleHighDay.textContent = "Precio más alto del día";

    const dataHighDay = document.createElement("h3");
    dataHighDay.classList.add("card__data");
    dataHighDay.textContent = HIGHDAY;

    cardHighDay.appendChild(titleHighDay);
    cardHighDay.appendChild(dataHighDay);

    dataContainer.appendChild(cardHighDay);

    // card LOW DAY
    const cardLowDay = document.createElement("article");
    cardLowDay.classList.add("card");

    const titleLowDay = document.createElement("p");
    titleLowDay.classList.add("card__title");
    titleLowDay.textContent = "Precio más bajo del día";

    const dataLowDay = document.createElement("h3");
    dataLowDay.classList.add("card__data");
    dataLowDay.textContent = LOWDAY;

    cardLowDay.appendChild(titleLowDay);
    cardLowDay.appendChild(dataLowDay);

    dataContainer.appendChild(cardLowDay);

    // card LAST UPDATE

    const cardLastUpdate = document.createElement("article");
    cardLastUpdate.classList.add("card");

    const titleLastUpdate = document.createElement("p");
    titleLastUpdate.classList.add("card__title");
    titleLastUpdate.textContent = "Última actualización";

    const dataLastUpdate = document.createElement("h3");
    dataLastUpdate.classList.add("card__data");
    dataLastUpdate.textContent = LASTUPDATE;

    cardLastUpdate.appendChild(titleLastUpdate);
    cardLastUpdate.appendChild(dataLastUpdate);

    dataContainer.appendChild(cardLastUpdate);
  }

  static clearHTML() {
    // mientras dataContainer tenga un primer hijo
    while (dataContainer.firstChild) {
      //eliminar el primer hijo de dataContainer
      dataContainer.removeChild(dataContainer.firstChild);
    }
  }

  static showLoader() {
    UserInterface.clearHTML();

    const loaderContainer = document.createElement("div");
    loaderContainer.classList.add("loader-container");

    dataContainer.appendChild(loaderContainer);

    const loader = document.createElement("span");
    loader.classList.add("loader");

    loaderContainer.appendChild(loader);
  }
}

export default UserInterface;
