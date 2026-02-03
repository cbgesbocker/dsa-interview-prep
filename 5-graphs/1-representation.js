/**
 * GRAPHS - Representation
 * 
 * Two main ways to represent graphs:
 * 1. Adjacency List - Better for sparse graphs
 * 2. Adjacency Matrix - Better for dense graphs
 */

// ============================================
// ADJACENCY LIST (Most Common)
// ============================================

class GraphAdjList {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2, weight = 1) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    // For undirected graph
    this.adjacencyList.get(vertex1).push({ vertex: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ vertex: vertex1, weight });
  }

  addDirectedEdge(from, to, weight = 1) {
    this.addVertex(from);
    this.addVertex(to);
    this.adjacencyList.get(from).push({ vertex: to, weight });
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }

  display() {
    for (let [vertex, neighbors] of this.adjacencyList) {
      let edges = neighbors.map(n => `${n.vertex}(${n.weight})`).join(', ');
      console.log(`${vertex} -> ${edges}`);
    }
  }
}

// ============================================
// ADJACENCY MATRIX
// ============================================

class GraphAdjMatrix {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.matrix = Array(numVertices).fill(null).map(() => Array(numVertices).fill(0));
    this.vertexMap = new Map();
    this.vertexIndex = 0;
  }

  addVertex(vertex) {
    if (!this.vertexMap.has(vertex)) {
      this.vertexMap.set(vertex, this.vertexIndex++);
    }
  }

  addEdge(vertex1, vertex2, weight = 1) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    const i = this.vertexMap.get(vertex1);
    const j = this.vertexMap.get(vertex2);

    // Undirected graph
    this.matrix[i][j] = weight;
    this.matrix[j][i] = weight;
  }

  addDirectedEdge(from, to, weight = 1) {
    this.addVertex(from);
    this.addVertex(to);

    const i = this.vertexMap.get(from);
    const j = this.vertexMap.get(to);
    this.matrix[i][j] = weight;
  }

  display() {
    console.log('  ', Array.from(this.vertexMap.keys()).join(' '));
    for (let i = 0; i < this.numVertices; i++) {
      if (i < this.vertexMap.size) {
        const vertex = Array.from(this.vertexMap.keys())[i];
        console.log(vertex, this.matrix[i].slice(0, this.vertexMap.size).join(' '));
      }
    }
  }
}

// ============================================
// DEMONSTRATION
// ============================================

console.log('=== ADJACENCY LIST ===\n');

const graph1 = new GraphAdjList();
graph1.addEdge('A', 'B', 1);
graph1.addEdge('B', 'C', 2);
graph1.addEdge('C', 'D', 3);
graph1.addEdge('A', 'D', 4);

graph1.display();

console.log('\n=== ADJACENCY MATRIX ===\n');

const graph2 = new GraphAdjMatrix(4);
graph2.addEdge('A', 'B', 1);
graph2.addEdge('B', 'C', 2);
graph2.addEdge('C', 'D', 3);
graph2.addEdge('A', 'D', 4);

graph2.display();

// ============================================
// COMPARISON
// ============================================

console.log('\n=== ADJACENCY LIST VS MATRIX ===');
console.log(`
Adjacency List:
  Space:        O(V + E) - better for sparse graphs
  Add Edge:     O(1)
  Check Edge:   O(degree) - O(V) worst case
  Get Neighbors: O(1)
  
Adjacency Matrix:
  Space:        O(V²) - better for dense graphs
  Add Edge:     O(1)
  Check Edge:   O(1)
  Get Neighbors: O(V)
  
Use Adjacency List when:
  - Graph is sparse (few edges)
  - Need to iterate over neighbors frequently
  
Use Adjacency Matrix when:
  - Graph is dense (many edges)
  - Need to check if edge exists frequently
  - Doing matrix operations
`);
