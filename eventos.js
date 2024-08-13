document.getElementById('contenedor-boton').addEventListener('click', function () {
  alert('Hola! Soy el div');
});

function handleButtonClick(event) {
  event.stopPropagation();
  alert('Hola!');
}