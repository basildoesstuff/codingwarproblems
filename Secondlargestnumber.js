//https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true
function getSecondLargest(nums) {
    // Complete the function
    let results = nums.sort((a, b) => a - b)
        .filter((el, index, array) => index === array.indexOf(el));

    return results[results.length - 2];
}

//my wrong code
function getSecondLargest(nums) {
   nums.sort()
   nums.reverse()
   const max=nums[0]
    for (let i of nums){
        if (max>i){
            return (i)
            break
        }
    }
    
}
