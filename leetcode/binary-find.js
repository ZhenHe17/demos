// recursion
function binaryFind(arr, target, min = 0, max = arr.length - 1) {
  const mid = Math.floor((min + max) / 2)
  const cur = arr[mid]
  if (cur === target) {
    return n
  } else if (cur > target) {
    return binaryFind(arr, target, min, mid - 1)
  } else if (cur < target) {
    return binaryFind(arr, target, mid + 1, max)
  }
  return -1
}

// circulation
function binaryFind(arr, target) {
  var min = 0,
      max = arr.length - 1,
      mid;
  while (min <= max) {
      mid = Math.floor((min + max) / 2);
      if (target === arr[mid]) {
          return n
      }
      if (target > arr[mid]) {
          min = mid + 1;
      } else if (target < arr[mid]) {
          max = mid - 1;
      }
  }
  return -1
}