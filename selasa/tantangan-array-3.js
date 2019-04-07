function dataHandling2(arr){

	arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
	arr.splice(4, 1, "Pria", "SMA Internasional Metro")

	var hapusgaring = arr[3].split("/");
	var tambahstrip = hapusgaring.join("-")

	hapusgaring.sort(function(a, b){return b - a});
	
	var nama = arr[1].toString();

	switch (hapusgaring[2]){
		case "01":
            bulan = "Januari";
        break;
        case "02":
            bulan = "Febuari";
        break;
        case "03":
            bulan = "Maret";
        break;
        case "04":
            bulan = "April";
        break;
        case "05":
            bulan = "Mei";
        break;
        case "06":
            bulan = "Juni";
        break;
        case "07":
            bulan = "Juli";
        break;
        case "08":
            bulan = "Agustus";
        break;
        case "09":
            bulan = "September";
        break;
        case "10":
            bulan = "Oktober";
        break;
        case "11":
            bulan = "November";
        break;
        case "12":
            bulan = "Desember";
        break;

	}

	console.log(arr)
	console.log(bulan)
	console.log(hapusgaring)
	console.log(tambahstrip)
	console.log(nama.slice(0,15))
}

console.log (dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]))





