import { selectCryptocurrency } from "../utils/selectors.js";

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
}

export default UserInterface;
