// Fungsi untuk mengonversi centimeter ke kilometer
function cmToKm(centimeter) {
    return centimeter / 100000; // 1 kilometer = 100000 centimeter
}

// Jarak dalam centimeter
let jarakCM = 120000;

// Mengonversi ke kilometer
let jarakKM = cmToKm(jarakCM);

// Menampilkan hasil
console.log(`${jarakCM} centimeter sama dengan ${jarakKM.toFixed(4)} kilometer.`);