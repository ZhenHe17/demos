/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
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
    if (!head) {
      return false
    }
    let slow = head
    let fast = head

    while (slow.next && fast.next && fast.next.next) {
      if (slow.next == fast.next.next) {
        return true
      }
      slow = slow.next
      fast = fast.next.next
    }
    return false 
};

