function helper(arr) {
    if (arr.length <= 3) {
      return arr.reduce((sum, num) => sum + num, 0); 
    }

    let n = Math.floor(arr.length / 3);
    let leftSum = helper(arr.slice(0, n));
    let midSum = helper(arr.slice(n, 2 * n));
    let rightSum = helper(arr.slice(2 * n));
    return leftSum + midSum + rightSum;
  }

function divideAndConquerSum(arr) {
  
    return helper(arr);
  }
