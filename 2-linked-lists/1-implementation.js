/**
 * LINKED LISTS - Implementation
 * 
 * A linked list is a linear data structure where elements are stored in nodes
 * that point to the next node.
 * 
 * Advantages:
 * - Dynamic size
 * - O(1) insertion/deletion at known position
 * 
 * Disadvantages:
 * - O(n) access time (no random access)
 * - Extra space for pointers
 */

// ============================================
// NODE CLASS
// ============================================

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ============================================
// SINGLY LINKED LIST
// ============================================

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add node to the end - O(n)
  append(value) {
    const newNode = new Node(value);
    
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    
    this.size++;
  }

  // Add node to the beginning - O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at specific index - O(n)
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.size++;
    return true;
  }

  // Remove at specific index - O(n)
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
    } else {
      let previous;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = current.next;
    }

    this.size--;
    return current.value;
  }

  // Get value at index - O(n)
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.value;
      }
      current = current.next;
      count++;
    }

    return null;
  }

  // Clear the list
  clear() {
    this.head = null;
    this.size = 0;
  }

  // Print the list
  print() {
    let current = this.head;
    let result = '';
    
    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    
    result += 'null';
    console.log(result);
  }

  // Get list as array
  toArray() {
    const arr = [];
    let current = this.head;
    
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    
    return arr;
  }
}

// ============================================
// DEMONSTRATION
// ============================================

console.log('=== LINKED LIST OPERATIONS ===\n');

const list = new LinkedList();

console.log('Appending 10, 20, 30:');
list.append(10);
list.append(20);
list.append(30);
list.print();

console.log('\nPrepending 5:');
list.prepend(5);
list.print();

console.log('\nInserting 15 at index 2:');
list.insertAt(15, 2);
list.print();

console.log('\nSize:', list.size);
console.log('Get value at index 2:', list.getAt(2));

console.log('\nRemoving element at index 2:');
const removed = list.removeAt(2);
console.log('Removed value:', removed);
list.print();

console.log('\nAs array:', list.toArray());

// ============================================
// COMMON LINKED LIST PROBLEMS
// ============================================

console.log('\n=== REVERSE LINKED LIST ===\n');

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;  // Save next node
    current.next = prev;        // Reverse the link
    prev = current;             // Move prev forward
    current = next;             // Move current forward
  }

  return prev;  // New head
}

const list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);

console.log('Original:');
list2.print();

list2.head = reverseLinkedList(list2.head);
console.log('Reversed:');
list2.print();

// ============================================
// DETECT CYCLE IN LINKED LIST
// ============================================

console.log('\n=== DETECT CYCLE (Floyd\'s Algorithm) ===\n');

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;  // Cycle detected
    }
  }

  return false;  // No cycle
}

const list3 = new LinkedList();
list3.append(1);
list3.append(2);
list3.append(3);

console.log('List without cycle - hasCycle:', hasCycle(list3.head));

// Create a cycle
list3.head.next.next.next = list3.head.next;
console.log('List with cycle - hasCycle:', hasCycle(list3.head));

console.log('\n=== TIME COMPLEXITY ===');
console.log(`
Access:  O(n)  - must traverse from head
Search:  O(n)  - must check each node
Insert:  O(1)  - if we have position, O(n) otherwise
Delete:  O(1)  - if we have position, O(n) otherwise
`);
