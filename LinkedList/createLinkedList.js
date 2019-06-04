function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
   let head = new ListNode(null);
   for (let i = 0, cur = head; i < arr.length; i++) {
       cur.next = new ListNode(arr[i]);
       cur = cur.next;
   }
   return head.next;
}

var list = createList([1,2,3,4]);