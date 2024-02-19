function helper(arr) {
    if (arr.length <= 3) {
      return arr.reduce((sum, num) => sum + num, 0); 
    }

    const n = Math.floor(arr.length / 3);
    const leftSum = helper(arr.slice(0, n));
    const midSum = helper(arr.slice(n, 2 * n));
    const rightSum = helper(arr.slice(2 * n));
    return leftSum + midSum + rightSum;
  }

function divideAndConquerSum(arr) {
  
    return helper(arr);
  }

