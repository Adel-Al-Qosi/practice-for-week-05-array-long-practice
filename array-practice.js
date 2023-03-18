const findMinimum = arr => {
  // time complexity O(n), space O(1)
  // Your code here
  return arr.reduce((smallestNum, num) => {
    if (smallestNum > num) return num
    return smallestNum
  }, arr[0])  

};

const runningSum = arr => {
  // time/space compexity of O(n)
  // Your code here
  if (arr.length === 0) return []
  return arr.reduce((newArray, num, i) => {
    if (i === 0) return newArray

    newArray.push(newArray[i - 1] + num)

    return newArray
  }, [arr[0]])
};

const evenNumOfChars = arr => {
  // time: O(n), space: O(1)
  // Your code here
  return arr.reduce((countEvenStrings, string) => {
    if (string.length % 2 === 0) countEvenStrings++
    return countEvenStrings
  }, 0)

};

const smallerThanCurr = arr => {
  // time: O(n^2), space: O(n)
  // Your code here
  return arr.map((number, index, array) => array.filter(num => num < number).length)
};

const twoSum = (arr, target) => {
  // O(n), O(1)
  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true
    }
  }

  return false
};

const secondLargest = arr => {
  // O(n), O(n)
  // Your code here
  if (arr.length < 2) return undefined
  let newArray = [...arr]
  let notImportant = newArray.splice(newArray.indexOf(Math.max(newArray)), 1)
  console.log(Math.max(newArray))
  return Math.max(newArray)
};

const shuffle = (arr) => {

  // Your code here
  let array = []
  
  for (let i = 0; i < arr.length; i++) {
    let randomNum;
    while(array.length === i) {
      randomNum = Math.floor(Math.random() * 10)
      if (arr.includes(randomNum) && !(array.includes(randomNum))) array.push(randomNum)
    }
  }

  return array
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];