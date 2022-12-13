class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((v) => {
        this.removeEdge(v, vertex);
      });
      delete this.adjacencyList[vertex];
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);
    if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
    if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (vertex) => vertex !== v2
      );
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        (vertex) => vertex !== v1
      );
    }
  }

  recursiveDFS(vertex) {
    const results = [];
    const visited = {};
    const graph = this;

    DFS(vertex);
    return results;
    function DFS(v) {
      if (!v) return;

      results.push(v);
      visited[v] = true;

      graph.adjacencyList[v].forEach((n) => {
        if (!visited[n]) {
          return DFS(n);
        }
      });
    }
  }

  iterativeDFS(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    const queue = [start];
    const visited = {};
    const result = [];

    visited[start] = true;

    while (queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
