const container = document.querySelector('#container');

let grid = [];

for (x = 1; x <= 16; x++) {
    for (y = 1; y <= 16; y++){
        grid.push([x,y]);
    }
}
console.log(grid.length);
// should be 16*16 = 256;

console.log("first box: " + grid[0]); //should read 1,1
console.log("last box: " + grid[255]); //should read 16, 16

// so the code below makes a nice long line of squares
let gridLength = grid.length;
let temp;

for (i = 0; i < gridLength; i++) {
  temp = document.createElement('div');
  temp.className = 'box';
  temp.innerHTML = grid[i];
  container.appendChild(temp);
}




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

