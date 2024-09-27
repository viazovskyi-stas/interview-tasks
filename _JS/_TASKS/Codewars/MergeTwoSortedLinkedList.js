/**
 * Definition for singly-linked list. */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode()
  let prev = dummy
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }
  if (!list1) prev.next = list2
  if (!list2) prev.next = list1

  return dummy.next
}

const list1 = [1, 2, 4],
  list2 = [1, 3, 4]

console.log(mergeTwoLists(list1, list2))

/*Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
  [
    1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
  */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null
  }
  while (lists.length > 1) {
    const a = lists.shift()
    const b = lists.shift()
    const mergeAB = mergeTwoLists(a, b)
    lists.push(mergeAB)
  }
  return lists[0]
}
