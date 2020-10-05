module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  for(let i = 1; i < matrix.length; i += 2){
    matrix[i] = matrix[i].reverse();
  }
  let ans = [];
  matrix.forEach(e => ans = ans.concat(e));
  return ans;
}
