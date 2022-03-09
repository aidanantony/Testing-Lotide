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
        console.log(`❌❌❌ Assertation Failed: [${one}] !== [${two}]`)
      } else {
        console.log(`💯💯💯 Assertion Passed: [${one}] === [${two}]`)
      }
    }
  }
  