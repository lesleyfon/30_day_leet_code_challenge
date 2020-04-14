
 ## Perform String Shifts
### Solution
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:<br>

direction can be 0 (for left shift) or 1 (for right shift). <br>
amount is the amount by which string s is to be shifted. <br>
A left shift by 1 means remove the first character of s and append it to the end. <br>
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning. <br>
Return the final string after all operations.

 
```
Example 1:

Input: s = "abc", shift = [[0,1],[1,2]]
Output: "cab"
Explanation: 
[0,1] means shift to left by 1. "abc" -> "bca"
[1,2] means shift to right by 2. "bca" -> "cab"
```

```
Example 2:

Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
Output: "efgabcd"
Explanation:  
[1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
[1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
[0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
[1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 ```

 ```
Constraints:

1 <= s.length <= 100
s only contains lower case English letters.
1 <= shift.length <= 100
shift[i].length == 2
0 <= shift[i][0] <= 1
0 <= shift[i][1] <= 100
```


 #### SOLUTION

 * Step 1: <br>
    Create a variable  and convert the string into an array and save it to a variable ```let stringArray = s.split('')```
* Step 2: <br>
    Traverse through the shift array (passed is as arguments to the function) 
* Step 3: <br>
    If the current sub array in the shift array at index 0 i.e  ```shift[i][0]``` is equal to 0 we want to remove ```shift[i][1]``` from the start of the ```stringArray``` and move it to the end of the ```stringArray```
* Step 4: <br>
    Else we want to remove ```shift[i][1]``` number of elements from the end of the ```stringArray``` to the start of the array
* Step $: <br>
    After the Loop we want to convert the ```stringArray``` to a string and return

  