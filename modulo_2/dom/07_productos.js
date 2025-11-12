const productos = [
    { nombre: "Teclado", descripcion: "Mecánico", precio: 45, existencia: 12, ubicacion: "Estante A" },
    { nombre: "Mouse", descripcion: "Inalámbrico", precio: 20, existencia: 25, ubicacion: "Estante B" },
    { nombre: "Monitor", descripcion: "24 pulgadas", precio: 150, existencia: 7, ubicacion: "Estante C" },
    { nombre: "Laptop", descripcion: "Core i5", precio: 700, existencia: 5, ubicacion: "Estante D" },
    { nombre: "Cable HDMI", descripcion: "2m", precio: 10, existencia: 30, ubicacion: "Estante F" },
    { nombre: "SSD 1TB", descripcion: "Disco sólido", precio: 100, existencia: 8, ubicacion: "Estante G" },
    { nombre: "Router", descripcion: "WiFi 6", precio: 65, existencia: 15, ubicacion: "Estante H" },
    { nombre: "Impresora", descripcion: "Multifunción", precio: 200, existencia: 3, ubicacion: "Estante I" },
    { nombre: "Webcam", descripcion: "1080p", precio: 35, existencia: 18, ubicacion: "Estante J" },
    { nombre: "Auriculares", descripcion: "Bluetooth", precio: 80, existencia: 14, ubicacion: "Estante K" }
  ];
  
  const tabla = document.getElementById('cuerpoTabla');
  productos.forEach(p => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${p.nombre}</td>
      <td>${p.descripcion}</td>
      <td>$${p.precio.toFixed(2)}</td>
      <td>${p.existencia}</td>
      <td>${p.ubicacion}</td>
    `;
    tabla.appendChild(fila);
  });
  