/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


 /**
 * SOLUTION
 * Every link list has a next value property which refers to the next item on the link list. So we start by assigning the link list to two variables called double and single
 * The double will move forward in the link list by two nodes during each iteration. That is when our loop begins we will have to assign the next next node to our double variable
 * While the single will move forward by one node during each iteration. 
 * we write a conditional to check if the next node in the double variable is falsy. If it is this means our link list has an odd number of elements in the link list
 * the next check will be for the next next element in the double variable. If it is falsy this means our link list is an even link list and we want to return the next node in the single 
 */
var middleNode = function(head) {

    let double = head;
    let single = head;
    
    while(double){
        if(!double.next){
            return single
        }else if(!double.next.next){
            return single.next
        }
        single = single.next;
        double = double.next.next 
    }
    
};

