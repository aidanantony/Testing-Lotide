const assertEqual = function(actual, expected) {
  if(actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`)
  } else if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: [${actual}] === [${expected}]`)
  }
}
assertEqual(1,1)
assertEqual('Lighthouse Labs','Bootcamp')
assertEqual('Hi','Hi')
assertEqual(1,4)


const head = function(array) {
  return array[0]
}
console.log(head([1,2,3,4,5]))
console.log(head([5]))
console.log(head([]))



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
