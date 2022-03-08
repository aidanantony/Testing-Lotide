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