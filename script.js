const container = document.getElementById('container');

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseenter', () => {
      console.log('mouse enter');
      square.classList.add('hover-color');
    });
  }
}
