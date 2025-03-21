// Fungsi untuk mengonversi Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Suhu dalam Fahrenheit
let suhuFahrenheit = 12;

// Mengonversi ke Celsius
let suhuCelsius = fahrenheitToCelsius(suhuFahrenheit);

// Menampilkan hasil
console.log(`${suhuFahrenheit} derajat Fahrenheit sama dengan ${suhuCelsius.toFixed(2)} derajat Celsius.`);