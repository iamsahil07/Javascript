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
console.log("A" , arr) // [1,2,3,4,5,6]
const myn1 = arr.slice(1, 3)
console.log(myn1)  // [2,3]
console.log("B", arr) // [1,2,3,4,5,6]

const myn2 = arr.splice(1,3) // splce removes the elements from the 1 to 3 and update the array
console.log(myn2)  // [2,3,4], elements removed from array
console.log("c", arr) // [1,5,6], updated array