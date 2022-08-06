module.exports = function towelSort(matrix) {
  if (!matrix) {return []}
  if (matrix.length === 0) {return []}
  let sortArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let colIndex = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      sortArray.push(matrix[i][colIndex]);
    }
  }
  return sortArray;
}
