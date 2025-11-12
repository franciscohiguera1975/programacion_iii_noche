const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCasas');
let casas = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const direccion = document.getElementById('direccion').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();
  const precio = parseFloat(document.getElementById('precio').value.trim());

  if (direccion && descripcion && !isNaN(precio)) {
    const nuevaCasa = { id: Date.now(), direccion, descripcion, precio };
    casas.push(nuevaCasa);
    renderizarCasa(nuevaCasa);
    formulario.reset();
  }
});

function renderizarCasa({ id, direccion, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'casa';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${direccion}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.casa');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    casas = casas.filter(c => c.id !== id);
    tarjeta.remove();
  }
});
