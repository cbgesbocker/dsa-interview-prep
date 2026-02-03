/**
 * DYNAMIC PROGRAMMING - Introduction
 * 
 * DP = Problem has optimal substructure + overlapping subproblems
 * 
 * Two approaches:
 * 1. Memoization (Top-Down) - Recursion + cache
 * 2. Tabulation (Bottom-Up) - Build table iteratively
 */

// ============================================
// FIBONACCI - NAIVE APPROACH O(2^n)
// ============================================

console.log('=== FIBONACCI ===\n');

function fibNaive(n) {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

console.log('Naive fib(5):', fibNaive(5));
// This is slow! fib(5) calls fib(4) and fib(3)
//                    fib(4) calls fib(3) and fib(2)
//                    fib(3) gets computed twice!

// ============================================
// FIBONACCI - MEMOIZATION O(n)
// ============================================

function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log('Memoization fib(50):', fibMemo(50));

// ============================================
// FIBONACCI - TABULATION O(n)
// ============================================

function fibTab(n) {
  if (n <= 1) return n;

  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log('Tabulation fib(50):', fibTab(50));

// ============================================
// COIN CHANGE - MINIMUM COINS
// ============================================

console.log('\n=== COIN CHANGE ===\n');

function coinChange(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (amount < 0) return -1;
  if (amount in memo) return memo[amount];

  let min = Infinity;

  for (const coin of coins) {
    const result = coinChange(coins, amount - coin, memo);
    if (result !== -1) {
      min = Math.min(min, result + 1);
    }
  }

  memo[amount] = min === Infinity ? -1 : min;
  return memo[amount];
}

console.log('Coins [1, 2, 5], amount 5:', coinChange([1, 2, 5], 5));
console.log('Coins [2], amount 3:', coinChange([2], 3));

// ============================================
// LONGEST INCREASING SUBSEQUENCE
// ============================================

console.log('\n=== LONGEST INCREASING SUBSEQUENCE ===\n');

function lis(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log('LIS of [10, 9, 2, 5, 3, 7, 101, 18]:', lis([10, 9, 2, 5, 3, 7, 101, 18]));
// [2, 3, 7, 18] or [2, 3, 7, 101] - length 4

// ============================================
// 0/1 KNAPSACK
// ============================================

console.log('\n=== 0/1 KNAPSACK ===\n');

function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array(capacity + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let w = capacity; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }

  return dp[capacity];
}

const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;

console.log('Max value with capacity 5:', knapsack(weights, values, capacity));

// ============================================
// COMMON DP PATTERNS
// ============================================

console.log('\n=== DP PATTERNS ===');
console.log(`
1D DP:
  - Fibonacci, House Robber, Climbing Stairs
  
2D DP:
  - Longest Common Subsequence, Edit Distance
  - Knapsack, Unique Paths
  
Graph DP:
  - Shortest Path, Floyd-Warshall
  
String DP:
  - Edit Distance, Longest Palindrome
  - Word Break, Regular Expression
  
When to use DP:
  1. Problem has optimal substructure
  2. Problem has overlapping subproblems
  3. Can't use greedy or simpler approaches
  
How to solve DP problems:
  1. Define state: dp[i] = ?
  2. Find recurrence: dp[i] = f(dp[i-1], dp[i-2], ...)
  3. Base cases: dp[0], dp[1], ...
  4. Choose approach: memoization or tabulation
  5. Optimize space if needed
`);
