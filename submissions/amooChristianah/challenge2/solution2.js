function solution3(nums) {
    let numberReturned = 1;
    while (nums.findIndex((num) => num === numberReturned) !== -1) {
     
      numberReturned++;
    }
    return numberReturned;
  }
  
  console.log(solution3([1, 2, 0]));
  console.log(solution3([-1, 3, 4, 1]));
  console.log(solution3([7, 8, 9, 11, 12]));