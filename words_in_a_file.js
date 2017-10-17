var sys = require('util');
const fs = require('fs')

// actual conversion code starts here
function words_in_a_file(filename, limit) {
	fs.readFile(filename, (err, data) => {
    if (err)
      return console.log(err)

  	let tempArr = [];
  	let tempResult = [];
  	let index;
    let items = data.toString()
      .split(/\W/i)

      var newArr = Array.from(new Set(items));
      for (let i = 0 ; i< newArr.length ; i++){
      	let temp = 0;
      	for (let j= 0 ; j<items.length ; j++){
      		if (newArr[i] === items[j] && newArr[i] !== '' && newArr[i] !== "the" && newArr[i] !== "of" && newArr[i] !== "in" && newArr[i] !== "ref"
      			&& newArr[i] !== "and" && newArr[i] !== "to" && newArr[i] !== "a")
      			temp++;
      	}
      	tempArr.push(temp);
      }
      let newTempArr = tempArr;
      for (let i = 0 ; i<limit ; i++){
      	let max= 0;
     	for (let j = 0 ; j<newTempArr.length ; j++){
      		if (newTempArr[j] > max ){
      		max=newTempArr[j];
      		newTempArr[j]= 0
      		index = j;
      		}
      	}
      	tempResult.push(index);
 	  }
 	  for (let i = 0 ; i<limit ; i++){
 	  var re = new RegExp(newArr[tempResult[i]], 'g');	
 	  console.log("paling banyak "+ newArr[tempResult[i]]+ " pengulangan sebanyak = "+items.toString().match(re).length)
 	  }
    }) 
}
words_in_a_file('source.txt',3)
module.exports = {
  words_in_a_file: words_in_a_file
}


// var a = "makanan"
// console.log((a.match(/a/g)).length)