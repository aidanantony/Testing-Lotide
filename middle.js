let assertEqualsArray = function(one,two){
  {
    if(eqArrays(one,two)) {
      console.log(`💯💯💯 Assertion Passed: [${one}] === [${two}]`)
    } else {
      console.log(`❌❌❌ Assertation Failed: [${one}] !== [${two}]`)
    }
  }
}

let eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    
      if (first[i]!==second[i] || first.length !== second.length){

        return false
      } 
    }
    return true
  } 

  const middle = function(array) {
    let newArray=[]
    if(array.length < 3) {
    } else if (array.length % 2 === 0) {
      let index1=(array.length/2)-1;
      let index2=(array.length/2);
      newArray.push(array[index1],array[index2]);
    } else {
      let index1 = Math.ceil(array.length/2)-1;
      newArray.push(array[index1]);
    }
      return newArray;
    
  };
  console.log((middle([1,2])))
