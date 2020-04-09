/**
 * Backspace String Compare
Solution
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

 */

/**
 * Solution
 * Step 1: Create an array to hold result of strings.
 * Step 2: Iterate through the current String.
 * Step 3: If the current string we are iterating over is # then we remove the last element that was push into the array
 * Step 4: else We push the current String into the Array
 * Step 5: Create a utility function to generate strings without the # sign and return a string
 * Step 6: Use a ternary to compare both string and return a boolean
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return generateFilteredString(S) === generateFilteredString ? true : false;
};

function generateFilteredString(str) {
  let hash = [];
  for (let i = 0; i < str.length; i++) {
    str[i] === "#" ? hash.pop() : hash.push(str[i]);
  }
  return hash.join("");
}
