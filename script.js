const container = document.querySelector('#container');

let column = [];
let row = [];

for (i = 1; i <= 16; i++){
    row.push(i);
    column.push(i);
    console.log(row[i-1]);
    console.log(column[i-1]);
}

// LESSON LEARNED, each box no longer has a unique name, only 16,16 is called Temp
// Time to find a new way to make a grid

//let's make some rows
let columnLength = column.length;
let rowLength = row.length;
let temp;
let temp2;


for (i = 0; i < rowLength; i++){
    temp = document.createElement('div');
    temp.className = 'row';
    container.appendChild(temp);

    for (z = 0; z < columnLength; z++) {
        temp2 = document.createElement('div');
        temp2.className = 'box';
        temp2.innerHTML = row[i] + ',' + column[z];
        temp.appendChild(temp2);
        temp2.addEventListener('mouseover', () => temp2.classList.add('hover'));
    }

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

