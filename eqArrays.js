const assertEqual = function(actual, expected) {
  if(actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`)
  } else if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: [${actual}] === [${expected}]`)
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
  

console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]))
console.log(eqArrays([1,2,3],[3,2,1]))
console.log(eqArrays(['1','2','3'],['1','2',3]))
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
