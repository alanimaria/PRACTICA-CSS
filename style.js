const input = document.querySelector('#nombreInput');
const boton = document.querySelector('#saludarBtn');
const mensaje = document.querySelector('#mensaje');

boton.addEventListener('click', () => {

    const nombre = input.value.trim();

    if (nombre === "") {
        mensaje.textContent = "Por favor ingresa tu nombre";
        mensaje.classList.remove('exito');
    } else {
        mensaje.textContent = `Hola, ${nombre}. Gracias por suscribirte a mi blog`;
        mensaje.classList.add('exito');
    }

});