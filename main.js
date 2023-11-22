
fetch('https://open.er-api.com/v6/latest')
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data.rates);
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
if(fromCurrencySelect&&toCurrencySelect){
    currencies.forEach(currency => {
      const option = document.createElement('option');
      option.value = currency;
      option.text = currency;
      fromCurrencySelect.add(option);

      const option2 = document.createElement('option');
      option2.value = currency;
      option2.text = currency;
      toCurrencySelect.add(option2);
    });
  }});

function conVert() {
  const amount = document.getElementById('InputAmount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  fetch(`https://open.er-api.com/v6/latest`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[toCurrency] / data.rates[fromCurrency];
      const result = (amount * rate).toFixed(2);
       
      document.getElementById('OutputAmount').value = result;
    });
}

function Reset(){
    document.getElementById('InputAmount').value = "";
    document.getElementById('OutputAmount').value = "";

}