/**
 * STACKS & QUEUES - Queue Implementation
 * 
 * Queue: FIFO (First In First Out)
 * - Enqueue: add to back - O(1)
 * - Dequeue: remove from front - O(1)
 * - Peek: view front - O(1)
 * 
 * Use cases: BFS, task scheduling, printer queue, call center
 */

class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to back - O(1)
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from front - O(n) with array, O(1) with linked list
  dequeue() {
    return this.items.shift();
  }

  // View front element - O(1)
  front() {
    return this.items[0];
  }

  // Check if empty - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size - O(1)
  size() {
    return this.items.length;
  }

  // Clear queue - O(1)
  clear() {
    this.items = [];
  }

  // Print queue
  print() {
    console.log(this.items.toString());
  }
}

// ============================================
// MORE EFFICIENT QUEUE WITH OBJECT
// ============================================

class OptimizedQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return result;
  }

  frontElement() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    const arr = [];
    for (let i = this.front; i < this.rear; i++) {
      arr.push(this.items[i]);
    }
    console.log(arr.toString());
  }
}

// ============================================
// DEMONSTRATION
// ============================================

console.log('=== QUEUE OPERATIONS ===\n');

const queue = new OptimizedQueue();

console.log('Enqueuing 10, 20, 30:');
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

console.log('\nFront element:', queue.frontElement());
console.log('Size:', queue.size());

console.log('\nDequeuing:');
console.log('Dequeued:', queue.dequeue());
queue.print();

console.log('\nIs empty?', queue.isEmpty());

// ============================================
// GENERATE BINARY NUMBERS (1 to n)
// ============================================

console.log('\n=== GENERATE BINARY NUMBERS ===\n');

function generateBinaryNumbers(n) {
  const queue = new OptimizedQueue();
  queue.enqueue('1');
  const result = [];

  for (let i = 0; i < n; i++) {
    const num = queue.dequeue();
    result.push(num);
    queue.enqueue(num + '0');
    queue.enqueue(num + '1');
  }

  return result;
}

console.log('Binary numbers 1 to 8:');
console.log(generateBinaryNumbers(8));

// ============================================
// REVERSE FIRST K ELEMENTS OF QUEUE
// ============================================

console.log('\n=== REVERSE FIRST K ELEMENTS ===\n');

function reverseFirstK(queue, k) {
  const stack = [];

  // Move first k elements to stack
  for (let i = 0; i < k; i++) {
    stack.push(queue.dequeue());
  }

  // Move back from stack (reversed)
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  // Move remaining elements to back
  for (let i = 0; i < queue.size() - k; i++) {
    queue.enqueue(queue.dequeue());
  }

  return queue;
}

// Test
const q = new OptimizedQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log('Original queue:');
q.print();

reverseFirstK(q, 3);
console.log('After reversing first 3 elements:');
q.print();

console.log('\n=== TIME COMPLEXITY ===');
console.log(`
With Array:
  Enqueue:  O(1)
  Dequeue:  O(n) - need to shift all elements
  
With Object (Optimized):
  Enqueue:  O(1)
  Dequeue:  O(1)
  
Space:    O(n)
`);
