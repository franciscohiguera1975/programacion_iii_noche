const titulo=document.getElementById('titulo');
console.log(titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.from(notas)
    .forEach(nota=>console.log(nota.textContent));
const items = document.getElementsByClassName('item');
Array.from(items)
        .forEach(item=>console.log(item.textContent));
const notaNames=document.getElementsByName('notaName');
Array.from(notaNames)
        .forEach(nota=>console.log(nota.textContent));