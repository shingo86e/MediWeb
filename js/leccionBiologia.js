// Quiz de Biología - Copia base
// Personaliza este archivo para el quiz de Biología

// Quiz de Bioquímica 

// Sonido pop para siguiente pregunta
const audioPop = new Audio('../sonidos/pop.mp3');
const audioCorrecto = new Audio('../sonidos/correcto.mp3');
const audioIncorrecto = new Audio('../sonidos/incorrecto.mp3');


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
		const btnReintentar = document.createElement('button');
		btnReintentar.textContent = 'Reintentar';
		btnReintentar.style.marginTop = '16px';
		btnReintentar.onclick = function() {
			preguntaActual = 0;
			puntaje = 0;
			preguntasQuiz = obtenerPreguntasAleatorias(ejerciciosQuiz, LIMITE_PREGUNTAS);

				mostrarPregunta();
			}
		resultadoDiv.appendChild(btnReintentar);
		quizRoot.appendChild(resultadoDiv);
	};

function getMateriaFromURL() {
	const params = new URLSearchParams(window.location.search);
	return params.get('materia') || 'Bioquímica';

const contenidoLeccion = document.getElementById('contenido-leccion');
};

// Ejercicios para el quiz
// Reemplaza el siguiente array con tus preguntas de Bioquímica
const ejerciciosQuiz = [
		{ tipo: 'completar', pregunta: "¿Qué orgánulo celular se encarga de la fotosíntesis?", respuesta: "cloroplasto", wiki: "https://es.wikipedia.org/wiki/Cloroplasto" },
  { tipo: 'completar', pregunta: "¿Qué pigmento permite captar la luz solar en las plantas?", respuesta: "clorofila", wiki: "https://es.wikipedia.org/wiki/Clorofila" },
  { tipo: 'completar', pregunta: "¿Qué estructura regula el intercambio de gases en las hojas?", respuesta: "estoma", wiki: "https://es.wikipedia.org/wiki/Estoma" },
  { tipo: 'completar', pregunta: "¿Qué proceso transforma energía solar en energía química?", respuesta: "fotosíntesis", wiki: "https://es.wikipedia.org/wiki/Fotosíntesis" },
  { tipo: 'completar', pregunta: "¿Qué reino incluye organismos unicelulares sin núcleo definido?", respuesta: "monera", wiki: "https://es.wikipedia.org/wiki/Monera" },
  { tipo: 'completar', pregunta: "¿Qué estructura celular controla las funciones y contiene el ADN?", respuesta: "núcleo", wiki: "https://es.wikipedia.org/wiki/Núcleo_celular" },
  { tipo: 'completar', pregunta: "¿Qué sistema corporal transporta nutrientes y oxígeno?", respuesta: "circulatorio", wiki: "https://es.wikipedia.org/wiki/Sistema_circulatorio" },
  { tipo: 'completar', pregunta: "¿Qué célula vegetal tiene pared celular rígida?", respuesta: "célula vegetal", wiki: "https://es.wikipedia.org/wiki/Célula_vegetal" },
  { tipo: 'completar', pregunta: "¿Qué tipo de reproducción no implica gametos?", respuesta: "asexual", wiki: "https://es.wikipedia.org/wiki/Reproducción_asexual" },
  { tipo: 'completar', pregunta: "¿Qué estructura permite el movimiento en algunos protozoos?", respuesta: "flagelo", wiki: "https://es.wikipedia.org/wiki/Flagelo" },
  { tipo: 'completar', pregunta: "¿Qué tipo de célula tiene núcleo definido?", respuesta: "eucariota", wiki: "https://es.wikipedia.org/wiki/Célula_eucariota" },
  { tipo: 'completar', pregunta: "¿Qué parte de la célula produce proteínas?", respuesta: "ribosoma", wiki: "https://es.wikipedia.org/wiki/Ribosoma" },
  { tipo: 'completar', pregunta: "¿Qué sistema corporal se encarga de la defensa inmunológica?", respuesta: "inmunológico", wiki: "https://es.wikipedia.org/wiki/Sistema_inmunitario" },
  { tipo: 'completar', pregunta: "¿Qué estructura vegetal transporta agua desde las raíces?", respuesta: "xilema", wiki: "https://es.wikipedia.org/wiki/Xilema" },
  { tipo: 'completar', pregunta: "¿Qué tipo de célula forma los tejidos nerviosos?", respuesta: "neurona", wiki: "https://es.wikipedia.org/wiki/Neurona" },
  { tipo: 'completar', pregunta: "¿Qué proceso permite la división celular en células somáticas?", respuesta: "mitosis", wiki: "https://es.wikipedia.org/wiki/Mitosis" },
  { tipo: 'completar', pregunta: "¿Qué estructura vegetal realiza la fotosíntesis?", respuesta: "hoja", wiki: "https://es.wikipedia.org/wiki/Hoja" },
  { tipo: 'completar', pregunta: "¿Qué sistema corporal regula las hormonas?", respuesta: "endocrino", wiki: "https://es.wikipedia.org/wiki/Sistema_endocrino" },
  { tipo: 'completar', pregunta: "¿Qué tipo de célula no tiene núcleo?", respuesta: "procariota", wiki: "https://es.wikipedia.org/wiki/Célula_procariota" },
  { tipo: 'completar', pregunta: "¿Qué estructura vegetal transporta nutrientes orgánicos?", respuesta: "floema", wiki: "https://es.wikipedia.org/wiki/Floema" },
  { tipo: 'completar', pregunta: "¿Qué proceso celular produce energía en ausencia de oxígeno?", respuesta: "fermentación", wiki: "https://es.wikipedia.org/wiki/Fermentación" },
  { tipo: 'completar', pregunta: "¿Qué parte del sistema digestivo absorbe nutrientes?", respuesta: "intestino delgado", wiki: "https://es.wikipedia.org/wiki/Intestino_delgado" },
  { tipo: 'completar', pregunta: "¿Qué estructura permite el intercambio gaseoso en los pulmones?", respuesta: "alvéolo", wiki: "https://es.wikipedia.org/wiki/Alvéolo_pulmonar" },
  { tipo: 'completar', pregunta: "¿Qué tipo de célula realiza la fotosíntesis?", respuesta: "célula vegetal", wiki: "https://es.wikipedia.org/wiki/Célula_vegetal" },
  { tipo: 'completar', pregunta: "¿Qué proceso permite la formación de gametos?", respuesta: "meiosis", wiki: "https://es.wikipedia.org/wiki/Meiosis" },

{ tipo: 'seleccion', pregunta: "¿Qué orgánulo celular realiza la fotosíntesis?", opciones: ["Mitocondria", "Cloroplasto", "Ribosoma", "Lisosoma"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Cloroplasto" },
  { tipo: 'seleccion', pregunta: "¿Qué pigmento capta la luz solar en las plantas?", opciones: ["Melanina", "Caroteno", "Clorofila", "Hemoglobina"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Clorofila" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura regula el intercambio gaseoso en las hojas?", opciones: ["Estomas", "Xilema", "Floema", "Cutícula"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Estoma" },
  { tipo: 'seleccion', pregunta: "¿Qué proceso convierte luz solar en glucosa?", opciones: ["Respiración", "Fermentación", "Fotosíntesis", "Transpiración"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Fotosíntesis" },
  { tipo: 'seleccion', pregunta: "¿Qué reino incluye bacterias y cianobacterias?", opciones: ["Protista", "Fungi", "Monera", "Animalia"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Monera" },
  { tipo: 'seleccion', pregunta: "¿Qué orgánulo contiene el ADN en células eucariotas?", opciones: ["Citoplasma", "Núcleo", "Ribosoma", "Mitocondria"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Núcleo_celular" },
  { tipo: 'seleccion', pregunta: "¿Qué sistema corporal transporta sangre?", opciones: ["Digestivo", "Respiratorio", "Circulatorio", "Excretor"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Sistema_circulatorio" },
  { tipo: 'seleccion', pregunta: "¿Qué célula vegetal tiene pared celular rígida?", opciones: ["Célula animal", "Célula vegetal", "Neurona", "Glóbulo rojo"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Célula_vegetal" },
  { tipo: 'seleccion', pregunta: "¿Qué tipo de reproducción no implica gametos?", opciones: ["Sexual", "Asexual", "Meiótica", "Vegetativa"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Reproducción_asexual" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura permite el movimiento en protozoos?", opciones: ["Cilios", "Flagelos", "Pseudópodos", "Estomas"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Flagelo" },
  { tipo: 'seleccion', pregunta: "¿Qué tipo de célula tiene núcleo definido?", opciones: ["Procariota", "Eucariota", "Bacteriana", "Viral"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Célula_eucariota" },
  { tipo: 'seleccion', pregunta: "¿Qué orgánulo produce proteínas?", opciones: ["Ribosoma", "Lisosoma", "Mitocondria", "Cloroplasto"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Ribosoma" },
  { tipo: 'seleccion', pregunta: "¿Qué sistema corporal combate infecciones?", opciones: ["Digestivo", "Inmunológico", "Respiratorio", "Endocrino"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Sistema_inmunitario" },
  { tipo: 'seleccion', pregunta: "¿Qué tejido vegetal transporta agua?", opciones: ["Floema", "Xilema", "Estoma", "Cutícula"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Xilema" },
  { tipo: 'seleccion', pregunta: "¿Qué célula transmite impulsos eléctricos?", opciones: ["Fibroblasto", "Neurona", "Glóbulo blanco", "Célula muscular"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Neurona" },
  { tipo: 'seleccion', pregunta: "¿Qué proceso divide células somáticas?", opciones: ["Meiosis", "Mitosis", "Fisión binaria", "Gemación"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Mitosis" },
  { tipo: 'seleccion', pregunta: "¿Qué parte de la planta realiza fotosíntesis?", opciones: ["Raíz", "Tallo", "Hoja", "Flor"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Hoja" },
  { tipo: 'seleccion', pregunta: "¿Qué sistema regula las hormonas?", opciones: ["Nervioso", "Endocrino", "Digestivo", "Circulatorio"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Sistema_endocrino" },
  { tipo: 'seleccion', pregunta: "¿Qué célula no tiene núcleo?", opciones: ["Eucariota", "Procariota", "Vegetal", "Animal"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Célula_procariota" },
  { tipo: 'seleccion', pregunta: "¿Qué tejido vegetal transporta nutrientes?", opciones: ["Xilema", "Floema", "Estoma", "Corteza"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Floema" },
  { tipo: 'seleccion', pregunta: "¿Qué proceso celular ocurre sin oxígeno?", opciones: ["Respiración aeróbica", "Fotosíntesis", "Fermentación", "Mitosis"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Fermentación" },
  { tipo: 'seleccion', pregunta: "¿Qué parte del sistema digestivo absorbe nutrientes?", opciones: ["Estómago", "Intestino delgado", "Intestino grueso", "Esófago"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Intestino_delgado" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura pulmonar intercambia gases?", opciones: ["Bronquios", "Alvéolos", "Tráquea", "Diafragma"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Alvéolo_pulmonar" },
  { tipo: 'seleccion', pregunta: "¿Qué célula realiza fotosíntesis?", opciones: ["Célula animal", "Célula vegetal", "Neurona", "Glóbulo rojo"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Célula_vegetal" },
  { tipo: 'seleccion', pregunta: "¿Qué proceso forma gametos?", opciones: ["Mitosis", "Meiosis", "Fisión binaria", "Gemación"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Meiosis" },
{ tipo: 'vf', pregunta: "La fotosíntesis ocurre en los cloroplastos.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Fotosíntesis" },
  { tipo: 'vf', pregunta: "La clorofila es un pigmento que absorbe luz solar.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Clorofila" },
  { tipo: 'vf', pregunta: "Los estomas se encuentran en las raíces.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Estoma" },
  { tipo: 'vf', pregunta: "Las bacterias son organismos eucariotas.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Bacteria" },
  { tipo: 'vf', pregunta: "El núcleo celular contiene el ADN.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Núcleo_celular" },
  { tipo: 'vf', pregunta: "El sistema circulatorio transporta nutrientes y oxígeno.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_circulatorio" },
  { tipo: 'vf', pregunta: "Las células vegetales no tienen pared celular.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Célula_vegetal" },
  { tipo: 'vf', pregunta: "La reproducción asexual genera descendencia idéntica.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Reproducción_asexual" },
  { tipo: 'vf', pregunta: "Los flagelos permiten el movimiento celular.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Flagelo" },
  { tipo: 'vf', pregunta: "Las células procariotas tienen núcleo definido.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Célula_procariota" },
  { tipo: 'vf', pregunta: "Los ribosomas participan en la síntesis de proteínas.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Ribosoma" },
  { tipo: 'vf', pregunta: "El sistema inmunológico combate infecciones.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_inmunitario" },
  { tipo: 'vf', pregunta: "El xilema transporta nutrientes orgánicos.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Xilema" },
  { tipo: 'vf', pregunta: "Las neuronas son células del sistema nervioso.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Neurona" },
  { tipo: 'vf', pregunta: "La mitosis produce células sexuales.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Mitosis" },
  { tipo: 'vf', pregunta: "Las hojas son el principal sitio de fotosíntesis.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Hoja" },
  { tipo: 'vf', pregunta: "El sistema endocrino regula hormonas.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_endocrino" },
  { tipo: 'vf', pregunta: "Las células vegetales realizan fotosíntesis.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Célula_vegetal" },
  { tipo: 'vf', pregunta: "La fermentación requiere oxígeno.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Fermentación" },
  { tipo: 'vf', pregunta: "El intestino delgado absorbe nutrientes.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Intestino_delgado" },
  { tipo: 'vf', pregunta: "Los alvéolos permiten el intercambio gaseoso.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Alvéolo_pulmonar" },
  { tipo: 'vf', pregunta: "La meiosis ocurre en células somáticas.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Meiosis" },
  { tipo: 'vf', pregunta: "El floema transporta azúcares en las plantas.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Floema" },
  { tipo: 'vf', pregunta: "La célula animal tiene cloroplastos.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Célula_animal" },
  { tipo: 'vf', pregunta: "La membrana celular regula el paso de sustancias.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Membrana_celular" },


  { tipo: 'arrastrar', pregunta: "Relaciona el orgánulo con su función:", parejas: [
    { concepto: "Mitocondria", opcion: "Producción de energía" },
    { concepto: "Ribosoma", opcion: "Síntesis de proteínas" },
    { concepto: "Lisosoma", opcion: "Digestión celular" }
  ], wiki: "https://es.wikipedia.org/wiki/Orgánulo" },

  { tipo: 'arrastrar', pregunta: "Relaciona el sistema corporal con su función:", parejas: [
    { concepto: "Respiratorio", opcion: "Intercambio gaseoso" },
    { concepto: "Digestivo", opcion: "Procesamiento de alimentos" },
    { concepto: "Nervioso", opcion: "Transmisión de impulsos" }
  ], wiki: "https://es.wikipedia.org/wiki/Sistema_corporal" },

  { tipo: 'arrastrar', pregunta: "Relaciona el tipo de célula con su característica:", parejas: [
    { concepto: "Procariota", opcion: "Sin núcleo definido" },
    { concepto: "Eucariota", opcion: "Con núcleo definido" },
    { concepto: "Vegetal", opcion: "Tiene pared celular y cloroplastos" }
  ], wiki: "https://es.wikipedia.org/wiki/Célula" },

  { tipo: 'arrastrar', pregunta: "Relaciona el proceso con su producto final:", parejas: [
    { concepto: "Fotosíntesis", opcion: "Glucosa y oxígeno" },
    { concepto: "Fermentación láctica", opcion: "Ácido láctico" },
    { concepto: "Respiración celular", opcion: "ATP y CO₂" }
  ], wiki: "https://es.wikipedia.org/wiki/Metabolismo" },

  { tipo: 'arrastrar', pregunta: "Relaciona el tejido con su función:", parejas: [
    { concepto: "Epitelial", opcion: "Revestimiento y protección" },
    { concepto: "Muscular", opcion: "Movimiento" },
    { concepto: "Conectivo", opcion: "Soporte y unión" }
  ], wiki: "https://es.wikipedia.org/wiki/Tejido_biológico" },

  { tipo: 'arrastrar', pregunta: "Relaciona el tipo de reproducción con su característica:", parejas: [
    { concepto: "Sexual", opcion: "Intervienen gametos" },
    { concepto: "Asexual", opcion: "No hay variabilidad genética" },
    { concepto: "Vegetativa", opcion: "Propagación por estructuras no sexuales" }
  ], wiki: "https://es.wikipedia.org/wiki/Reproducción" },

  { tipo: 'arrastrar', pregunta: "Relaciona el órgano vegetal con su función:", parejas: [
    { concepto: "Raíz", opcion: "Absorción de agua y nutrientes" },
    { concepto: "Tallo", opcion: "Soporte y transporte" },
    { concepto: "Hoja", opcion: "Fotosíntesis" }
  ], wiki: "https://es.wikipedia.org/wiki/Órgano_vegetal" },

  { tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su función estructural:", parejas: [
    { concepto: "Celulosa", opcion: "Pared celular vegetal" },
    { concepto: "Colágeno", opcion: "Tejido conectivo animal" },
    { concepto: "Queratina", opcion: "Pelo y uñas" }
  ], wiki: "https://es.wikipedia.org/wiki/Proteína" },

  { tipo: 'arrastrar', pregunta: "Relaciona el tipo de célula con su función:", parejas: [
    { concepto: "Neurona", opcion: "Transmisión de señales eléctricas" },
    { concepto: "Glóbulo rojo", opcion: "Transporte de oxígeno" },
    { concepto: "Célula muscular", opcion: "Contracción" }
  ], wiki: "https://es.wikipedia.org/wiki/Célula" },

  { tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su función en el sistema nervioso:", parejas: [
    { concepto: "Sodio", opcion: "Generación de potencial de acción" },
    { concepto: "Calcio", opcion: "Liberación de neurotransmisores" },
    { concepto: "Potasio", opcion: "Repolarización de la membrana" }
  ], wiki: "https://es.wikipedia.org/wiki/Impulso_nerveoso" }
];


let preguntaActual = 0;
let puntaje = 0;
const LIMITE_PREGUNTAS = 10;
const quizRoot = document.getElementById('quiz-container') || document.body;

function obtenerPreguntasAleatorias(arr, n) {
	const copia = [...arr];
	const seleccionadas = [];
	for (let i = 0; i < n && copia.length > 0; i++) {
		const idx = Math.floor(Math.random() * copia.length);
		seleccionadas.push(copia[idx]);
	}
	return seleccionadas;
};

let preguntasQuiz = [];
window.addEventListener('DOMContentLoaded', () => {
	preguntaActual = 0;
	puntaje = 0;
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
	const progreso = document.createElement('div');
	progreso.style.marginBottom = '8px';
	progreso.innerHTML = `<strong>Pregunta ${preguntaActual + 1}/${LIMITE_PREGUNTAS}</strong>`;
	preguntaDiv.appendChild(progreso);
	preguntaDiv.innerHTML += `<strong>${ejercicio ? ejercicio.pregunta : ''}</strong>`;
	let inputElem;
	if (ejercicio && ejercicio.tipo === 'completar') {
		inputElem = document.createElement('input');
		inputElem.type = 'text';
		inputElem.placeholder = 'Respuesta...';
	} else if (ejercicio && ejercicio.tipo === 'vf') {
		inputElem = document.createElement('select');
		inputElem.innerHTML = '<option value="true">Verdadero</option><option value="false">Falso</option>';
	} else if (ejercicio && ejercicio.tipo === 'seleccion') {
		inputElem = document.createElement('select');
		ejercicio.opciones.forEach((op, idx) => {
			const opt = document.createElement('option');
			opt.value = idx;
			opt.textContent = op;
			inputElem.appendChild(opt);
		});
	} else if (ejercicio && ejercicio.tipo === 'arrastrar') {
		inputElem = document.createElement('div');
		inputElem.className = 'dragdrop-container';
		const conceptos = ejercicio.parejas.map(p => p.concepto);
		const opciones = ejercicio.parejas.map(p => p.opcion);
		const opcionesMezcladas = opciones.slice().sort(() => Math.random() - 0.5);
		const listaConceptos = document.createElement('div');
		listaConceptos.className = 'dragdrop-list-conceptos';
		conceptos.forEach((concepto, idx) => {
			const item = document.createElement('div');
			item.className = 'dragdrop-item concepto';
			item.textContent = concepto;
			item.setAttribute('data-idx', idx);
			listaConceptos.appendChild(item);
		});
		const listaOpciones = document.createElement('div');
		listaOpciones.className = 'dragdrop-list-opciones';
		opcionesMezcladas.forEach((opcion, idx) => {
			const item = document.createElement('div');
			item.className = 'dragdrop-item opcion';
			item.textContent = opcion;
			item.setAttribute('draggable', 'true');
			item.setAttribute('data-idx', idx);
			item.addEventListener('dragstart', e => {
				e.dataTransfer.setData('text/plain', opcion);
				e.dataTransfer.setData('opcion-idx', idx);
			});
			listaOpciones.appendChild(item);
		});
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
		const opcionesTitulo = document.createElement('div');
		opcionesTitulo.textContent = 'Opciones:';
		inputElem.appendChild(tabla);
		inputElem.appendChild(opcionesTitulo);
		inputElem.appendChild(listaOpciones);

		const btnArrastrar = document.createElement('button');
		btnArrastrar.className = 'btn-responder';
		btnArrastrar.innerHTML = 'Responder <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
		btnArrastrar.onclick = function() {
			let respuestaUsuario = [];
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
				inputElem.appendChild(advertencia);
				return;
			}
			const paresCorrectos = ejercicio.parejas;
			const esCorrecta = respuestaUsuario.length === paresCorrectos.length &&
				respuestaUsuario.every((parUsuario) => {
					return paresCorrectos.some(
						(parCorrecto) => parCorrecto.concepto === parUsuario.concepto && parCorrecto.opcion === parUsuario.opcion
					);
				});
			let feedbackDiv;
			if (esCorrecta) {
				feedbackDiv = document.createElement('div');
				feedbackDiv.className = 'feedback-quiz';
				feedbackDiv.innerHTML = '<span style="color:green;font-weight:bold">¡Correcto!</span>';
				try { audioCorrecto.currentTime = 0; audioCorrecto.play(); } catch(e){}
			} else {
				feedbackDiv = document.createElement('div');
				feedbackDiv.className = 'feedback-quiz';
				let respuestaMostrada = '<ul style="margin:8px 0">';
				paresCorrectos.forEach(par => {
					respuestaMostrada += `<li><strong>${par.concepto}</strong> → <span style='color:blue'>${par.opcion}</span></li>`;
				});
				respuestaMostrada += '</ul>';
				feedbackDiv.innerHTML = `<span style="color:red;font-weight:bold">Incorrecto, la respuesta correcta es:</span> ${respuestaMostrada}` +
					'<br><button class="btn-wikipedia" onclick="window.open(\'' + ejercicio.wiki + '\', \'_blank\')">Estudiar en Wikipedia</button>';
				try { audioIncorrecto.currentTime = 0; audioIncorrecto.play(); } catch(e){}
			}
			inputElem.appendChild(feedbackDiv);
			btnArrastrar.disabled = true;
			const btnSiguiente = document.createElement('button');
			btnSiguiente.textContent = preguntaActual + 1 < LIMITE_PREGUNTAS ? 'Siguiente pregunta' : 'Ver resultado';
			btnSiguiente.className = 'btn-siguiente';
			btnSiguiente.onclick = function() {
				try { audioPop.currentTime = 0; audioPop.play(); } catch(e){}
				preguntaActual++;
				mostrarPregunta();
			};
			inputElem.appendChild(btnSiguiente);
		};
		inputElem.appendChild(btnArrastrar);
	}
	if (inputElem) preguntaDiv.appendChild(inputElem);
	if (ejercicio && ejercicio.tipo !== 'arrastrar') {
		const btn = document.createElement('button');
		btn.className = 'btn-responder';
		btn.innerHTML = 'Responder <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
		btn.onclick = function() {
			let respuestaUsuario;
			if (ejercicio.tipo === 'completar') {
				respuestaUsuario = inputElem.value;
			} else if (ejercicio.tipo === 'vf') {
				respuestaUsuario = inputElem.value === 'true';
			} else if (ejercicio.tipo === 'seleccion') {
				respuestaUsuario = parseInt(inputElem.value);
			}
			const feedback = mostrarFeedback(ejercicio.respuesta, respuestaUsuario, ejercicio.wiki, ejercicio.tipo, ejercicio);
			preguntaDiv.appendChild(feedback);
			btn.disabled = true;
			let esCorrecta = false;
			if (ejercicio.tipo === 'completar' || ejercicio.tipo === 'vf') {
				esCorrecta = String(respuestaUsuario).trim().toLowerCase() === String(ejercicio.respuesta).trim().toLowerCase();
			} else if (ejercicio.tipo === 'seleccion') {
				esCorrecta = respuestaUsuario === ejercicio.respuesta;
			}
			if (esCorrecta) puntaje++;
			const btnSiguiente = document.createElement('button');
			btnSiguiente.textContent = preguntaActual + 1 < LIMITE_PREGUNTAS ? 'Siguiente pregunta' : 'Ver resultado';
			btnSiguiente.className = 'btn-siguiente';
			btnSiguiente.onclick = function() {
				try { audioPop.currentTime = 0; audioPop.play(); } catch(e){}
				preguntaActual++;
				mostrarPregunta();
			};
			preguntaDiv.appendChild(btnSiguiente);
		};
		preguntaDiv.appendChild(btn);
	}
	quizRoot.appendChild(preguntaDiv);
}

function mostrarFeedback(respuestaCorrecta, respuestaUsuario, wikiUrl, tipo, ejercicio) {
	const feedbackDiv = document.createElement('div');
	feedbackDiv.className = 'feedback-quiz';
	let respuestaMostrada = respuestaCorrecta;
	if (tipo === 'arrastrar') {
		respuestaMostrada = ejercicio.parejas.map(p => `${p.concepto}: ${p.opcion}`).join(', ');
	} else if (tipo === 'seleccion' && ejercicio && Array.isArray(ejercicio.opciones)) {
		respuestaMostrada = ejercicio.opciones[respuestaCorrecta];
	}
	let esCorrecta = false;
	if (tipo === 'completar' || tipo === 'vf') {
		esCorrecta = String(respuestaUsuario).trim().toLowerCase() === String(respuestaCorrecta).trim().toLowerCase();
	} else if (tipo === 'seleccion') {
		esCorrecta = respuestaUsuario === respuestaCorrecta;
	}
	if (esCorrecta) {
		try { audioCorrecto.currentTime = 0; audioCorrecto.play(); } catch(e){}
		feedbackDiv.innerHTML = `<span style="color:green;font-weight:bold">¡Correcto!</span>` +
			'<br><button class="btn-wikipedia" onclick="window.open(\'' + wikiUrl + '\', \'_blank\')">Estudiar en Wikipedia</button>';
	} else {
		try { audioIncorrecto.currentTime = 0; audioIncorrecto.play(); } catch(e){}
		feedbackDiv.innerHTML = `<span style="color:red;font-weight:bold">Incorrecto, la respuesta correcta es:</span> ${respuestaMostrada}` +
			'<br><button class="btn-wikipedia" onclick="window.open(\'' + wikiUrl + '\', \'_blank\')">Estudiar en Wikipedia</button>';
	}
	return feedbackDiv;
}

// Inicializa el quiz si el script se carga después del DOM
if (document.readyState === 'complete' || document.readyState === 'interactive') {
	preguntaActual = 0;
	puntaje = 0;
	preguntasQuiz = obtenerPreguntasAleatorias(ejerciciosQuiz, LIMITE_PREGUNTAS);
	mostrarPregunta();
}
