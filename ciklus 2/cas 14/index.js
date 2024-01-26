const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [2,2,3,1,5,6,7,21,5,76,8,9]

const arr4 = arr1.filter(broj => arr2.includes(broj))

console.log(arr4)