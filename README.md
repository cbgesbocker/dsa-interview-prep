# Data Structures & Algorithms Interview Prep

A comprehensive guide to mastering data structures and algorithms for technical interviews. Written in JavaScript/Node.js with detailed explanations, examples, and solutions.

## 📚 Topics Covered

### Data Structures
- **Arrays & Strings** - Manipulation, searching, patterns
- **Linked Lists** - Single/double linked lists, circular lists
- **Stacks & Queues** - Implementation and use cases
- **Trees** - Binary trees, BST, balanced trees, traversals
- **Graphs** - Adjacency list/matrix, DFS, BFS, shortest paths
- **Hash Tables** - Hash maps, collision handling
- **Heaps** - Min/max heaps, priority queues

### Algorithms
- **Sorting** - Bubble, selection, insertion, merge, quick, heap sort
- **Searching** - Linear, binary, two-pointer
- **Dynamic Programming** - Memoization, tabulation, classic problems
- **Graph Algorithms** - DFS, BFS, Dijkstra, Bellman-Ford, Floyd-Warshall
- **Greedy Algorithms** - Activity selection, Huffman coding
- **Backtracking** - Permutations, combinations, N-Queens

## 🗂️ Directory Structure

```
dsa-interview-prep/
├── 1-arrays-strings/
│   ├── 1-intro.js          # Basic concepts
│   ├── 2-two-pointer.js    # Two pointer techniques
│   ├── 3-sliding-window.js # Sliding window pattern
│   └── problems.md         # Practice problems
│
├── 2-linked-lists/
│   ├── 1-implementation.js # Linked list implementation
│   ├── 2-operations.js     # Common operations
│   └── problems.md         # Practice problems
│
├── 3-stacks-queues/
│   ├── 1-stack.js          # Stack implementation
│   ├── 2-queue.js          # Queue implementation
│   └── problems.md         # Practice problems
│
├── 4-trees/
│   ├── 1-binary-tree.js    # Binary tree basics
│   ├── 2-bst.js            # Binary search trees
│   ├── 3-traversal.js      # In/pre/post order traversal
│   └── problems.md         # Practice problems
│
├── 5-graphs/
│   ├── 1-representation.js # Adjacency list/matrix
│   ├── 2-dfs.js            # Depth-first search
│   ├── 3-bfs.js            # Breadth-first search
│   ├── 4-shortest-path.js  # Dijkstra, Bellman-Ford
│   └── problems.md         # Practice problems
│
├── 6-sorting/
│   ├── 1-basic-sorts.js    # Bubble, selection, insertion
│   ├── 2-efficient-sorts.js # Merge, quick, heap sort
│   └── problems.md         # Practice problems
│
├── 7-dynamic-programming/
│   ├── 1-intro.js          # DP basics & memoization
│   ├── 2-classic-problems.js # Fibonacci, knapsack, etc.
│   └── problems.md         # Practice problems
│
├── 8-hash-tables/
│   ├── 1-implementation.js # Hash table basics
│   └── problems.md         # Practice problems
│
├── cheatsheet.md           # Quick reference
├── time-complexity.md      # Big O analysis
└── interview-tips.md       # Interview strategies
```

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/cbgesbocker/dsa-interview-prep.git
cd dsa-interview-prep
npm install
```

### Running Examples

```bash
# Run a specific lesson
node 1-arrays-strings/1-intro.js

# Run all tests
npm test
```

### Learning Path

1. **Start with the fundamentals** - Arrays, strings, and basic operations
2. **Move to data structures** - Understand how they work internally
3. **Practice problems** - Each section has practice problems
4. **Study algorithms** - Sorting, searching, graph algorithms
5. **Advanced topics** - Dynamic programming, complex algorithms

## 💡 Key Concepts by Interview Level

### Easy (Foundation)
- Array/string manipulation
- Basic linked lists
- Stacks & queues
- Simple recursion
- Basic binary search

### Medium (Competency)
- Tree traversals & BST operations
- Graph DFS/BFS
- Dynamic programming basics
- Two-pointer technique
- Sliding window

### Hard (Mastery)
- Complex DP problems
- Graph algorithms (Dijkstra, etc.)
- Backtracking
- Advanced tree problems
- System design patterns

## 📊 Time & Space Complexity

### Common Operations

| Operation | Array | Linked List | BST | Hash Table |
|-----------|-------|-------------|-----|-----------|
| Access | O(1) | O(n) | O(log n) | O(1) |
| Search | O(n) | O(n) | O(log n) | O(1) |
| Insert | O(n) | O(1) | O(log n) | O(1) |
| Delete | O(n) | O(1) | O(log n) | O(1) |

### Sorting Algorithms

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |

## 🎯 Interview Tips

### Before the Interview
- Review this cheatsheet the night before
- Practice 2-3 problems from each category
- Get comfortable explaining your approach out loud
- Understand time/space tradeoffs

### During the Interview
1. **Clarify the problem** - Ask clarifying questions
2. **Think out loud** - Explain your approach before coding
3. **Start simple** - Get a working solution first, optimize later
4. **Test your code** - Walk through examples and edge cases
5. **Discuss complexity** - Talk about time and space complexity

### Common Patterns

- **Two Pointers** - For sorted arrays, linked lists
- **Sliding Window** - For contiguous subarrays
- **Fast & Slow Pointers** - For cycle detection
- **Memoization** - For overlapping subproblems
- **DFS/BFS** - For graph and tree problems

## 📖 Resources

### Books
- "Cracking the Coding Interview" by Gayle Laakmann McDowell
- "Introduction to Algorithms" by CLRS

### Websites
- LeetCode (practice problems)
- HackerRank (interactive tutorials)
- GeeksforGeeks (detailed explanations)

## 📝 How to Use This Repo

1. **Pick a topic** from the directory structure
2. **Read the intro lesson** to understand concepts
3. **Study the examples** and run them locally
4. **Work through practice problems** without looking at solutions first
5. **Compare your solution** with the provided solution
6. **Discuss time/space complexity**

## 🤝 Contributing

Found a bug? Have a better solution? Feel free to open an issue or PR!

## 📄 License

MIT License - Feel free to use for learning and interviews!

---

**Remember:** The goal isn't to memorize solutions, but to understand the underlying concepts and develop problem-solving intuition. Practice regularly, and you'll be ready for any technical interview!

Good luck! 🚀
