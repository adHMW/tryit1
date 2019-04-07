function pasanganTerbesar(num) {
  // you can only write your code here!

  var change = num.toString()
  var terbesar = 0;

  for (var i = 0; i < change.length-1; i ++){
 	
 	if (terbesar < Number(change[i] + change[i + 1])){
 		terbesar = Number(change[i] + change[i + 1])

 	}

 	// console.log(result)
  }

return terbesar
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99