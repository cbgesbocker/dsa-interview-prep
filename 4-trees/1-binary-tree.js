/**
 * TREES - Binary Tree Implementation
 * 
 * Binary Tree: Each node has at most 2 children (left and right)
 * 
 * Traversals:
 * - In-order: Left -> Root -> Right (sorted for BST)
 * - Pre-order: Root -> Left -> Right (copy tree, prefix notation)
 * - Post-order: Left -> Right -> Root (delete tree, postfix notation)
 * - Level-order: BFS, level by level
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = value ? new TreeNode(value) : null;
  }

  // ============================================
  // TRAVERSALS
  // ============================================

  // In-order: Left -> Root -> Right
  // For BST, gives sorted sequence
  inOrder(node = this.root, result = []) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Pre-order: Root -> Left -> Right
  preOrder(node = this.root, result = []) {
    if (node !== null) {
      result.push(node.value);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-order: Left -> Right -> Root
  postOrder(node = this.root, result = []) {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Level-order: BFS
  levelOrder() {
    if (!this.root) return [];

    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  // ============================================
  // TREE PROPERTIES
  // ============================================

  // Height of tree (longest path from root to leaf)
  height(node = this.root) {
    if (node === null) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  // Number of nodes
  size(node = this.root) {
    if (node === null) return 0;
    return 1 + this.size(node.left) + this.size(node.right);
  }

  // Is balanced? (height of left and right differ by at most 1)
  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  // Find a value
  find(value, node = this.root) {
    if (node === null) return false;

    if (node.value === value) return true;

    return this.find(value, node.left) || this.find(value, node.right);
  }
}

// ============================================
// DEMONSTRATION
// ============================================

console.log('=== BINARY TREE TRAVERSALS ===\n');

// Create tree:
//       1
//      / \\
//     2   3
//    / \\
//   4   5

const tree = new BinaryTree(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);

console.log('Tree structure:');
console.log(`       1
      / \\
     2   3
    / \\
   4   5\n`);

console.log('In-order (Left -> Root -> Right):', tree.inOrder());
console.log('Pre-order (Root -> Left -> Right):', tree.preOrder());
console.log('Post-order (Left -> Right -> Root):', tree.postOrder());
console.log('Level-order (BFS):', tree.levelOrder());

console.log('\n=== TREE PROPERTIES ===\n');

console.log('Height:', tree.height());
console.log('Size:', tree.size());
console.log('Is balanced?', tree.isBalanced());
console.log('Contains 4?', tree.find(4));
console.log('Contains 10?', tree.find(10));

// ============================================
// MAXIMUM PATH SUM
// ============================================

console.log('\n=== MAXIMUM PATH SUM ===\n');

function maxPathSum(node) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    // Get max sum from left and right (can't go negative)
    const left = Math.max(0, dfs(node.left));
    const right = Math.max(0, dfs(node.right));

    // Update max path through this node
    maxSum = Math.max(maxSum, node.value + left + right);

    // Return max path including this node and one child
    return node.value + Math.max(left, right);
  }

  dfs(node);
  return maxSum;
}

console.log('Maximum path sum:', maxPathSum(tree.root));

console.log('\n=== TIME COMPLEXITY ===');
console.log(`
All Traversals: O(n) - visit each node once
Height:         O(n) - might visit all nodes
Size:           O(n) - visit each node once
Find:           O(n) - might visit all nodes
`);
