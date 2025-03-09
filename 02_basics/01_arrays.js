// arrays

const arr = [1,2,3,4,5,6]
const arr2 = [2,4,6,5]

arr.push(8);
console.log(arr);
arr.pop()
console.log(arr)

arr.unshift(9)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(9))

const arr3 = arr.join()
console.log(arr)
console.log(arr3)

/*  ********  slice, splice  *********  */
console.log("A" , arr)
const myn1 = arr.slice(1, 3)
console.log(myn1)  // [1,2]

console.log("B", arr)
const myn2 = arr.splice(1,3)
console.log(myn2)  // [1,2,3]