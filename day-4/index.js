/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */


 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //Persist the nums length into a variable
    let numsLength = nums.length - 1;
    // Start from the last element in the array and start looping backwards towards zero
    for(let i = numsLength -1; i >= 0; i--){
    //If the current element we are iterating over is a '0' then we want to remove it from the nums array by calling the splice method on it;
    //Right after removing the '0' we push a '0' to the back of the array
       if(nums[i] === 0){
           nums.splice(i, 1);
           nums.push(0)
       }
    }
   return nums
};