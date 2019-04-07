function balikString(kata) {
  // you can only write your code here!
  var balikkata =''
  for (var i = kata.length-1; i >=  0; i--){
  	balikkata = balikkata + kata[i]
  }
  return balikkata
}

// TEST CASES
console.log(balikString('hello world!'))