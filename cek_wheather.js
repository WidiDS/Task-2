// Fungsi untuk memeriksa apakah sebuah string adalah palindrom
function isPalindrome(str) {
    // Menghapus spasi dan mengubah string menjadi huruf kecil
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    
    // Membalikkan string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Memeriksa apakah string asli sama dengan string yang dibalik
    return cleanedStr === reversedStr;
}

// Contoh penggunaan
let example1 = 'madam';
let example2 = 'hello';

console.log(`${example1} - ${isPalindrome(example1) ? 'palindrome' : 'not palindrome'}`); // Output: madam - palindrome
console.log(`${example2} - ${isPalindrome(example2) ? 'palindrome' : 'not palindrome'}`); // Output: hello - not palindrome