let grid = document.querySelector('.grid');
let clearBtn = document.querySelector('.clear');

// Create 16x16 grid and 
// make it so that each grid turns
// red when hovered over
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    // div.style.border = '1px solid black';
    div.addEventListener('mouseover', function randomColour(e) {
        e.stopImmediatePropagation();
        div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        div.style.filter = 'brightness(100%)';
        div.removeEventListener('mouseover', randomColour);  
        div.addEventListener('mouseover', darker);
    })

    // Make colour 10% darker each time 
    // it's hovered over. Becomes black
    // after 10 hovers
    function darker() {
        let reg = /\d+/;
        let brightness = div.style.filter.match(reg);
        let newBrightness = brightness[0] - 10;
        div.style.filter = `brightness(${newBrightness}%)`;
    }

    grid.appendChild(div);
}

clearBtn.addEventListener('click', function() {
    let children = grid.children;
    let newGrid;
    for (let i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = 'white';
    }
    
    while (grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }

    // Check that number of grids is not over 100, 0 or below and is a number
    do {
        newGrid = Number(prompt('How many squares per side for new grid?'));
    } while ((newGrid > 100) || (newGrid <= 0) || !(newGrid));

    let numOfSides = Number(newGrid);

    // Create new grid
    grid.style.gridTemplate = `repeat(${numOfSides}, 1fr) / repeat(${numOfSides}, 1fr)`;

    for (let i = 0; i < (numOfSides**2); i++) {
        let div = document.createElement('div');
        // div.style.border = '1px solid black';
        div.addEventListener('mouseover', function randomColour(e) {
            e.stopImmediatePropagation();
            div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
            div.style.filter = 'brightness(100%)';
            div.removeEventListener('mouseover', randomColour);  
            div.addEventListener('mouseover', darker);
        })

    // Make colour 10% darker each time 
    // it's hovered over. Becomes black
    // after 10 hovers
    function darker() {
        let reg = /\d+/;
        let brightness = div.style.filter.match(reg);
        let newBrightness = brightness[0] - 10;
        div.style.filter = `brightness(${newBrightness}%)`;
    }

    grid.appendChild(div);
    }
})

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }