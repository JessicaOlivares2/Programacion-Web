import React, { useEffect, useState } from "react";

export default function CambioMoneda() {
  const [data, setData] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [selectedFromCurrency, setSelectedFromCurrency] = useState("");
  const [selectedToCurrency, setSelectedToCurrency] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/e07b069c0acbbdfef5b4f159/latest/USD"
    )
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData && responseData.conversion_rates) {
          setData(responseData.conversion_rates);
          const currencies = Object.keys(responseData.conversion_rates);
          setCurrencies(currencies);
          setSelectedFromCurrency("USD"); // Establecer USD como moneda inicial
          setSelectedToCurrency(currencies[0]); // Establecer la primera moneda como moneda de destino inicial
        } else {
          console.error("No se encontraron tasas de cambio en la respuesta.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (
      selectedFromCurrency &&
      selectedToCurrency &&
      data[selectedFromCurrency]
    ) {
      const rate = data[selectedToCurrency] / data[selectedFromCurrency];
      setExchangeRate(rate);
      setConvertedAmount((amount * rate).toFixed(2));
    }
  }, [selectedFromCurrency, selectedToCurrency, amount, data]);

  const handleFromCurrencyChange = (event) => {
    setSelectedFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setSelectedToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="caja">
      <h2>Conversor de Moneda</h2>
      <div className="cajita">
        <label>Moneda:</label>
        <select
          value={selectedFromCurrency}
          onChange={handleFromCurrencyChange}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="cajita">
        <label>Conversor de:</label>
        <select value={selectedToCurrency} onChange={handleToCurrencyChange}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Cantidad:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      {exchangeRate && (
        <p>
          {amount} {selectedFromCurrency} equivale a {convertedAmount}{" "}
          {selectedToCurrency}
        </p>
      )}
    </div>
  );
}
