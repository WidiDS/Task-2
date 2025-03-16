// Fungsi untuk menghapus kemunculan pertama dari search string
function removeFirstOccurrence(originalString, searchString) {
    // Mencari indeks dari kemunculan pertama search string
    const index = originalString.indexOf(searchString);
    
    // Jika search string ditemukan, hapus kemunculan pertama
    if (index !== -1) {
        return originalString.slice(0, index) + originalString.slice(index + searchString.length);
    }
    
    // Jika search string tidak ditemukan, kembalikan string asli
    return originalString;
}

// Contoh penggunaan
let string = "Cakrawala University";
let searchString = "University";

let result = removeFirstOccurrence(string, searchString);
console.log(result); // Output: "Cakrawala "