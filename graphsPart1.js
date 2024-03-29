class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Add edge
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }



   showConnections() {
    const keys = Object.keys(this.adjacencyList);
    for (let vertex of keys) {
      let connections = "";
      let vertexList = this.adjacencyList[vertex];
      for (let j = 0; j < vertexList.length; j++) {
        connections += vertexList[j] + " ";
      }
      console.log(vertex + " --> " + connections);
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "A");

graph.showConnections();
