function hasTargetSum(array, target) {// function hasTargetSum(array, target) {

  //   for (let index = 0; index < array.length; index++) {
  //     const complement = target - array[index]
  //     for (let index2 = index + 1; index2 < array.length; index2++) {
  //       if (array[index2] === complement) return true;
  //     }
  //   }
  //   return false
  // }
  // Write your algorithm here
}
function hasTargetSum(array, target) {
  // Write your algorithm here

  const seenNumbers = new Set();

  for (const number of array) {
    const complement = target - number;
    if (seenNumbers.has(complement)) return true;

    seenNumbers.add(number)
  }
  return false
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
function findSocks(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
