function bfs(startRow, startCol, matrix, target, visited = new Set()) {
	function isValid(row, col) {
		return (
			row >= 0 &&
			row < matrix.length &&
			col >= 0 &&
			col < matrix[0].length
		);
	}
	const queue = [[startRow, startCol]];
	while (queue.length > 0) {
		const [currRow, currCol] = queue.shift();
		let key = `${currRow},${currCol}`;
		if (!visited.has(key)) {
			if (matrix[currRow][currCol] === target) return [currRow, currCol];
			visited.add(key);
			isValid(currRow + 1, currCol) && queue.push([currRow + 1, currCol]);
			isValid(currRow - 1, currCol) && queue.push([currRow - 1, currCol]);
			isValid(currRow, currCol + 1) && queue.push([currRow, currCol + 1]);
			isValid(currRow, currCol - 1) && queue.push([currRow, currCol - 1]);
		}
	}
	return false;
}
// let curRow, curCol = currentNode

const arr = [
	[1, 2, 3],
	[4, 20, 6],
	[7, 8, 9],
];

const startRow = 0;
const startCol = 1;
const target = 8;

const res = bfs(startRow, startCol, arr, target);
console.log(res);
