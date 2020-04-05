// Single Number
// Solution
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let objMap = {},
    index = null
    for(let num of nums ){
        if(objMap[num]){
            objMap[num] += 1
        }else{
            objMap[num] = 1
        }
    }
    let keys = Object.keys(objMap),
        values = Object.values(objMap);
    for(let i = 0; i< values.length; i++){
        if(values[i] === 1){
            index = i;
        }
    }
  return parseInt (keys[index]);

}