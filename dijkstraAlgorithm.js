class PriorityQueue {
    constructor() {
        this.collection = [];
    }

     enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (element[1] < this.collection[i][1]) { // checking priorities
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }


    dequeue() {
        return this.collection.shift();
    }

    isEmpty() {
        return this.collection.length === 0;
    }

}
function dijkstraAlgorithm(graph, startVertex) {
    const distances = {};
    const prev = {};
    const pq = new PriorityQueue();

    // Initialization
    for (let vertex in graph) {
        if (vertex == startVertex) {
            distances[vertex] = 0;
            pq.enqueue([vertex, 0]);
        } else {
            distances[vertex] = Infinity;
        }
        prev[vertex] = null;
    }

    while (!pq.isEmpty()) {
        let [currentVertex, currentDistance] = pq.dequeue();

        for (let neighbor in graph[currentVertex]) {
            let distance = currentDistance + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                prev[neighbor] = currentVertex;
                pq.enqueue([neighbor, distance]);
            }
        }
    }

    return { distances, prev };
}
const graph = {
    A: {B: 1, C: 4},
    B: {A: 1, C: 2, D: 5},
    C: {A: 4, B: 2, D: 1},
    D: {B: 5, C: 1}
};

const startVertex = 'A';
const shortestPaths = dijkstraAlgorithm(graph, startVertex);

console.log("Shortest distances: ", shortestPaths.distances);
console.log("Previous vertices: ", shortestPaths.prev);
