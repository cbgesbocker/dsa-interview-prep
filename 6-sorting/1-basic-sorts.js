/**
 * SORTING - Basic Sorting Algorithms
 * 
 * Bubble Sort, Selection Sort, Insertion Sort
 * Good for understanding sorting, but not practical for large datasets
 */

// ============================================
// BUBBLE SORT - O(n²)
// ============================================

function bubbleSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // Optimization: if no swaps, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}

// ============================================
// SELECTION SORT - O(n²)
// ============================================

function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// ============================================
// INSERTION SORT - O(n²)
// ============================================

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}

// ============================================
// DEMONSTRATION
// ============================================

console.log('=== BUBBLE SORT ===\n');
const arr1 = [64, 34, 25, 12, 22, 11, 90];
console.log('Original:', arr1);
console.log('Sorted:', bubbleSort([...arr1]));

console.log('\n=== SELECTION SORT ===\n');
const arr2 = [64, 34, 25, 12, 22, 11, 90];
console.log('Original:', arr2);
console.log('Sorted:', selectionSort([...arr2]));

console.log('\n=== INSERTION SORT ===\n');
const arr3 = [64, 34, 25, 12, 22, 11, 90];
console.log('Original:', arr3);
console.log('Sorted:', insertionSort([...arr3]));

// ============================================
// TIME COMPLEXITY COMPARISON
// ============================================

console.log('\n=== TIME COMPLEXITY ===');
console.log(`
Bubble Sort:
  Best:    O(n) - already sorted (with optimization)
  Average: O(n²)
  Worst:   O(n²) - reverse sorted
  Space:   O(1)
  Stable:  Yes
  
Selection Sort:
  Best:    O(n²)
  Average: O(n²)
  Worst:   O(n²)
  Space:   O(1)
  Stable:  No
  
Insertion Sort:
  Best:    O(n) - already sorted
  Average: O(n²)
  Worst:   O(n²) - reverse sorted
  Space:   O(1)
  Stable:  Yes
  
When to use:
  - Bubble Sort: Teaching, tiny arrays only
  - Selection Sort: When memory write is expensive
  - Insertion Sort: Small arrays, nearly sorted data, online sorting
`);
