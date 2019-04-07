function angkaPalindrome(num) {
    // you can only write your code here!  
    var ketemu = true

    while (ketemu){
      num++
      // 811 === 118 ??
      var change = num.toString()
      var result =  ''
    
      for (var i = change.length-1; i >= 0; i--){
          result += change[i]
          }
          if ( change ===  result){
            ketemu = false
      }
    }     
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001