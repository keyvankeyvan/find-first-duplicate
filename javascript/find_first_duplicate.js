function findFirstDuplicate(arr) {
  // type your code here
  let arrlen = arr.length

  let compareArr = []
  for(let i = 0; i < arrlen; i++) {
    let val = compareArr.find(element => element == arr[i])
    if (val != undefined){
      return val
    }
    compareArr.push(arr[i])
  }
  return -1

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
