const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌ Assertation Failed: [${actual}] !== [${expected}]`);
  } else if (actual === expected) {
    console.log(`💯💯💯 Assertion Passed: [${actual}] === [${expected}]`);
  }
};

let tail = function(array) {
  return array.slice(1);
};
console.log(tail([1,2,3,4,5]));
console.log(tail([1]));
console.log(tail([]));

const result = tail([1, 2, '3']);
assertEqual(result.toString(), ['2',3].toString());

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const results = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(results.length, 2); // ensure we get back two elements
assertEqual(results[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(results[1], "Labs");

