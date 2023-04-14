let tulisan = document.getElementById('tulisan');
let burjkhalifa = document.getElementById('burjkhalifa');
let start = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    tulisan.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
})