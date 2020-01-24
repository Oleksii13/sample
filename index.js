// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // SOLUTION 2

  // Init chunked arr
  const chunkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get las element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
      console.log('chunkArr push');
    } else {
      console.log('else statement');
      console.log(chunkedArr);
      console.log(last);
      last.push(val);
      console.log(chunkedArr);
      console.log(last);
    }
    console.log('end of the loop ----------');
  });
}
const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);

console.log(output);
