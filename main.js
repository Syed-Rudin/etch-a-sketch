let grid = document.querySelector('.grid');
let clearBtn = document.querySelector('.clear');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.style.border = '1px solid black';
    grid.appendChild(div);
}

grid.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'red';
})

clearBtn.addEventListener('click', function() {
    let children = grid.children;
    for (let i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = 'white';
    }
})