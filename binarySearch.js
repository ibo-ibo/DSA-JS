function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);

  while (start <= end) {
    if (arr[middle] < val) {
      start = middle + 1;
    } else if (arr[middle] > val) {
      end = middle - 1;
    } else {
      return true;
    }
    middle = Math.round((start + end) / 2);
  }
  return false;
}
