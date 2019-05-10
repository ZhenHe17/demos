// recursion
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

// circulation
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1
  }
  let num1 = 1
  let num2 = 1
  let result = 1
  for (let i = 3; i <= num; i++) {
    result = num1 + num2
    num1 = num2
    num2 = result
  }
  return result
}