# DSA Interview Cheatsheet

Quick reference for data structures, algorithms, and common patterns.

## Time Complexity Cheat Sheet

### Operations by Data Structure

| DS | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(1)* |
| Stack | O(n) | O(n) | O(1) | O(1) |
| Queue | O(n) | O(n) | O(1) | O(1) |
| BST | O(log n) | O(log n) | O(log n) | O(log n) |
| Hash Table | O(1) | O(1) | O(1) | O(1) |

*With known position

### Sorting Algorithms

| Algorithm | Best | Average | Worst | Space | Notes |
|---|---|---|---|---|---|
| Bubble | O(n) | O(n²) | O(n²) | O(1) | Simple, not practical |
| Selection | O(n²) | O(n²) | O(n²) | O(1) | Minimal swaps |
| Insertion | O(n) | O(n²) | O(n²) | O(1) | Good for small/sorted |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | Stable, not in-place |
| Quick | O(n log n) | O(n log n) | O(n²) | O(log n) | Fast avg case |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1) | Consistent performance |

### Space Complexity

| Structure | Space |
|---|---|
| Array | O(n) |
| Linked List | O(n) |
| BST (balanced) | O(log n) height |
| Hash Table | O(n) |

## Common Patterns

### Two Pointers
For sorted arrays, find pairs, palindromes:
```javascript
let left = 0, right = arr.length - 1;
while (left < right) {
  // Compare and move pointers
}
```

### Sliding Window
For contiguous subarrays:
```javascript
let windowStart = 0;
for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  // Add arr[windowEnd] to window
  while (windowSize > limit) {
    // Remove arr[windowStart] from window
    windowStart++;
  }
  // Update result
}
```

### Fast & Slow Pointers (Floyd's Algorithm)
For cycle detection:
```javascript
let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) { /* cycle */ }
}
```

### Recursion & Backtracking
For permutations, combinations, N-Queens:
```javascript
function backtrack(path, remaining) {
  if (remaining.length === 0) {
    result.push(path);
    return;
  }
  for (let i = 0; i < remaining.length; i++) {
    backtrack(path + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
  }
}
```

### Memoization (Top-Down DP)
```javascript
const memo = {};
function fib(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}
```

### Tabulation (Bottom-Up DP)
```javascript
const dp = new Array(n + 1).fill(0);
dp[0] = 0;
dp[1] = 1;
for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
return dp[n];
```

## Common Algorithms

### Binary Search
```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// Time: O(log n), Space: O(1)
```

### DFS (Depth-First Search)
```javascript
function dfs(node, visited = new Set()) {
  visited.add(node);
  for (let neighbor of node.neighbors) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited);
    }
  }
}
// Time: O(V + E), Space: O(V)
```

### BFS (Breadth-First Search)
```javascript
function bfs(start) {
  const queue = [start];
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const node = queue.shift();
    for (let neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
// Time: O(V + E), Space: O(V)
```

### Dijkstra's Algorithm
```javascript
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  
  while (visited.size < Object.keys(graph).length) {
    let minNode = null;
    for (let node in distances) {
      if (!visited.has(node) && (minNode === null || distances[node] < distances[minNode])) {
        minNode = node;
      }
    }
    visited.add(minNode);
    for (let neighbor in graph[minNode]) {
      distances[neighbor] = Math.min(
        distances[neighbor],
        distances[minNode] + graph[minNode][neighbor]
      );
    }
  }
  return distances;
}
// Time: O(V²) or O((V+E)log V) with heap
```

## Interview Red Flags

❌ Immediately jumping to code without understanding the problem
❌ Not considering edge cases (empty input, single element, etc.)
❌ Forgetting to discuss time/space complexity
❌ Not asking clarifying questions
❌ Overcomplicating the solution

## Interview Green Flags

✅ Understanding the problem fully before coding
✅ Walking through examples
✅ Discussing multiple approaches
✅ Optimizing after getting working solution
✅ Considering edge cases
✅ Explaining time/space tradeoffs

## Big O Rules

1. **Drop Constants**: O(2n) → O(n)
2. **Drop Lower Order Terms**: O(n² + n) → O(n²)
3. **Different Variables**: O(m * n) not O(n²)
4. **Add vs Multiply**: 
   - Sequential = Add: O(a + b)
   - Nested = Multiply: O(a * b)

## Must-Know Problems

### Easy
- Two Sum
- Reverse String
- Valid Palindrome
- Merge Sorted Array
- Binary Search

### Medium
- 3Sum
- Longest Substring Without Repeating Characters
- Number of Islands
- Kth Largest Element
- Coin Change

### Hard
- Median of Two Sorted Arrays
- Word Ladder
- Longest Valid Parentheses
- Trapping Rain Water
- LRU Cache

---

**Remember:** Understanding the concepts is more important than memorizing solutions!
