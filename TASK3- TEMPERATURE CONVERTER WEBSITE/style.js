function convertCelsiusToFahrenheit() {
  let celsius = document.getElementById("celsiusInput").value;
  let fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheitInput").value = fahrenheit;
}

function convertFahrenheitToCelsius() {
  let fahrenheit = document.getElementById("fahrenheitInput").value;
  let celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsiusInput").value = celsius;
}
