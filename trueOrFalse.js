// Fungsi untuk memeriksa apakah n genap atau ganjil
function isEven(n) {
    return n % 2 === 0; // Mengembalikan true jika n genap, false jika ganjil
}

// Contoh penggunaan
let number1 = 1000;
let number2 = 1001;

console.log(`${number1} is even: ${isEven(number1)}`); // Output: 1000 is even: true
console.log(`${number2} is even: ${isEven(number2)}`); // Output: 1001 is even: false