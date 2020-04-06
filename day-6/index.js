/**
 * Given an array of string, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //create a hash map to store values
    let hashMap = {};
    
    //iterate through the array of strings 
    for(let i = 0; i < strs.length; i++){
        //Sort the string each time we are iterating over and assign it to a variable called sorted string
        let sortedWord = strs[i].split('').sort().join('');
        //if there is a key in the hashMap with the key name of sorted string,
        if(hashMap[sortedWord]){
            // we add it to the front of the array 
            hashMap[sortedWord].unshift(strs[i])
        }else{
            // else we create a new key with a value of an array and add the current string we are iterating over
            hashMap[sortedWord] = [strs[i]]
        }
        // (hashMap[sortedWord]) ?  hashMap[sortedWord].unshift(strs[i]) :  hashMap[sortedWord] = [strs[i]]
    }
    return Object.values(hashMap)
    
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])