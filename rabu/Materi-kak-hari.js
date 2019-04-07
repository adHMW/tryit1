function arrayMulti(num){
  var result = []
  
  for (var i = 0; i < num; i++) { //0
    var inside = []
    var counter = i + 1

    for ( var j = 0; j < num; j++){
      inside.push(counter )  
      counter += num
    }
    result.push(inside)
  }

  console.log(result)
  // return inside
}

console.log(arrayMulti(3))

/*
[1,4,7]
[2,5,8]
[3,6,9]

*/
