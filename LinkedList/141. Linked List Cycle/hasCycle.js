/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next || !head.next.next) {
        return false;
    }
    let quick = head.next.next,
        slow = head.next;
    while (slow && quick && quick.next && slow.next && quick.next.next) {
        if (quick === slow) {
            return true;
        }
        quick = quick.next.next;
        slow = slow.next;
    }
    return false;
};
