function targetTerdekat(arr) {
  // you can only write your code here!
  var posisiO = 0
  var posisiX = 0
  var result = 0

  for ( var i = 0; i < arr.length; i++){
  	// console.log(i + ' ini nilai ' + arr[i])
  	if ( arr[i] === 'o'){
  		posisiO = i
  		// console.log (posisiO)

  	}else if ( arr[i] === 'x'){
  		posisiX = i
  		break
  		// console.log(posisiX)
  	}	
  }
  // return posisiX
  result = posisiX - posisiO
  if (result < 0){
  	return 0
  } else {
  return result
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2