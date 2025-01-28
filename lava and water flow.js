const directions = [
    { x: 0, y: -1 }, // up
    { x: 1, y: 0 }, // right
    { x: 0, y: 1 }, // down
    { x: -1, y: 0 } // left
];

function flowFluid(grid, x, y, fluidType) {
    if (grid[x][y] === 'empty') {  // Check if block is empty
        grid[x][y] = fluidType;  // Fill the block with fluid
    }

    // Try to flow fluid to neighboring blocks
    for (let dir of directions) {
        let newX = x + dir.x;
        let newY = y + dir.y;

        // Check bounds and if the block can receive fluid
        if (isValidPosition(newX, newY) && grid[newX][newY] === 'empty') {
            flowFluid(grid, newX, newY, fluidType);
        }
    }
}

function isValidPosition(x, y) {
    // Make sure we're within grid bounds
    return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length;
}
