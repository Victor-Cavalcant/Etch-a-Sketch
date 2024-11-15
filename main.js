const gridContainer = document.querySelector('.container');
const inputEl = document.getElementById('input');
const colorEl = document.getElementById('color');
const size = inputEl.value;
const btn = document.querySelector('button');


btn.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    createGrid(inputEl.value);
});

function createGrid(size) {

    if (size > 100) {
        size = 100
        inputEl.value = 100
    } if (size < 0) {
        size = 0
        inputEl.value = 0
    }

    const cellSize = 100 / size;
    const cellHeight = 500 / size;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = colorEl.value;
            
        })


        cell.style.flex = `0 0 calc(${cellSize}%)`;
        cell.style.height = `${cellHeight}px`;
        cell.style.boxSizing = 'border-box';
        cell.style.border = 'none';
        cell.style.margin = '0px';


        gridContainer.appendChild(cell);
    }
}