/**
 * STACKS & QUEUES - Stack Implementation
 * 
 * Stack: LIFO (Last In First Out)
 * - Push: add to top - O(1)
 * - Pop: remove from top - O(1)
 * - Peek: view top - O(1)
 * 
 * Use cases: undo/redo, browser back button, function call stack, parentheses matching
 */

class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to top - O(1)
  push(element) {
    this.items.push(element);
  }

  // Remove element from top - O(1)
  pop() {
    return this.items.pop();
  }

  // View top element - O(1)
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if empty - O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size - O(1)
  size() {
    return this.items.length;
  }

  // Clear stack - O(1)
  clear() {
    this.items = [];
  }

  // Print stack
  print() {
    console.log(this.items.toString());
  }
}

// ============================================
// DEMONSTRATION
// ============================================

console.log('=== STACK OPERATIONS ===\n');

const stack = new Stack();

console.log('Pushing 10, 20, 30:');
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log('\nPeek (top element):', stack.peek());
console.log('Size:', stack.size());

console.log('\nPopping:');
console.log('Popped:', stack.pop());
stack.print();

console.log('\nIs empty?', stack.isEmpty());

// ============================================
// BALANCED PARENTHESES
// ============================================

console.log('\n=== BALANCED PARENTHESES ===\n');

function isBalanced(str) {
  const stack = new Stack();
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.isEmpty() || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log('"{[()()]}" is balanced?', isBalanced('{[()()]}'));
console.log('"{[(])}" is balanced?', isBalanced('{[(])}'));
console.log('"())" is balanced?', isBalanced('())'));

// ============================================
// REVERSE A STRING
// ============================================

console.log('\n=== REVERSE STRING ===\n');

function reverseString(str) {
  const stack = new Stack();
  
  for (const char of str) {
    stack.push(char);
  }

  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log('Original: "hello"');
console.log('Reversed:', reverseString('hello'));

// ============================================
// DECIMAL TO BINARY CONVERSION
// ============================================

console.log('\n=== DECIMAL TO BINARY ===\n');

function decimalToBinary(num) {
  const stack = new Stack();

  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  let binary = '';
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }

  return binary;
}

console.log('Decimal 10 to Binary:', decimalToBinary(10));
console.log('Decimal 25 to Binary:', decimalToBinary(25));

console.log('\n=== TIME COMPLEXITY ===');
console.log(`
Push:    O(1)
Pop:     O(1)
Peek:    O(1)
isEmpty: O(1)
Size:    O(1)
`);
