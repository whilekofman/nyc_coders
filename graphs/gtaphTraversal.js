class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		this.size++;
		return this.size;
	}

	dequeue() {
		if (!this.first) {
			return null;
		}

		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;

		this.size--;
		return temp.value;
	}

	getSize() {
		return this.size;
	}
}
// using an array for the queue
function bfs(start, graph) {
	// Initialize a set for tracking visited vertices
	// const seen = new Set()
	const seen = new Set();
	// Initialize a queue for tracking traversal
	const queue = [];
	// Add the start vertex to visited
	seen.add(start);
	// Enqueue the start vertex to the queue
	queue.push(start);
	// While the queue is not empty
	while (queue.length) {
		//   Dequeue a vertex
		const v = queue.shift();
		//   Log the value of the vertex
		console.log(v);
		//   For each neighbor of the vertex
		for (let n of graph[v]) {
			//     If neighbor has not been visited
			if (!seen.has(n)) {
				//       Add neighbor to visited
				seen.add(n);
				//       Enqueue neighbor
				queue.push(n);
			}
		}
	}
}

// const graph = {
//   0: [1, 2],
//   1: [2],
//   2: [3],
//   3: [1, 2]
// }

// const graph2 = {
//   0: [1, 2, 3],
//   1: [0, 2],
//   2: [0, 4],
//   3: [0],
//   4: [2]
// }

// // graph from the diagram
// const graph3 = {
//   0: [1, 3, 6],
//   1: [0, 4, 5],
//   2: [5, 7],
//   3: [0, 5],
//   4: [1, 6],
//   5: [1, 2, 3],
//   6: [0, 4],
//   7: [2]
// }

// bfs(0, graph3);

function dfs(vertex, graph, visited = new Set()) {
	console.log(vertex);
	visited.add(vertex);

	for (const neighbor of graph[vertex]) {
		if (!visited.has(neighbor)) {
			dfs(neighbor, graph, visited);
		}
	}

	return;
}

const graph = {
	0: [1, 2],
	1: [2],
	2: [3],
	3: [1, 2],
};

const graph2 = {
	0: [1, 2, 3],
	1: [0, 2],
	2: [0, 4],
	3: [0],
	4: [2],
};

// graph from the diagram
const graph3 = {
	0: [1, 3, 6],
	1: [4, 5],
	2: [5, 7],
	3: [0, 5],
	4: [1, 6],
	5: [1, 2, 3],
	6: [0, 4],
	7: [2],
};

dfs(0, graph3);
