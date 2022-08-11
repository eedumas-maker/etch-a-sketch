const container = document.querySelector('#container');
const newGridButton = document.querySelector('#newGrid');
let gridSize = 16;

console.log(gridSize);
console.log('new grid button ' + newGridButton);

// creating the rows for each set of squares
let row = [];

for (let i = 1; i <= gridSize; i++){
    row.push(i);
}

// now to make an array of each box
let grid = new Array(gridSize); // Create initial array

// loop through array adding arrays for each
for (let i = 0; i < gridSize; i++){
    grid[i] = new Array(gridSize);
}

// now loop through each grid item and give it coordinates
for (let i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++){
        grid[i][j] = (i + 1) + ',' + (j + 1);
    }
}

// let's make that grid!
for (let i = 0; i < gridSize; i++){
    row[i] = document.createElement('div');
    row[i].className = 'row';
    container.appendChild(row[i]);
    // so each row has it's own name "row[i]"

    for (let j = 0; j < gridSize; j++) {
        grid[i][j] = document.createElement('div');
        grid[i][j].className = 'box';
        row[i].appendChild(grid[i][j]);

        console.log(grid[i][j]); // returns div
        console.log(typeof grid[i][j]); // returns object
        grid[i][j].addEventListener('mouseover', () => grid[i][j].classList.add('hover'));
    }
}

// gridSize = newGridButton.addEventListener('click', () => getGridSize());




// so this isn't how you do it
// function getGridSize(text){
//     text = prompt("Please enter your new grid size", 16)

//     text = Math.floor(parseInt(text));

//     newSize = Math.floor(600 / text); //use document size to determine # of squares

//     return newSize;
// }
// document.body.addEventListener("mouseover", function(e) {
//     if(e.target.className == "box") {
//         e.target.classList.add('hover');
//     }
//     else if (e.target.className == "box hover"){
//         e.target.classList.remove('hover');
//     }
// });

// grid[0][0].addEventListener('mouseover', () => grid[0][0].classList.add('hover'));



// now lets add an event listener by iterating through the entire grid array








// for down the road, spheres can be organized on a grid of triangles with the following equation.
/*
    r = radius
    s = space between circles (10% of r perhaps)
    w = width between center of circles on a row
    h = height between center of circles 

    Array them in a grid!
    w = 2r + s (easy, two half circles and the ideal space between)
    h = w * sqRt 3 / 2 (so says an online equilateral triangle formula)

*/

