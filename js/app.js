// js/app.js
// Lógica básica para la interfaz y eventos
import { obtenerAnatomiaWikipedia } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const puntosSpan = document.getElementById('puntos');
    const progresoBar = document.querySelector('.progreso');
    let puntos = 0;

    loginBtn.addEventListener('click', () => {
        alert('Función de login próximamente');
    });
    registerBtn.addEventListener('click', () => {
        alert('Función de registro próximamente');
    });

    // Ejemplo de sumar puntos y actualizar barra de progreso
    function sumarPuntos(cantidad) {
        puntos += cantidad;
        puntosSpan.textContent = `Puntos: ${puntos}`;
        progresoBar.style.width = Math.min(puntos, 100) + '%';
    }

    // Ejercicios de ejemplo para las materias
    const ejercicios = {
        "Anatomía": [
            {
                pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
                opciones: ["Fémur", "Radio", "Tibia", "Húmero"],
                respuesta: 0
            },
            {
                pregunta: "¿Dónde se encuentra el corazón?",
                opciones: ["Tórax", "Abdomen", "Cabeza", "Pierna"],
                respuesta: 0
            }
        ],
        "Bioquímica": [
            {
                pregunta: "¿Cuál es la molécula energética principal de la célula?",
                opciones: ["ADN", "ATP", "ARN", "Glucosa"],
                respuesta: 1
            }
        ],
        // Puedes agregar más ejercicios para otras materias
    };

    function mostrarQuiz(materia) {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = '';
        if (!ejercicios[materia]) {
            quizContainer.innerHTML = '<p>No hay ejercicios disponibles para esta materia.</p>';
            return;
        }
        ejercicios[materia].forEach((ej, idx) => {
            const div = document.createElement('div');
            div.className = 'quiz-item';
            div.innerHTML = `<strong>${ej.pregunta}</strong><br>` +
                ej.opciones.map((op, i) => `<button class='opcion' data-correct='${i === ej.respuesta}'>${op}</button>`).join(' ');
            quizContainer.appendChild(div);
        });
        quizContainer.querySelectorAll('.opcion').forEach(btn => {
            btn.addEventListener('click', e => {
                if (btn.dataset.correct === 'true') {
                    btn.style.background = '#4caf50';
                    btn.style.color = '#fff';
                } else {
                    btn.style.background = '#f44336';
                    btn.style.color = '#fff';
                }
            });
        });
    }

    async function mostrarContenidoAnatomia() {
        const quizContainer = document.getElementById('quiz-container');
        quizContainer.innerHTML = '<p>Cargando contenido de anatomía...</p>';
        const contenido = await obtenerAnatomiaWikipedia();
        if (contenido.error) {
            quizContainer.innerHTML = `<p>Error: ${contenido.error}</p>`;
            return;
        }
        quizContainer.innerHTML = `
            <h4>${contenido.titulo}</h4>
            <p>${contenido.extracto}</p>
            ${contenido.imagen ? `<img src='${contenido.imagen}' alt='${contenido.titulo}' style='max-width:200px;'>` : ''}
            <p><a href='${contenido.url}' target='_blank'>Ver más en Wikipedia</a></p>
        `;
    }

    // Simulación: sumar puntos al hacer click en una lección
    document.querySelectorAll('#menu-lecciones li').forEach(li => {
        li.addEventListener('click', () => {
            window.location.href = `lecciones/leccion.html?materia=${encodeURIComponent(li.textContent)}`;
        });
    });
});
