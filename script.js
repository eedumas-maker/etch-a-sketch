const container = document.querySelector('#container');

let xAxis = [];
let yAxis = [];
let grid = [xAxis, yAxis];

for (x = 0; x < 16; x++) {
    for (y = 0; y < 16; y++){
        grid.push([x,y]);
    }
}

let gridLength = grid.length;
let temp;

for (i = 0; i < gridLength; i++) {
  temp = document.createElement('div');
  temp.className = 'box';
  temp.innerHTML = grid[i];
  container.appendChild(temp);
}

//i could create row DIVs, and then put a line of divs in each row div



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

