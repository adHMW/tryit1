function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var result = ' '
  var hasil = 0
  var hasilakhir = 0
  for ( var i = 0; i < kalimat.length; i++){
  	// console.log (kalimat[i])
  	if ( kalimat[i] === result){
  		hasil +=1
  		hasilakhir = hasil + 1
  	}
  }
  if(hasilakhir === 0 && kalimat.length>0){
  	return 1
  }
  return hasilakhir
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5