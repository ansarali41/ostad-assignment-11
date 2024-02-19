function isPathExists(N, m) {
    // Helper function to check if the given cell is valid and can be visited
    function isSafe(x, y, visited) {
        return x >= 0 && x < N && y >= 0 && y < N && m[x][y] === 1 && !visited[x][y];
    }

    // Helper function to solve the rat maze problem recursively
    function solveMazeUtil(x, y, visited, path) {
        // If the rat has reached the destination, return true
        if (x === N - 1 && y === N - 1) {
            return true;
        }

        // Check if the current cell is valid
        if (isSafe(x, y, visited)) {
            // Mark the current cell as visited
            visited[x][y] = true;

            // Move to the right
            if (solveMazeUtil(x, y + 1, visited, path + 'R')) {
                return true;
            }
            // Move to the down
            if (solveMazeUtil(x + 1, y, visited, path + 'D')) {
                return true;
            }
            // Move to the left
            if (solveMazeUtil(x, y - 1, visited, path + 'L')) {
                return true;
            }
            // Move to the up
            if (solveMazeUtil(x - 1, y, visited, path + 'U')) {
                return true;
            }

            // If no direction leads to the destination, backtrack
            visited[x][y] = false;
        }

        // If none of the above conditions are met, return false
        return false;
    }

    // Initialize visited array
    const visited = Array.from({ length: N }, () => Array(N).fill(false));

    // Start solving the maze from the top-left cell
    return solveMazeUtil(0, 0, visited, '');
}

// Test cases
console.log(
    isPathExists(4, [
        [1, 0, 0, 0],
        [1, 1, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 1],
    ]),
); // true
console.log(
    isPathExists(2, [
        [1, 0],
        [1, 0],
    ]),
); // false

// ** The time complexity: O(4^N)
// ** The space complexity: O(N^2)
