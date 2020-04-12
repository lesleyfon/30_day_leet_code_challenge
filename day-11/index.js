/**
 * Last Stone Weight
Solution
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

Example 1:

Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 

Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000
 */


 /**
  * Solution
  * Step 1: Create a heap to and add and sort the stones as the first heap entry
  * Step 2: while heap length is greater than 0 we want to to keep performing the following task
  * Step 3: We remove the first two elements if X is greater than Y, we get the difference of the two and add it to the head.
  * Step 4: We remove the first two elements of the array and next we sort the heap
  * Step 5: If the first two elements are equal, we want to remove the first two elements from the array and after sort the array just to make sure we are dealing with a sorted array
  */