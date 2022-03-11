let eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    
      if (first[i]!==second[i] || first.length !== second.length){

        return false
      } 
    }
    return true
  } 



let assertEqualsArray = function(one,two){
  {
    if(eqArrays(one,two)) {
      console.log(`💯💯💯 Assertion Passed: [${one}] === [${two}]`)
    } else {
      console.log(`❌❌❌ Assertation Failed: [${one}] !== [${two}]`)
    }
  }
}





const words = ["ground", "control", "to", "major", "tom"];

let map = function(array,callback) {
 const results= [];
 for (let item of array) {
  results.push(callback(item));
}
 return results;
}

const results1 = map(words, word => word[0]);



assertEqualsArray(words,words)
assertEqualsArray(results1,words)
assertEqualsArray(results1,words[0])
