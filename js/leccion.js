// js/leccion.js
// Muestra contenido educativo y ejercicios según la lección seleccionada

import { obtenerAnatomiaWikipedia } from '../js/api.js';

// Obtener la materia desde la URL (?materia=Anatomía)
function getMateriaFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('materia') || 'Anatomía';
}

const materia = getMateriaFromURL();
const contenidoLeccion = document.getElementById('contenido-leccion');
// const quizContainer = document.getElementById('quiz-container'); // Eliminado porque no se usa

// async function mostrarContenidoEducativo() { ... } // Eliminado porque no se usa

// Ejercicios para el quiz
const ejerciciosQuiz = [
{ tipo: 'completar', pregunta: "¿Qué órgano absorbe la mayoría de los nutrientes?", respuesta: "intestino delgado", wiki: "https://es.wikipedia.org/wiki/Intestino_delgado" },
{ tipo: 'completar', pregunta: "¿Qué parte del sistema digestivo absorbe agua y forma las heces?", respuesta: "intestino grueso", wiki: "https://es.wikipedia.org/wiki/Intestino_grueso" },
{ tipo: 'completar', pregunta: "¿Qué enzima digiere las proteínas en el estómago?", respuesta: "pepsina", wiki: "https://es.wikipedia.org/wiki/Pepsina" },
{ tipo: 'completar', pregunta: "¿Qué órgano secreta enzimas digestivas y regula el azúcar en sangre?", respuesta: "páncreas", wiki: "https://es.wikipedia.org/wiki/Páncreas" },
{ tipo: 'completar', pregunta: "¿Qué parte del estómago se conecta con el intestino delgado?", respuesta: "píloro", wiki: "https://es.wikipedia.org/wiki/Píloro" },
{ tipo: 'completar', pregunta: "¿Qué tipo de músculo permite el movimiento del bolo alimenticio?", respuesta: "músculo liso", wiki: "https://es.wikipedia.org/wiki/Músculo_liso" },
{ tipo: 'completar', pregunta: "¿Qué órgano almacena la orina?", respuesta: "vejiga", wiki: "https://es.wikipedia.org/wiki/Vejiga" },
{ tipo: 'completar', pregunta: "¿Qué órgano produce los óvulos?", respuesta: "ovarios", wiki: "https://es.wikipedia.org/wiki/Ovario" },
{ tipo: 'completar', pregunta: "¿Qué estructura transporta la orina desde los riñones a la vejiga?", respuesta: "uréteres", wiki: "https://es.wikipedia.org/wiki/Uréter" },
{ tipo: 'completar', pregunta: "¿Qué estructura permite la salida de la orina al exterior?", respuesta: "uretra", wiki: "https://es.wikipedia.org/wiki/Uretra" },
{ tipo: 'completar', pregunta: "¿Dónde ocurre la fecundación normalmente?", respuesta: "trompas de falopio", wiki: "https://es.wikipedia.org/wiki/Trompa_de_Falopio" },
{ tipo: 'completar', pregunta: "¿Qué estructura conecta el útero con el exterior?", respuesta: "vagina", wiki: "https://es.wikipedia.org/wiki/Vagina" },
{ tipo: 'completar', pregunta: "¿Qué órgano filtra la sangre para formar orina?", respuesta: "riñón", wiki: "https://es.wikipedia.org/wiki/Riñón" },
{ tipo: 'completar', pregunta: "¿Qué hormona regula el ciclo menstrual?", respuesta: "progesterona", wiki: "https://es.wikipedia.org/wiki/Progesterona" },
{ tipo: 'completar', pregunta: "¿Qué parte del sistema nervioso regula funciones involuntarias como la respiración y el ritmo cardíaco?", respuesta: "tronco encefálico", wiki: "https://es.wikipedia.org/wiki/Tronco_encefálico" },
{ tipo: 'completar', pregunta: "¿Qué parte del ojo regula la cantidad de luz que entra?", respuesta: "iris", wiki: "https://es.wikipedia.org/wiki/Iris_(anatomía)" },
{ tipo: 'completar', pregunta: "¿Qué estructura del oído convierte las vibraciones en impulsos nerviosos?", respuesta: "cóclea", wiki: "https://es.wikipedia.org/wiki/Cóclea" },
{ tipo: 'completar', pregunta: "¿Qué parte de la lengua detecta sabores dulces?", respuesta: "papilas gustativas en la punta", wiki: "https://es.wikipedia.org/wiki/Lengua_(anatomía)" },
{ tipo: 'completar', pregunta: "¿Qué órgano es responsable del sentido del equilibrio?", respuesta: "oído interno", wiki: "https://es.wikipedia.org/wiki/Oído_interno" },
{ tipo: 'completar', pregunta: "¿Qué parte del ojo enfoca la luz sobre la retina?", respuesta: "cristalino", wiki: "https://es.wikipedia.org/wiki/Cristalino" },
{ tipo: 'completar', pregunta: "¿Qué nervio transmite la información visual al cerebro?", respuesta: "nervio óptico", wiki: "https://es.wikipedia.org/wiki/Nervio_óptico" },
{ tipo: 'completar', pregunta: "¿Qué parte del oído capta las ondas sonoras?", respuesta: "pabellón auricular", wiki: "https://es.wikipedia.org/wiki/Tímpano" },
{ tipo: 'completar', pregunta: "¿Qué estructura protege el globo ocular?", respuesta: "córnea", wiki: "https://es.wikipedia.org/wiki/Córnea" },
{ tipo: 'completar', pregunta: "¿Cuántos pares de nervios craneales tiene el cuerpo humano?", respuesta: "12 pares", wiki: "https://es.wikipedia.org/wiki/Nervio_craneal" },
{ tipo: 'completar', pregunta: "¿Qué neurotransmisor está relacionado con el placer y la recompensa?", respuesta: "dopamina", wiki: "https://es.wikipedia.org/wiki/Dopamina" },
{ tipo: 'seleccion', pregunta: "¿Qué parte del cerebro controla el equilibrio?", opciones: ["Corteza prefrontal", "Cerebelo", "Tronco encefálico", "Hipotálamo"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Cerebelo" },
{ tipo: 'seleccion', pregunta: "¿Qué órgano produce los espermatozoides?", opciones: ["Ovarios", "Testículos", "Vesícula biliar", "Riñón"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Testículo" },
{ tipo: 'seleccion', pregunta: "¿Qué parte del ojo regula la cantidad de luz que entra?", opciones: ["Retina", "Iris", "Córnea", "Cristalino"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Iris_(anatomía)" },
{ tipo: 'seleccion', pregunta: "¿Qué estructura del oído convierte las vibraciones en impulsos nerviosos?", opciones: ["Cóclea", "Martillo", "Yunque", "Estribo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Cóclea" },
{ tipo: 'seleccion', pregunta: "¿Qué parte de la lengua detecta sabores dulces?", opciones: ["Papilas gustativas en la punta", "Papilas gustativas en la base", "Papilas gustativas en los lados", "Papilas gustativas en el centro"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Lengua_(anatomía)" },
{ tipo: 'seleccion', pregunta: "¿Qué órgano es responsable del sentido del equilibrio?", opciones: ["Oído interno", "Oído externo", "Oído medio", "Cerebelo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Oído_interno" },
{ tipo: 'seleccion', pregunta: "¿Qué parte del ojo enfoca la luz sobre la retina?", opciones: ["Cristalino", "Córnea", "Iris", "Retina"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Cristalino" },
{ tipo: 'seleccion', pregunta: "¿Qué nervio transmite la información visual al cerebro?", opciones: ["Nervio óptico", "Nervio auditivo", "Nervio olfatorio", "Nervio facial"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Nervio_óptico" },
{ tipo: 'seleccion', pregunta: "¿Qué parte del oído capta las ondas sonoras?", opciones: ["Pabellón auricular", "Cóclea", "Tímpano", "Martillo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Tímpano" },
{ tipo: 'seleccion', pregunta: "¿Qué estructura protege el globo ocular?", opciones: ["Córnea", "Iris", "Retina", "Cristalino"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Córnea" },
{ tipo: 'seleccion', pregunta: "¿Cuántos pares de nervios craneales tiene el cuerpo humano?", opciones: ["10 pares", "12 pares", "14 pares", "8 pares"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Nervio_craneal" },
{ tipo: 'seleccion', pregunta: "¿Qué parte del cerebro está encargada del razonamiento y el pensamiento complejo?", opciones: ["Corteza prefrontal", "Cerebelo", "Tronco encefálico", "Hipotálamo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Corteza_prefrontal" },
{ tipo: 'seleccion', pregunta: "¿Qué neurotransmisor está relacionado con el placer y la recompensa?", opciones: ["Serotonina", "Dopamina", "Adrenalina", "Noradrenalina"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Dopamina" },
{ tipo: 'seleccion', pregunta: "¿Qué estructura protege al encéfalo?", opciones: ["Cráneo", "Columna", "Costillas", "Mandíbula"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Cráneo" },
{ tipo: 'seleccion', pregunta: "¿Qué parte del sistema nervioso se encarga de la respuesta de lucha o huida?", opciones: ["Sistema nervioso simpático", "Sistema nervioso parasimpático", "Sistema nervioso central", "Sistema nervioso periférico"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Sistema_nervioso_simpatético" },
{ tipo: 'seleccion', pregunta: "¿Qué líquido protege al cerebro y la médula espinal?", opciones: ["Líquido cefalorraquídeo", "Sangre", "Líquido sinovial", "Linfático"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Líquido_cefalorraquídeo" },
{ tipo: 'seleccion', pregunta: "¿Cuál es el órgano principal del sistema circulatorio?", opciones: ["Corazón", "Pulmón", "Riñón", "Hígado"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Corazón" },
{ tipo: 'seleccion', pregunta: "¿Qué vasos sanguíneos llevan sangre del corazón al resto del cuerpo?", opciones: ["Arterias", "Venas", "Capilares", "Linfa"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Arteria" },
{ tipo: 'seleccion', pregunta: "¿Qué parte del sistema nervioso regula funciones involuntarias como la respiración y el ritmo cardíaco?", opciones: ["Tronco encefálico", "Corteza prefrontal", "Cerebelo", "Hipotálamo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Tronco_encefálico" },
{ tipo: 'seleccion', pregunta: "¿Qué órgano almacena la orina?", opciones: ["Vejiga", "Riñón", "Hígado", "Pulmón"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Vejiga" },
{ tipo: 'seleccion', pregunta: "¿Qué órgano produce los óvulos?", opciones: ["Ovarios", "Testículos", "Vesícula biliar", "Riñón"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Ovario" },
{ tipo: 'seleccion', pregunta: "¿Qué estructura transporta la orina desde los riñones a la vejiga?", opciones: ["Uréteres", "Uretra", "Vejiga", "Intestino"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Uréter" },
{ tipo: 'seleccion', pregunta: "¿Qué estructura permite la salida de la orina al exterior?", opciones: ["Uretra", "Uréteres", "Vejiga", "Intestino"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Uretra" },
{ tipo: 'seleccion', pregunta: "¿Dónde ocurre la fecundación normalmente?", opciones: ["Trompas de falopio", "Útero", "Vagina", "Ovarios"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Trompa_de_Falopio" },
{ tipo: 'arrastrar', pregunta: "Arrastra la función al órgano correspondiente:", parejas: [
    { concepto: "Filtra la sangre", opcion: "Riñón" },
    { concepto: "Produce bilis", opcion: "Hígado" },
    { concepto: "Permite la respiración", opcion: "Pulmón" }
], wiki: "https://es.wikipedia.org/wiki/Órgano" },
{ tipo: 'arrastrar', pregunta: "Arrastra el hueso al lugar correcto:", parejas: [
    { concepto: "Fémur", opcion: "Pierna" },
    { concepto: "Radio", opcion: "Brazo" },
    { concepto: "Cráneo", opcion: "Cabeza" }
], wiki: "https://es.wikipedia.org/wiki/Hueso" },
{ tipo: 'arrastrar', pregunta: "Arrastra la hormona a su función:", parejas: [
    { concepto: "Insulina", opcion: "Regula glucosa" },
    { concepto: "Adrenalina", opcion: "Respuesta de estrés" },
    { concepto: "Progesterona", opcion: "Ciclo menstrual" }
], wiki: "https://es.wikipedia.org/wiki/Hormona" },
{ tipo: 'arrastrar', pregunta: "Arrastra el tejido a su función:", parejas: [
    { concepto: "Muscular", opcion: "Movimiento" },
    { concepto: "Epitelial", opcion: "Protección" },
    { concepto: "Conectivo", opcion: "Soporte" }
], wiki: "https://es.wikipedia.org/wiki/Tejido_(biología)" },
{ tipo: 'arrastrar', pregunta: "Arrastra el sistema a su función:", parejas: [
    { concepto: "Digestivo", opcion: "Absorción de nutrientes" },
    { concepto: "Respiratorio", opcion: "Intercambio de gases" },
    { concepto: "Circulatorio", opcion: "Transporte de sangre" }
], wiki: "https://es.wikipedia.org/wiki/Sistema_(anatom%C3%ADa)" },
{ tipo: 'arrastrar', pregunta: "Arrastra el órgano a su sistema:", parejas: [
    { concepto: "Corazón", opcion: "Circulatorio" },
    { concepto: "Pulmón", opcion: "Respiratorio" },
    { concepto: "Estómago", opcion: "Digestivo" }
], wiki: "https://es.wikipedia.org/wiki/Órgano" },
{ tipo: 'arrastrar', pregunta: "Arrastra la célula a su función:", parejas: [
    { concepto: "Glóbulo rojo", opcion: "Transporte de oxígeno" },
    { concepto: "Neurona", opcion: "Transmisión de impulsos" },
    { concepto: "Célula muscular", opcion: "Contracción" }
], wiki: "https://es.wikipedia.org/wiki/Cuerpo_humano" },
{ tipo: 'arrastrar', pregunta: "Arrastra el líquido a su función:", parejas: [
    { concepto: "Sangre", opcion: "Transporte de nutrientes" },
    { concepto: "Linfático", opcion: "Defensa" },
    { concepto: "Cefalorraquídeo", opcion: "Protección neural" }
], wiki: "https://es.wikipedia.org/wiki/Líquido" },
{ tipo: 'arrastrar', pregunta: "Arrastra el músculo a su tipo:", parejas: [
    { concepto: "Cardíaco", opcion: "Involuntario" },
    { concepto: "Esquelético", opcion: "Voluntario" },
    { concepto: "Liso", opcion: "Involuntario" }
], wiki: "https://es.wikipedia.org/wiki/Músculo" },
{ tipo: 'arrastrar', pregunta: "Arrastra el órgano a su función principal:", parejas: [
    { concepto: "Riñón", opcion: "Filtración" },
    { concepto: "Hígado", opcion: "Metabolismo" },
    { concepto: "Pulmón", opcion: "Respiración" }
], wiki: "https://es.wikipedia.org/wiki/Órgano" },
{ tipo: 'vf', pregunta: "La insulina se produce en el hígado.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Insulina" },
{ tipo: 'vf', pregunta: "El corazón tiene cuatro cavidades.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Corazón" },
{ tipo: 'vf', pregunta: "El píloro conecta el estómago con el intestino delgado.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Píloro" },
{ tipo: 'vf', pregunta: "El músculo liso es voluntario.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Músculo_liso" },
{ tipo: 'vf', pregunta: "La córnea protege el globo ocular.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Córnea" },
{ tipo: 'vf', pregunta: "El riñón produce bilis.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Riñón" },
{ tipo: 'vf', pregunta: "El hígado es el órgano más grande del cuerpo humano.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Hígado" },
{ tipo: 'vf', pregunta: "Los glóbulos rojos se producen en la médula ósea.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Médula_ósea" },
{ tipo: 'vf', pregunta: "El intestino delgado es más corto que el intestino grueso.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Intestino_delgado" },
{ tipo: 'vf', pregunta: "La tráquea se encuentra delante del esófago.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Tráquea" },
{ tipo: 'vf', pregunta: "Los riñones tienen forma de frijol.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Riñón" },
{ tipo: 'vf', pregunta: "El páncreas es parte del sistema endocrino y digestivo.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Páncreas" },
{ tipo: 'vf', pregunta: "La vesícula biliar almacena bilis.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Vesícula_biliar" },
{ tipo: 'vf', pregunta: "El bazo es responsable de producir insulina.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Bazo" },
{ tipo: 'vf', pregunta: "Las arterias llevan sangre oxigenada, y las venas llevan sangre desoxigenada.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sangre" },
{ tipo: 'vf', pregunta: "El corazón humano tiene tres aurículas.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Corazón_humano" },
{ tipo: 'vf', pregunta: "La piel es el órgano más grande del sistema inmunológico.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Piel" },
{ tipo: 'vf', pregunta: "Los músculos estriados son involuntarios.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Músculo_estriado" },
{ tipo: 'vf', pregunta: "El líquido sinovial lubrica las articulaciones.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Líquido_sinovial" },
{ tipo: 'vf', pregunta: "La médula espinal está protegida por la columna vertebral.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Médula_espinal" },
{ tipo: 'vf', pregunta: "El sistema linfático ayuda a mantener el equilibrio de líquidos en el cuerpo.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_linfático" },
{ tipo: 'vf', pregunta: "La hormona adrenalina se produce en el páncreas.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Adrenalina" },
{ tipo: 'vf', pregunta: "El aparato respiratorio humano tiene una capacidad pulmonar promedio de 6 litros.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_respiratorio_humano" },
{ tipo: 'vf', pregunta: "La función principal de los glóbulos blancos es transportar oxígeno.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Glóbulo_blanco" },
{ tipo: 'vf', pregunta: "El hígado desintoxica sustancias nocivas en el cuerpo.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Hígado" },
{ tipo: 'vf', pregunta: "La principal función de los riñones es la producción de hormonas.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Riñón" },
{ tipo: 'vf', pregunta: "El sistema esquelético humano está compuesto por 206 huesos en la edad adulta.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_esquelético_humano" },
{ tipo: 'vf', pregunta: "La principal función de los músculos es generar movimiento.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Músculo" },
{ tipo: 'vf', pregunta: "El corazón tiene válvulas que aseguran el flujo sanguíneo en una sola dirección.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Corazón" },
{ tipo: 'vf', pregunta: "La sangre oxigenada es de color rojo brillante, y la sangre desoxigenada es de color rojo oscuro.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sangre" },
{ tipo: 'vf', pregunta: "El cartílago es un tejido más duro y denso que el hueso.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Cartílago" },
{ tipo: 'vf', pregunta: "Los nervios son responsables de transmitir impulsos eléctricos en el cuerpo.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Nervio" },
{ tipo: 'vf', pregunta: "La lengua es el músculo más fuerte del cuerpo humano en relación a su tamaño.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Lengua_(anatomía)" },
{ tipo: 'vf', pregunta: "El sentido del olfato se debe a la acción de las papilas gustativas.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Olfato" },
{ tipo: 'vf', pregunta: "La principal función de los pulmones es la deoxigenar la sangre.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Pulmón" },
{ tipo: 'vf', pregunta: "El líquido cefalorraquídeo rodea y protege el cerebro y la médula espinal.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Líquido_cefalorraquídeo" },
{ tipo: 'vf', pregunta: "La principal función del bazo es filtrar la sangre.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Bazo" },
{ tipo: 'vf', pregunta: "Los huesos del cráneo son móviles para permitir el crecimiento del cerebro.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Suturas_del_cr%C3%A1neo" },
{ tipo: 'vf', pregunta: "El sistema nervioso central está compuesto por el cerebro y la médula espinal.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_nervioso_central" },
{ tipo: 'vf', pregunta: "La principal función de la tiroides es regular el metabolismo.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Tiroides" }
];
// --- Feedback y validación de respuestas ---
function mostrarFeedback(respuestaCorrecta, respuestaUsuario, wikiUrl, tipoPregunta, ejercicio) {
    let esCorrecta = false;
    if (tipoPregunta === 'completar' || tipoPregunta === 'vf') {
        esCorrecta = String(respuestaUsuario).trim().toLowerCase() === String(respuestaCorrecta).trim().toLowerCase();
    } else if (tipoPregunta === 'seleccion') {
        esCorrecta = respuestaUsuario === respuestaCorrecta;
    } else if (tipoPregunta === 'arrastrar') {
        // Se espera que respuestaUsuario y respuestaCorrecta sean arreglos de pares
        esCorrecta = JSON.stringify(respuestaUsuario) === JSON.stringify(respuestaCorrecta);
    }
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'feedback-quiz';
    if (esCorrecta) {
        feedbackDiv.innerHTML = '<span style="color:green;font-weight:bold">¡Correcto!</span>';
    } else {
        let respuestaMostrada = '';
        if (tipoPregunta === 'seleccion' && Array.isArray(respuestaCorrecta)) {
            respuestaMostrada = ejercicio.opciones[respuestaCorrecta];
        } else if (tipoPregunta === 'seleccion' && typeof respuestaCorrecta === 'number' && ejercicio && ejercicio.opciones) {
            respuestaMostrada = ejercicio.opciones[respuestaCorrecta];
        } else if (tipoPregunta === 'vf') {
            respuestaMostrada = respuestaCorrecta ? 'Verdadero' : 'Falso';
        } else if (tipoPregunta === 'arrastrar') {
            // Mostrar los pares correctos de forma legible
            const paresCorrectos = Array.isArray(respuestaCorrecta) ? respuestaCorrecta : (ejercicio && Array.isArray(ejercicio.respuesta) ? ejercicio.respuesta : []);
            respuestaMostrada = '<ul style="margin:8px 0">';
            paresCorrectos.forEach(par => {
                respuestaMostrada += `<li><strong>${par.concepto}</strong> → <span style='color:blue'>${par.opcion}</span></li>`;
            });
            respuestaMostrada += '</ul>';
        } else {
            respuestaMostrada = respuestaCorrecta;
        }
        feedbackDiv.innerHTML = `<span style="color:red;font-weight:bold">Incorrecto, la respuesta correcta es:</span> ${respuestaMostrada}` +
            '<br><button onclick="window.open(\'' + wikiUrl + '\', \'_blank\')" style="margin-top:8px">Estudiar en Wikipedia</button>';
    }
    return feedbackDiv;
}

// --- Ejemplo de integración en el flujo del quiz ---



let preguntaActual = 0;
let puntaje = 0;
const LIMITE_PREGUNTAS = 10;
const quizRoot = document.getElementById('quiz-container') || document.body;

// Selección aleatoria de 10 preguntas únicas
function obtenerPreguntasAleatorias(arr, n) {
    const copia = [...arr];
    const seleccionadas = [];
    for (let i = 0; i < n && copia.length > 0; i++) {
        const idx = Math.floor(Math.random() * copia.length);
        seleccionadas.push(copia[idx]);
        copia.splice(idx, 1);
    }
    return seleccionadas;
}

let preguntasQuiz = [];
window.addEventListener('DOMContentLoaded', () => {
    preguntasQuiz = obtenerPreguntasAleatorias(ejerciciosQuiz, LIMITE_PREGUNTAS);
    mostrarPregunta();
});

function mostrarPregunta() {
    quizRoot.innerHTML = '';
    if (preguntaActual >= LIMITE_PREGUNTAS) {
        mostrarResultadoFinal();
        return;
    }
    const ejercicio = preguntasQuiz[preguntaActual];
    const preguntaDiv = document.createElement('div');
    preguntaDiv.className = 'pregunta-quiz';
    // Progreso
    const progreso = document.createElement('div');
    progreso.style.marginBottom = '8px';
    progreso.innerHTML = `<strong>Pregunta ${preguntaActual + 1}/${LIMITE_PREGUNTAS}</strong>`;
    preguntaDiv.appendChild(progreso);
    // Pregunta
    preguntaDiv.innerHTML += `<strong>${ejercicio.pregunta}</strong>`;
    let inputElem;
    if (ejercicio.tipo === 'completar') {
        inputElem = document.createElement('input');
        inputElem.type = 'text';
        inputElem.placeholder = 'Respuesta...';
    } else if (ejercicio.tipo === 'vf') {
        inputElem = document.createElement('select');
        inputElem.innerHTML = '<option value="true">Verdadero</option><option value="false">Falso</option>';
    } else if (ejercicio.tipo === 'seleccion') {
        inputElem = document.createElement('select');
        ejercicio.opciones.forEach((op, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = op;
            inputElem.appendChild(opt);
        });
    } else if (ejercicio.tipo === 'arrastrar') {
        // Interfaz drag & drop
        inputElem = document.createElement('div');
        inputElem.className = 'dragdrop-container';
        // Columnas
        const conceptos = ejercicio.parejas.map(p => p.concepto);
        const opciones = ejercicio.parejas.map(p => p.opcion);
        // Mezclar opciones
        const opcionesMezcladas = opciones.slice().sort(() => Math.random() - 0.5);
        // Lista de conceptos
        const listaConceptos = document.createElement('div');
        listaConceptos.className = 'dragdrop-list-conceptos';
        conceptos.forEach((concepto, idx) => {
            const item = document.createElement('div');
            item.className = 'dragdrop-item concepto';
            item.textContent = concepto;
            item.setAttribute('data-idx', idx);
            listaConceptos.appendChild(item);
        });
        // Lista de opciones (draggable)
        const listaOpciones = document.createElement('div');
        listaOpciones.className = 'dragdrop-list-opciones';
        opcionesMezcladas.forEach((opcion, idx) => {
            const item = document.createElement('div');
            item.className = 'dragdrop-item opcion';
            item.textContent = opcion;
            item.setAttribute('draggable', 'true');
            item.setAttribute('data-idx', idx);
            // Drag events
            item.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', opcion);
                e.dataTransfer.setData('opcion-idx', idx);
            });
            listaOpciones.appendChild(item);
        });
        // Drop zones para cada concepto
        const zonasDrop = [];
        conceptos.forEach((concepto, idx) => {
            const zona = document.createElement('div');
            zona.className = 'dragdrop-dropzone';
            zona.textContent = 'Arrastra aquí';
            zona.setAttribute('data-concepto-idx', idx);
            zona.addEventListener('dragover', e => {
                e.preventDefault();
                zona.style.background = '#e0e0ff';
            });
            zona.addEventListener('dragleave', e => {
                zona.style.background = '';
            });
            zona.addEventListener('drop', e => {
                e.preventDefault();
                zona.style.background = '';
                const opcion = e.dataTransfer.getData('text/plain');
                zona.textContent = opcion;
                zona.setAttribute('data-opcion', opcion);
            });
            zonasDrop.push(zona);
        });
        // Render columnas
        const tabla = document.createElement('table');
        tabla.className = 'dragdrop-table';
        conceptos.forEach((concepto, idx) => {
            const fila = document.createElement('tr');
            const celdaConcepto = document.createElement('td');
            celdaConcepto.textContent = concepto;
            const celdaDrop = document.createElement('td');
            celdaDrop.appendChild(zonasDrop[idx]);
            fila.appendChild(celdaConcepto);
            fila.appendChild(celdaDrop);
            tabla.appendChild(fila);
        });
        // Opciones abajo
        const opcionesTitulo = document.createElement('div');
        opcionesTitulo.textContent = 'Opciones:';
        inputElem.appendChild(tabla);
        inputElem.appendChild(opcionesTitulo);
        inputElem.appendChild(listaOpciones);
    }
    preguntaDiv.appendChild(inputElem);
    // Botón responder
    const btn = document.createElement('button');
    btn.textContent = 'Responder';
    btn.onclick = function() {
        let respuestaUsuario;
        if (ejercicio.tipo === 'completar') {
            respuestaUsuario = inputElem.value;
        } else if (ejercicio.tipo === 'vf') {
            respuestaUsuario = inputElem.value === 'true';
        } else if (ejercicio.tipo === 'seleccion') {
            respuestaUsuario = parseInt(inputElem.value);
        } else if (ejercicio.tipo === 'arrastrar') {
            // Leer las parejas seleccionadas por el usuario
            respuestaUsuario = [];
            const zonasDrop = inputElem.querySelectorAll('.dragdrop-dropzone');
            let incompleto = false;
            zonasDrop.forEach((zona, idx) => {
                const concepto = ejercicio.parejas[idx].concepto;
                const opcion = zona.getAttribute('data-opcion');
                if (!opcion) incompleto = true;
                respuestaUsuario.push({ concepto, opcion: opcion || '' });
            });
            if (incompleto) {
                const advertencia = document.createElement('div');
                advertencia.style.color = 'orange';
                advertencia.style.marginTop = '10px';
                advertencia.innerHTML = '<strong>Debes emparejar todas las opciones antes de responder.</strong>';
                preguntaDiv.appendChild(advertencia);
                return;
            }
        }
        // Validar y mostrar feedback
    const feedback = mostrarFeedback(ejercicio.respuesta, respuestaUsuario, ejercicio.wiki, ejercicio.tipo, ejercicio);
        preguntaDiv.appendChild(feedback);
        btn.disabled = true;
        // Sumar puntaje si es correcta
        let esCorrecta;
        if (ejercicio.tipo === 'completar' || ejercicio.tipo === 'vf') {
            esCorrecta = String(respuestaUsuario).trim().toLowerCase() === String(ejercicio.respuesta).trim().toLowerCase();
        } else if (ejercicio.tipo === 'seleccion') {
            esCorrecta = respuestaUsuario === ejercicio.respuesta;
        } else if (ejercicio.tipo === 'arrastrar') {
            // Comparar por pares, ignorando el orden
            esCorrecta = respuestaUsuario.length === ejercicio.respuesta.length &&
                respuestaUsuario.every((parUsuario) => {
                    const parCorrecto = ejercicio.respuesta.find(
                        (par) => par.concepto === parUsuario.concepto && par.opcion === parUsuario.opcion
                    );
                    return !!parCorrecto;
                });
        }
        if (esCorrecta) puntaje++;
        // Botón siguiente pregunta
        const btnSiguiente = document.createElement('button');
        btnSiguiente.textContent = preguntaActual + 1 < LIMITE_PREGUNTAS ? 'Siguiente pregunta' : 'Ver resultado';
        btnSiguiente.style.marginLeft = '12px';
        btnSiguiente.onclick = function() {
            preguntaActual++;
            mostrarPregunta();
        };
        preguntaDiv.appendChild(btnSiguiente);
    };
    preguntaDiv.appendChild(btn);
    quizRoot.appendChild(preguntaDiv);
}

function mostrarResultadoFinal() {
    quizRoot.innerHTML = '';
    const resultadoDiv = document.createElement('div');
    resultadoDiv.className = 'resultado-final-quiz';
    resultadoDiv.innerHTML = `<h2>¡Quiz finalizado!</h2><p>Puntaje: <strong>${puntaje}/${LIMITE_PREGUNTAS}</strong></p>`;
    let mensaje = '';
    if (puntaje > 8) {
        mensaje = '<span style="color:green;font-weight:bold">¡Aprobado!</span>';
    } else if (puntaje >= 6) {
        mensaje = '<span style="color:orange;font-weight:bold">Aprobaste pero deberías estudiar más.</span>';
    } else {
        mensaje = '<span style="color:red;font-weight:bold">Desaprobado. Usa los botones de las lecciones para estudiar.</span>';
    }
    resultadoDiv.innerHTML += `<p>${mensaje}</p>`;
    quizRoot.appendChild(resultadoDiv);
}
// Iniciar el quiz automáticamente al cargar la página
window.addEventListener('DOMContentLoaded', mostrarPregunta);

// Ejemplo de uso:
// const feedback = mostrarFeedback(ejercicio.respuesta, respuestaUsuario, ejercicio.wiki, ejercicio.tipo);
// document.body.appendChild(feedback);