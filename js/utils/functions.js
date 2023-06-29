import UserInterface from "../classes/UserInterface.js";

async function fetchCryptocurrencies() {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  try {
    // realizar la solicitud GET a la API
    const response = await fetch(url);

    // si la respuesta es exitosa
    if (response.ok) {
      // convertir la respuesta en un objeto JavaScript
      const data = await response.json();

      if (data.Data.length > 0) {
        UserInterface.AddCryptocurrenciesToSelect(data.Data);
      } else {
        console.log("Error: Empty cryptocurrency array");
      }
    } else {
      // si la respuesta no es exitosa lanzar un error
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const selectionsObject = {
  currency: "",
  cryptocurrency: "",
};

function getSelection(e) {
  selectionsObject[e.target.name] = e.target.value;
}

function validateSelections(e) {
  e.preventDefault();

  if (selectionsObject.currency === "" || selectionsObject.cryptocurrency === "") {
    UserInterface.showErrorAlert("Ambos campos son obligatorios");
    return;
  }

  // si ambos campos fueron seleccionados
  fetchAllTheCurrentTradingInfo();
}

async function fetchAllTheCurrentTradingInfo() {
  const { cryptocurrency, currency } = selectionsObject;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

  UserInterface.showLoader();

  try {
    // realizar la solicitud GET a la API
    const response = await fetch(url);

    // si la respuesta es exitosa
    if (response.ok) {
      // convertir la respuesta en un objeto JavaScript
      const data = await response.json();

      UserInterface.showAllTheCurrentTradingInfo(data.DISPLAY[cryptocurrency][currency]);
    } else {
      // si la respuesta no es exitosa lanzar un error
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
}

export { fetchCryptocurrencies, getSelection, validateSelections };
