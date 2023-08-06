//copyright year

document.querySelector(".year-copy").innerText = new Date().getFullYear();

// JS para que al clickear en nav items se cierre hamburguesa

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
// let limenu = document.querySelectorAll(".nav-item");
// for (i=0; limenu.length-1; i++){

// limenu[i].addEventListener("click", function(){

//     document.querySelector("#navbarNav").classList.remove("show");

// })
// }


AOS.init(); 



        // let respuestaCorrecta;

        // function generarOperacion() {
        //     const num1 = Math.floor(Math.random() * 10) + 1; // Número entero positivo entre 1 y 10
        //     const num2 = Math.floor(Math.random() * 10) + 1; // Número entero positivo entre 1 y 10
        //     const operaciones = ['+', '*', '-'];
        //     const operacion = operaciones[Math.floor(Math.random() * operaciones.length)];

        //     let resultado;
        //     switch (operacion) {
        //         case '+':
        //             resultado = num1 + num2;
        //             break;
        //         case '*':
        //             resultado = num1 * num2;
        //             break;
        //         case '-':
        //             resultado = num1 - num2;
        //             break;
        //     }

        //     respuestaCorrecta = resultado;
        //     return `${num1} ${operacion} ${num2}`;
        // }

        // function reiniciarCaptcha() {
        //     const pregunta = generarOperacion();
        //     document.getElementById('recaptcha').innerHTML = pregunta;
        //     document.getElementById('respuesta').value = ''; // Clear the input field
        // }

        // function validarRespuesta() {
        //     const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
        //     const enviarButton = document.getElementById('enviar');
        //     enviarButton.disabled = isNaN(respuestaUsuario) || respuestaUsuario !== respuestaCorrecta;
        // }

        // function validarFormulario() {
        //     const respuestaUsuario = parseInt(document.getElementById('respuesta').value);
        //     if (isNaN(respuestaUsuario)) {
        //         document.getElementById('mensajeCaptcha').innerText = 'Por favor, ingresa una respuesta válida.';
        //         return false;
        //     }

        //     if (respuestaUsuario === respuestaCorrecta) {
        //         document.getElementById('mensajeCaptcha').innerText = '';
        //         alert('Enviado');
        //         return true; // Permite el envío del formulario
        //     } else {
        //         document.getElementById('mensajeCaptcha').innerText = 'Captcha incorrecto.';
        //         reiniciarCaptcha(); // Generate a new operation and clear the input field
        //         return false; // Evitar el envío del formulario
        //     }
        // }

        // window.onload = function() {
        //     reiniciarCaptcha();
        //     const respuestaInput = document.getElementById('respuesta');
        //     respuestaInput.addEventListener('input', validarRespuesta); // Add event listener for input changes in the answer
        // };

        
        window.onresize = function() {
        if (window.innerWidth <= 576) {
            document.getElementById('back-to-top-id').href = "#main";
        }
    }

    