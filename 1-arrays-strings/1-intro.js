/**
 * ARRAYS & STRINGS - Introduction
 * 
 * Core concepts:
 * - Arrays are contiguous memory blocks
 * - Strings are arrays of characters
 * - Common operations: access O(1), insert O(n), delete O(n)
 */

// ============================================
// BASIC ARRAY OPERATIONS
// ============================================

console.log('=== ARRAY BASICS ===\n');

// Creating arrays
const arr = [1, 2, 3, 4, 5];
console.log('Original array:', arr);

// Access - O(1)
console.log('Access arr[2]:', arr[2]);

// Insert - O(n) because we need to shift elements
arr.splice(2, 0, 99);  // Insert 99 at index 2
console.log('After inserting 99 at index 2:', arr);

// Delete - O(n)
arr.splice(2, 1);  // Remove element at index 2
console.log('After removing element at index 2:', arr);

// ============================================
// COMMON PATTERNS
// ============================================

console.log('\n=== REVERSING AN ARRAY ===\n');

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  
  return arr;
}

const toReverse = [1, 2, 3, 4, 5];
console.log('Original:', toReverse);
console.log('Reversed:', reverseArray([...toReverse]));

// ============================================
// FINDING DUPLICATES
// ============================================

console.log('\n=== FINDING DUPLICATES ===\n');

function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    }
    seen.add(num);
  }
  
  return Array.from(duplicates);
}

const arrWithDuplicates = [1, 2, 2, 3, 3, 3, 4];
console.log('Array:', arrWithDuplicates);
console.log('Duplicates:', findDuplicates(arrWithDuplicates));

// ============================================
// REMOVING DUPLICATES (In-place)
// ============================================

console.log('\n=== REMOVING DUPLICATES (In-place) ===\n');

function removeDuplicates(arr) {
  // Works only for sorted arrays
  // Uses two pointers technique
  let writeIndex = 1;
  
  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== arr[readIndex - 1]) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }
  
  return arr.slice(0, writeIndex);
}

const sorted = [1, 1, 2, 2, 2, 3, 4, 4];
console.log('Original:', sorted);
console.log('After removing duplicates:', removeDuplicates([...sorted]));

// ============================================
// MOVING ZEROS TO END
// ============================================

console.log('\n=== MOVING ZEROS TO END ===\n');

function moveZeros(arr) {
  let writeIndex = 0;
  
  // First pass: move all non-zeros to the front
  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }
  
  // Second pass: fill remaining with zeros
  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }
  
  return arr;
}

const withZeros = [1, 0, 2, 0, 3, 0, 4];
console.log('Original:', withZeros);
console.log('Zeros moved:', moveZeros([...withZeros]));

// ============================================
// COMMON PITFALLS & TIPS
// ============================================

console.log('\n=== IMPORTANT NOTES ===');
console.log(`
1. INDEX OUT OF BOUNDS
   - Always check array length before accessing
   - Off-by-one errors are common!

2. EMPTY ARRAY HANDLING
   - Handle edge case where arr.length === 0
   
3. IN-PLACE VS NEW ARRAY
   - In-place: O(1) space, but modifies original
   - New array: O(n) space, but preserves original
   
4. TWO POINTER TECHNIQUE
   - Great for sorted arrays
   - Reduces time complexity from O(n²) to O(n)
   
5. HASH SETS FOR DUPLICATES
   - O(1) lookup time
   - Perfect for "has duplicate" problems
`);
