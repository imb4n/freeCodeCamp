function palindrome(str) {
  let arr = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('')
  
  let arr2 = []
  let arr1 = []

  if (arr.length % 2 !== 0) {
    arr2 = arr.slice(arr.length / 2 + 1).reverse().join('')
    arr1 = arr.slice(0, arr.length / 2 ).join('')
  } else {
    arr2 = arr.slice(arr.length / 2).reverse().join('')
    arr1 = arr.slice(0, arr.length / 2).join('')
  }
  
  return (arr1 === arr2)
}
