// Перемістіть усі нулі в кінець нового масиву. Порядок решти чисел збережіть. 
// moveZeros([0, 5, 0, 3, 8, 0, 1]); → [5, 3, 8, 1, 0, 0, 0]
const arr = [0, 5, 0, 3, 8, 0, 1];

function moveZeros(arr) {
    const numbers = arr.filter(num => num !== 0);
    const zeros = arr.filter(num => num === 0);

    return [...numbers, ...zeros];
}

console.log(moveZeros(arr));
