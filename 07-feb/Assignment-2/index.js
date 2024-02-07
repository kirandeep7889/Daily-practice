function sumOnlyNumberValues(arr) {
    let sum = 0;
    for (const item of arr) {
      if (typeof item === 'number' && !isNaN(item)) {
        sum += item;
      } else if (typeof item === 'string' && !isNaN(Number(item))) {
        sum += Number(item);
      }
    }
    return sum;
  }
  
  const array = [1, 2, '3', '4', 'hello', true, null, undefined, NaN];
  console.log(sumOnlyNumberValues(array)); 
  