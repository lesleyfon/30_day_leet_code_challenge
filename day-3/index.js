/**
 *  Maximum Subarray
Solution
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
   for (let index = 0, len = nums.length; index < len; index++) {
     let count = nums[index];
     for (j = index + 1; j < len; j++) {
       count += nums[j];
         if (count > max) max = count;
       if (max < nums[j]) max = nums[j];
       if (max < nums[index]) max = nums[index];
     }
   }
   return max;
 };