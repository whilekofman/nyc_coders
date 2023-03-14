// implement the AdjacencyList class for undirected, unweighted graphs

class AdjacencyList {
    constructor() {
        this.list = {};
    }

    addVertex(v) {
        this.list[v] = []
    }

    addEdge(v1, v2) {
        this.list[v1].push(v2)
        this.list[v2].push(v1);

    }

    removeVertex(v) {
        const vEdges = this.list[v]
        console.log(vEdges)
        let that = v
        for(let i = 0; i < vEdges.length; i++){
            this.removeEdge(v, vEdges[i])
        }
        // vEdges.forEach(edge => {
        //     console.log(that, edge, "this edge")
        //     this.removeEdge(that, edge)
        // })
        // delete this.list[v]
    }

    removeEdge(v1, v2) {
        const edgesV1 = this.list[v1]
        const indexEdge1 = edgesV1.indexOf(v2)
        edgesV1.splice(indexEdge1, 1)
        const edgesV2 = this.list[v2]
        const indexEdge2 = edgesV2.indexOf(v1)
        edgesV2.splice(indexEdge2, 1)
    }
}

const myGraph = new AdjacencyList();

// Example calls
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");

myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");

console.log(myGraph.list);

// 0 --> 1 2
// 1 --> 3 2 0
// 2 --> 4 1 0
// 3 --> 1 4
// 4 --> 3 2 5
// 5 --> 4 6

// 6 --> 5

// myGraph.removeEdge("3", "1");
// console.log(myGraph.list);

// myGraph.removeEdge("3", "4");
// console.log(myGraph.list);

// myGraph.removeEdge("4", "2");
// console.log(myGraph.list);

// myGraph.removeEdge("4", "5");
// console.log(myGraph.list);

// myGraph.removeEdge("1", "2");
// console.log(myGraph.list);

// myGraph.removeEdge("1", "0");
// console.log(myGraph.list);

// myGraph.removeEdge("0", "2");
// console.log(myGraph.list);

// myGraph.removeEdge("6", "5");
// console.log(myGraph.list);

// myGraph.removeVertex("0");
// myGraph.removeVertex("1");
// myGraph.removeVertex("2");
// myGraph.removeVertex("3");
// myGraph.removeVertex("4");
// myGraph.removeVertex("5");
// myGraph.removeVertex("6");
myGraph.removeVertex('0')


console.log(myGraph.list);
