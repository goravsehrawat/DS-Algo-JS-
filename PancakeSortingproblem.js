/** @format */
/* binary search is used here to find out the index of ceiling. Binary search reduces time complexity to O(Log(i)) */
ceilSearch = (arr, firstIndex, lastIndex, key) => {
  var midIndex;

  /* If key <=  first element, then return the first element */
  if (key <= arr[firstIndex]) return firstIndex;

  /* If key > last element, then return -1 */
  if (key > arr[lastIndex]) return -1;

  /* get the index of middle element of arr[firstIndex..lastIndex]*/
  midIndex = Math.floor((firstIndex + lastIndex) / 2);

  if (arr[midIndex] == key) return midIndex;
  else if (arr[midIndex] < key) {
    if (midIndex + 1 <= lastIndex && key <= arr[midIndex + 1])
      return midIndex + 1;
    else return ceilSearch(arr, midIndex + 1, lastIndex, key);
  } else {
    if (midIndex - 1 >= firstIndex && key > arr[midIndex - 1]) return midIndex;
    else return ceilSearch(arr, firstIndex, midIndex - 1, key);
  }
};


/*utility function to flip/reverse the array passed */
flip = (arr, lastIndex) => {
  var start = 0;
  var temp;
  while (start < lastIndex) {
    temp = arr[start];
    arr[start] = arr[lastIndex];
    arr[lastIndex] = temp;
    start++;
    lastIndex--;
  }
  return arr;
};

/*main driver function to sort the array using pancake sort */
pancakeSort = arr => {
  var last = arr.length;
  var start = 1;
  for (start; start < last; start++) {
    var ceilIndex = ceilSearch(arr, 0, start - 1, arr[start]);
    if (ceilIndex != -1) {
      flip(arr, ceilIndex - 1);
      flip(arr, start - 1);
      flip(arr, start);
      flip(arr, ceilIndex);
    }
  }
  return arr;
};

//use your custom array
const array = [2, 1, 3, 4, 2, 2];

pancakeSort(array);

Analysis :-
1.Space complexity - O(1)
2.Time complexity - O(n) // for flips