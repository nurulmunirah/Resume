

//true && true = true
//true && false = false
//true || false = true
//false || false = false

//const umur = 11;

//if (umur < 18)
//{
//    console.log("TAK BOLEH MASUK");
//}else if (umur >=18 && umur <=41)
//{
//   console.log("BOLEH MASUK");
//}

//SWITCH


//switch(umur){
//    case 1:
//        console.log("umur 1");
//        break;
//        case 2:
//        console.log("umur 2");
//        break;
//        case 3:
//        console.log("umur 78");
//        break;
//        case 4:
//        console.log("umur lain");
//        break;
//}

//for (var x =0; x < 20; x++)
//{
//    console.log(x);
//}

//for(var x = 0; x < 20; x++)
//{
//    console.log(x);
//   if (x ==1)
//   {
//        break;
//    }
//}

//console.log("YAY DAH KELUAR");

//var haiwanKatZoo = [
//    "beruang",
//    "ayam",
//    "kambing",
//    "tenuk",
//    "boya",
//]
//console.log("Haiwan ke 5" + haiwanKatZoo[4]);

// const tarikh = new Date();

// const tahun = tarikh.getFullYear();
// const bulan = tarikh.getMonth() + 1;
// const hari = tarikh.getDate();

// const jam = tarikh.getHours();
// const minit = tarikh.getMinutes();

// console.log(hari + "/" + bulan + "/" + tahun);
// console.log(jam + ":" + minit);

// console.log(tarikh.toDateString());
// console.log(tarikh.toLocaleString());

var teks = "Hari ini hujan lebat!";

var teksCari = /hujan/;
var hasil = teksCari.test(teks);
//console.log(hasil);

var hasilkedua = teks.match(teksCari);
//console.log(hasilKedua);

var hasilKetiga = teks.replace(teksCari, "sangat");
console.log(hasilKetiga);

