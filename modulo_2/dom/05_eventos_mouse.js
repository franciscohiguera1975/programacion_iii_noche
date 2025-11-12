
const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => {
    caja.style.background = 'yellow';
});
caja.addEventListener('mouseout', () => {
    caja.style.background = 'lightgray';
});
caja.addEventListener('click', () => {
    alert("!click!");
});