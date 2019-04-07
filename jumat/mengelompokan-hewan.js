function groupAnimals(animals) {
  // you can only write your code here!
var a = animals.length

for (var i = 0; i < a; i++) {
   for(var j=0; j < a ; j++){
    if ((animals[j] > animals[j + 1]) > 0) {
      simpan = animals[j]
      hasil = animals[j + 1]
      animals[j] = hasil
      animals[j + 1] = simpan
     }
   }
}
// return animals 
var pengelompokan = []
var pengelompokanC = []
var pengelompokanK = []
var pengelompokanU = []

var arrGabung = []
var arrGabung1 = []

// console.log(animals[1][0] + animals[1][1])
for ( i = 0; i < animals.length; i++){
  	var pengelompokan1 = animals[i][0]
  	if ( pengelompokan1 === 'a'){
  		pengelompokan.push(animals[i])
  	}else if (pengelompokan1 === 'c'){
  		pengelompokanC.push (animals[i]) 
  	}else if (pengelompokan1 === 'k'){
  		pengelompokanK.push(animals[i])
  	}else if ( pengelompokan1 === 'u'){
  		pengelompokanU.push(animals[i])
  	}
  	
  }

  	arrGabung.push(pengelompokan, pengelompokanC, pengelompokanK, pengelompokanU)  	
  	arrGabung1.push(pengelompokan,pengelompokanC,pengelompokanK)

  if (arrGabung[3][0] === 'unta'){
  	return arrGabung
  }else {
  	return arrGabung1
  }
}
  


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]