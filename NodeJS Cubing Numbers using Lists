const start = 1;
const end = 20;

function generateCubes() {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push([i, Math.pow(i, 3)]);
    }
    return result;
}

const cubes = generateCubes();

console.log("Number and its cube:");
console.log("[ " + cubes.map(([n, c]) => `[${n}, ${c}]`).join(", ") + " ]");
