let eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    
      if (first[i]!==second[i] || first.length !== second.length){

        return false
      } 
    }
    return true
  } 

  let assertEqualsArray = function(one,two){
    if(eqArrays(one,two)) {
        console.log(`💯💯💯 Assertion Passed: [${one}] === [${two}]`)
      } else {
        console.log(`❌❌❌ Assertation Failed: [${one}] !== [${two}]`)
      }
    
  }


  let without = function(source,remove) {
    let newArray=[]
    for (let i = 0; i < source.length; i++){
      let skipAdding = false
      for (let j = 0; j < remove.length; j++){
        if(source[i]===remove[j]) {
          skipAdding = true
        }
      
      } 
      if(skipAdding === false){
        newArray.push(source[i])
      }
    }
    return newArray
  }
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
console.log(without([1,2,3,4,5],['1','2','3','4','5']))
console.log(without(['1','2','3','4'],['1','2','3']))
console.log(without(['hello','hi'],['hi']))
const words = ["hello","world","lighthouse"];
console.log(without(words, ["lighthouse"]));
 
assertEqualsArray(words, ["hello", "world", "lighthouse"]);