const prompt = require('prompt-sync')({sigint: true});
var numb = prompt("Masukkan angka : ");

if(numb < 0){
    console.log("Tidak bisa input bilangan negatif")
    }
else if (numb % 2 != 0){
    console.log("Tidak bisa input bilangan ganjil")
}
else{
    var result;
    result = Math.sqrt(numb);
    console.log ("Hasil akar kuadrat dari " + numb + " adalah " + result);
};