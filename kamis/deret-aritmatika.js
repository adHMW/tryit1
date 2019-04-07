function tentukanDeretAritmatika(arr) {
  // you can only write your code here!''
  for ( var i = 0; i < arr.length-1; i++){
  	var pembanding = arr[i+1] - arr[i]
  }
  	if (pembanding === arr[2] - arr[1]){
  		return true
  	}else {
  		return false
  	
  }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

// kalau hasil pengurangan nilai array ke 2 - 1 = 1
// arr[i+1] - arr[i]