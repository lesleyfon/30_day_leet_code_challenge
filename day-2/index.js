/**
 * Happy Number
Solution
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 * 
 */


 /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let numArray = convertToArray(n)
    let total = 0,
    bool = true,
    visited = {};
    while(bool){

        total = numArray.reduce((acc, curr) => (curr ** 2) + acc, 0);
        console.log(total)
        if(total === 1){
            bool = false;
            return true
        }else if (total === n ){
            bool = false
            return false
        }else if (!visited[total]){
            visited[total] = total;
            numArray = convertToArray(total);
        }else if(visited[total]){
            bool = false
            return false
        }else{
            numArray = convertToArray(total);
        }
    }
};

function convertToArray(num){
    let arr =  num.toString().split('').map(n => parseInt(n));
    return arr
}