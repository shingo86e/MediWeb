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
		{ tipo: 'completar', pregunta: "¿Qué molécula almacena la información genética?", respuesta: "ADN", wiki: "https://es.wikipedia.org/wiki/Ácido_desoxirribonucleico" },
		{ tipo: 'completar', pregunta: "¿Qué enzima cataliza la ruptura de la lactosa?", respuesta: "lactasa", wiki: "https://es.wikipedia.org/wiki/Lactasa" },
		{ tipo: 'completar', pregunta: "¿Qué tipo de lípido forma la membrana celular?", respuesta: "fosfolípido", wiki: "https://es.wikipedia.org/wiki/Fosfolípido" },
		{ tipo: 'completar', pregunta: "¿Qué molécula es la principal fuente de energía celular?", respuesta: "ATP", wiki: "https://es.wikipedia.org/wiki/Adenosín_trifosfato" },
		{ tipo: 'completar', pregunta: "¿Qué proceso convierte glucosa en piruvato?", respuesta: "glucólisis", wiki: "https://es.wikipedia.org/wiki/Glucólisis" },
		{ tipo: 'completar', pregunta: "¿Qué coenzima participa en reacciones redox?", respuesta: "NAD+", wiki: "https://es.wikipedia.org/wiki/Nicotinamida_adenina_dinucleótido" },
		{ tipo: 'completar', pregunta: "¿Qué proteína transporta oxígeno en la sangre?", respuesta: "hemoglobina", wiki: "https://es.wikipedia.org/wiki/Hemoglobina" },
		{ tipo: 'completar', pregunta: "¿Qué monosacárido forma parte del ADN?", respuesta: "desoxirribosa", wiki: "https://es.wikipedia.org/wiki/Desoxirribosa" },
		{ tipo: 'completar', pregunta: "¿Qué tipo de enlace une los aminoácidos?", respuesta: "enlace peptídico", wiki: "https://es.wikipedia.org/wiki/Enlace_peptídico" },
		{ tipo: 'completar', pregunta: "¿Qué vitamina es esencial para la coagulación?", respuesta: "vitamina K", wiki: "https://es.wikipedia.org/wiki/Vitamina_K" },
		{ tipo: 'completar', pregunta: "¿Qué ion es fundamental en la contracción muscular?", respuesta: "calcio", wiki: "https://es.wikipedia.org/wiki/Calcio" },
		{ tipo: 'completar', pregunta: "¿Qué molécula actúa como mensajero secundario?", respuesta: "AMPc", wiki: "https://es.wikipedia.org/wiki/Adenosín_monofosfato_cíclico" },
		{ tipo: 'completar', pregunta: "¿Qué enzima sintetiza el ARN a partir de ADN?", respuesta: "ARN polimerasa", wiki: "https://es.wikipedia.org/wiki/ARN_polimerasa" },
		{ tipo: 'completar', pregunta: "¿Qué tipo de reacción libera energía?", respuesta: "exergónica", wiki: "https://es.wikipedia.org/wiki/Reacción_exergónica" },
		{ tipo: 'completar', pregunta: "¿Qué molécula se forma al final del ciclo de Krebs?", respuesta: "CO₂", wiki: "https://es.wikipedia.org/wiki/Ciclo_de_Krebs" },
		{ tipo: 'completar', pregunta: "¿Qué tipo de lípido es precursor de hormonas?", respuesta: "colesterol", wiki: "https://es.wikipedia.org/wiki/Colesterol" },
		{ tipo: 'completar', pregunta: "¿Qué base nitrogenada no está en el ARN?", respuesta: "timina", wiki: "https://es.wikipedia.org/wiki/Timina" },
		{ tipo: 'completar', pregunta: "¿Qué tipo de proteína acelera reacciones químicas?", respuesta: "enzima", wiki: "https://es.wikipedia.org/wiki/Enzima" },
		{ tipo: 'completar', pregunta: "¿Qué molécula se une al oxígeno en la respiración celular?", respuesta: "electrones", wiki: "https://es.wikipedia.org/wiki/Respiración_celular" },
		{ tipo: 'completar', pregunta: "¿Qué compuesto almacena glucosa en el hígado?", respuesta: "glucógeno", wiki: "https://es.wikipedia.org/wiki/Glucógeno" },
		{ tipo: 'completar', pregunta: "¿Qué tipo de ácido graso tiene dobles enlaces?", respuesta: "insaturado", wiki: "https://es.wikipedia.org/wiki/Ácido_graso_insaturado" },
		{ tipo: 'completar', pregunta: "¿Qué molécula inicia la síntesis de proteínas?", respuesta: "ARNm", wiki: "https://es.wikipedia.org/wiki/ARN_mensajero" },
		{ tipo: 'completar', pregunta: "¿Qué enzima rompe el almidón?", respuesta: "amilasa", wiki: "https://es.wikipedia.org/wiki/Amilasa" },
		{ tipo: 'completar', pregunta: "¿Qué compuesto regula el pH sanguíneo?", respuesta: "bicarbonato", wiki: "https://es.wikipedia.org/wiki/Bicarbonato" },
		{ tipo: 'completar', pregunta: "¿Qué tipo de transporte celular no requiere energía?", respuesta: "difusión", wiki: "https://es.wikipedia.org/wiki/Difusión" },

{ tipo: 'seleccion', pregunta: "¿Cuál es el pH óptimo de la pepsina?", opciones: ["7", "2", "5", "9"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Pepsina" },
{ tipo: 'seleccion', pregunta: "¿Qué vitamina es liposoluble?", opciones: ["Vitamina C", "Vitamina B12", "Vitamina D", "Vitamina B6"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Vitamina_D" },
{ tipo: 'seleccion', pregunta: "¿Qué coenzima participa en reacciones redox?", opciones: ["NAD+", "ATP", "DNA", "ARN"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Nicotinamida_adenina_dinucleótido" },
{ tipo: 'seleccion', pregunta: "¿Cuál es el monosacárido más común en la sangre?", opciones: ["Fructosa", "Galactosa", "Glucosa", "Ribosa"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Glucosa" },
{ tipo: 'seleccion', pregunta: "¿Qué tipo de enlace une los nucleótidos en el ADN?", opciones: ["Peptídico", "Fosfodiéster", "Iónico", "Puente de hidrógeno"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Enlace_fosfodiéster" },
{ tipo: 'seleccion', pregunta: "¿Qué proteína transporta oxígeno?", opciones: ["Mioglobina", "Hemoglobina", "Actina", "Insulina"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Hemoglobina" },
{ tipo: 'seleccion', pregunta: "¿Cuál es el producto final de la glucólisis?", opciones: ["ATP", "Piruvato", "CO₂", "Lactato"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Glucólisis" },
{ tipo: 'seleccion', pregunta: "¿Qué base nitrogenada está presente solo en el ARN?", opciones: ["Timina", "Uracilo", "Guanina", "Citosina"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Uracilo" },
{ tipo: 'seleccion', pregunta: "¿Qué tipo de lípido tiene función hormonal?", opciones: ["Triglicérido", "Fosfolípido", "Colesterol", "Ácido graso"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Colesterol" },
{ tipo: 'seleccion', pregunta: "¿Qué enzima sintetiza ADN?", opciones: ["ARN polimerasa", "ADN helicasa", "ADN polimerasa", "Ligasa"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/ADN_polimerasa" },
{ tipo: 'seleccion', pregunta: "¿Qué compuesto regula el equilibrio ácido-base?", opciones: ["Sodio", "Bicarbonato", "Potasio", "Calcio"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Bicarbonato" },
{ tipo: 'seleccion', pregunta: "¿Qué vitamina es esencial para la visión?", opciones: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina B1"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Vitamina_A" },
{ tipo: 'seleccion', pregunta: "¿Qué molécula actúa como segundo mensajero?", opciones: ["AMPc", "ADN", "ARNm", "Glucosa"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Adenosín_monofosfato_cíclico" },
{ tipo: 'seleccion', pregunta: "¿Qué proceso ocurre en las mitocondrias?", opciones: ["Glucólisis", "Fotosíntesis", "Ciclo de Krebs", "Transcripción"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Ciclo_de_Krebs" },
{ tipo: 'seleccion', pregunta: "¿Qué tipo de transporte celular requiere energía?", opciones: ["Difusión", "Ósmosis", "Transporte activo", "Filtración"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Transporte_activo" },
{ tipo: 'seleccion', pregunta: "¿Qué compuesto almacena glucosa en animales?", opciones: ["Celulosa", "Glucógeno", "Almidón", "Fructosa"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Glucógeno" },
{ tipo: 'seleccion', pregunta: "¿Qué tipo de ácido graso tiene dobles enlaces?", opciones: ["Saturado", "Insaturado", "Trans", "Omega-3"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Ácido_graso_insaturado" },
{ tipo: 'seleccion', pregunta: "¿Qué enzima rompe el almidón?", opciones: ["Lactasa", "Amilasa", "Lipasa", "Pepsina"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Amilasa" },
{ tipo: 'seleccion', pregunta: "¿Qué tipo de ARN lleva la información genética?", opciones: ["ARNm", "ARNt", "ARNr", "ADN"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/ARN_mensajero" },
{ tipo: 'seleccion', pregunta: "¿Qué compuesto es precursor de hormonas esteroides?", opciones: ["Glucosa", "Colesterol", "Ácido láctico", "Triglicérido"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Hormona_esteroide" },
{ tipo: 'seleccion', pregunta: "¿Qué vitamina ayuda en la coagulación?", opciones: ["Vitamina A", "Vitamina K", "Vitamina D", "Vitamina B2"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Vitamina_K" },
{ tipo: 'seleccion', pregunta: "¿Qué molécula se une al oxígeno en la cadena respiratoria?", opciones: ["NADH", "FADH₂", "Citocromo", "Oxígeno"], respuesta: 3, wiki: "https://es.wikipedia.org/wiki/Cadena_de_transporte_de_electrones" },
{ tipo: 'seleccion', pregunta: "¿Qué tipo de reacción libera energía?", opciones: ["Endergónica", "Exergónica", "Isotónica", "Redox"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Reacción_exergónica" },
{ tipo: 'seleccion', pregunta: "¿Qué compuesto regula la glucosa en sangre?", opciones: ["Insulina", "Glucagón", "Cortisol", "Adrenalina"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Insulina" },
	{ tipo: 'seleccion', pregunta: "¿Qué tipo de proteína acelera reacciones químicas?", opciones: ["Hormona", "Enzima", "Receptor", "Transportadora"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Enzima" },
	{ tipo: 'vf', pregunta: "La glucólisis ocurre en el citoplasma.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Glucólisis" },
{ tipo: 'vf', pregunta: "El ATP contiene tres grupos fosfato.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Adenosín_trifosfato" },
{ tipo: 'vf', pregunta: "Las enzimas aumentan la energía de activación.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Enzima" },
{ tipo: 'vf', pregunta: "El colesterol es un tipo de lípido.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Colesterol" },
{ tipo: 'vf', pregunta: "La insulina es una enzima digestiva.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Insulina" },
{ tipo: 'vf', pregunta: "El ADN está compuesto por nucleótidos.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Ácido_desoxirribonucleico" },
{ tipo: 'vf', pregunta: "La vitamina C es liposoluble.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Vitamina_C" },
{ tipo: 'vf', pregunta: "El ciclo de Krebs produce CO₂.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Ciclo_de_Krebs" },
{ tipo: 'vf', pregunta: "La ribosa está presente en el ADN.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Ribosa" },
{ tipo: 'vf', pregunta: "El NAD+ participa en reacciones redox.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Nicotinamida_adenina_dinucleótido" },
{ tipo: 'vf', pregunta: "La pepsina actúa en el intestino delgado.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Pepsina" },
{ tipo: 'vf', pregunta: "El glucógeno se almacena en el hígado y músculos.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Glucógeno" },
{ tipo: 'vf', pregunta: "El uracilo se encuentra en el ADN.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Uracilo" },
{ tipo: 'vf', pregunta: "La amilasa degrada el almidón.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Amilasa" },
{ tipo: 'vf', pregunta: "El transporte activo requiere energía.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Transporte_activo" },
{ tipo: 'vf', pregunta: "La vitamina D se obtiene solo por la dieta.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Vitamina_D" },
{ tipo: 'vf', pregunta: "El ARN mensajero lleva información genética.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/ARN_mensajero" },
{ tipo: 'vf', pregunta: "La glucosa es un disacárido.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Glucosa" },
{ tipo: 'vf', pregunta: "La cadena de transporte de electrones ocurre en la membrana mitocondrial interna.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Cadena_de_transporte_de_electrones" },
{ tipo: 'vf', pregunta: "El ácido láctico se produce en condiciones anaeróbicas.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Ácido_láctico" },
{ tipo: 'vf', pregunta: "El ADN polimerasa sintetiza proteínas.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/ADN_polimerasa" },
{ tipo: 'vf', pregunta: "El ciclo de Krebs ocurre en el citoplasma.", respuesta: false, wiki: "https://es.wikipedia.org/wiki/Ciclo_de_Krebs" },
{ tipo: 'vf', pregunta: "El AMPc es un segundo mensajero.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Adenosín_monofosfato_cíclico" },
{ tipo: 'vf', pregunta: "La vitamina K participa en la coagulación.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Vitamina_K" },
	{ tipo: 'vf', pregunta: "La síntesis de proteínas ocurre en el ribosoma.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Síntesis_de_proteínas" },

{ tipo: 'arrastrar', pregunta: "Relaciona la molécula con su función:", parejas: [
  { concepto: "ADN", opcion: "Almacena información genética" },
  { concepto: "ATP", opcion: "Fuente de energía" },
  { concepto: "Insulina", opcion: "Regula glucosa" }
], wiki: "https://es.wikipedia.org/wiki/Bioquímica" },

{ tipo: 'arrastrar', pregunta: "Relaciona el proceso con su ubicación celular:", parejas: [
  { concepto: "Glucólisis", opcion: "Citoplasma" },
  { concepto: "Ciclo de Krebs", opcion: "Mitocondria" },
  { concepto: "Síntesis de proteínas", opcion: "Ribosoma" }
], wiki: "https://es.wikipedia.org/wiki/Célula" },

{ tipo: 'arrastrar', pregunta: "Relaciona la enzima con el sustrato que degrada:", parejas: [
  { concepto: "Amilasa", opcion: "Almidón" },
  { concepto: "Lactasa", opcion: "Lactosa" },
  { concepto: "Lipasa", opcion: "Grasas" }
], wiki: "https://es.wikipedia.org/wiki/Enzima" },

{ tipo: 'arrastrar', pregunta: "Relaciona la vitamina con su función principal:", parejas: [
  { concepto: "Vitamina A", opcion: "Visión" },
  { concepto: "Vitamina K", opcion: "Coagulación" },
  { concepto: "Vitamina D", opcion: "Absorción de calcio" }
], wiki: "https://es.wikipedia.org/wiki/Vitamina" },

{ tipo: 'arrastrar', pregunta: "Relaciona el tipo de lípido con su función:", parejas: [
  { concepto: "Fosfolípido", opcion: "Membrana celular" },
  { concepto: "Triglicérido", opcion: "Reserva energética" },
  { concepto: "Colesterol", opcion: "Precursor hormonal" }
], wiki: "https://es.wikipedia.org/wiki/Lípido" },

{ tipo: 'arrastrar', pregunta: "Relaciona el tipo de ARN con su función:", parejas: [
  { concepto: "ARNm", opcion: "Transporta información genética" },
  { concepto: "ARNt", opcion: "Transporta aminoácidos" },
  { concepto: "ARNr", opcion: "Forma parte del ribosoma" }
], wiki: "https://es.wikipedia.org/wiki/ARN" },

{ tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su clasificación:", parejas: [
  { concepto: "Glucosa", opcion: "Monosacárido" },
  { concepto: "Sacarosa", opcion: "Disacárido" },
  { concepto: "Almidón", opcion: "Polisacárido" }
], wiki: "https://es.wikipedia.org/wiki/Carbohidrato" },

{ tipo: 'arrastrar', pregunta: "Relaciona el ion con su función:", parejas: [
  { concepto: "Calcio", opcion: "Contracción muscular" },
  { concepto: "Sodio", opcion: "Transmisión nerviosa" },
  { concepto: "Potasio", opcion: "Equilibrio osmótico" }
], wiki: "https://es.wikipedia.org/wiki/Ión" },

{ tipo: 'arrastrar', pregunta: "Relaciona el proceso metabólico con su resultado:", parejas: [
  { concepto: "Glucólisis", opcion: "Piruvato" },
  { concepto: "Ciclo de Krebs", opcion: "CO₂" },
  { concepto: "Cadena respiratoria", opcion: "ATP" }
], wiki: "https://es.wikipedia.org/wiki/Metabolismo" },

{ tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su función en la célula:", parejas: [
  { concepto: "Bicarbonato", opcion: "Regulación del pH" },
  { concepto: "AMPc", opcion: "Segundo mensajero" },
  { concepto: "FADH₂", opcion: "Transporte de electrones" }
], wiki: "https://es.wikipedia.org/wiki/Bioquímica" },

{ tipo: 'arrastrar', pregunta: "Relaciona el tipo de reacción con su característica:", parejas: [
  { concepto: "Exergónica", opcion: "Libera energía" },
  { concepto: "Endergónica", opcion: "Requiere energía" },
  { concepto: "Redox", opcion: "Transferencia de electrones" }
], wiki: "https://es.wikipedia.org/wiki/Reacción_química" },

{ tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su ubicación principal:", parejas: [
  { concepto: "Glucógeno", opcion: "Hígado y músculos" },
  { concepto: "Colesterol", opcion: "Membranas celulares" },
  { concepto: "Hemoglobina", opcion: "Glóbulos rojos" }
], wiki: "https://es.wikipedia.org/wiki/Bioquímica" },

{ tipo: 'arrastrar', pregunta: "Relaciona el tipo de enlace con los compuestos que une:", parejas: [
  { concepto: "Peptídico", opcion: "Aminoácidos" },
  { concepto: "Fosfodiéster", opcion: "Nucleótidos" },
  { concepto: "Glucosídico", opcion: "Monosacáridos" }
], wiki: "https://es.wikipedia.org/wiki/Enlace_químico" },

{ tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su origen:", parejas: [
  { concepto: "Fructosa", opcion: "Frutas" },
  { concepto: "Lactosa", opcion: "Leche" },
  { concepto: "Celulosa", opcion: "Plantas" }
], wiki: "https://es.wikipedia.org/wiki/Carbohidrato" },

{ tipo: 'arrastrar', pregunta: "Relaciona el órgano con su función bioquímica:", parejas: [
  { concepto: "Hígado", opcion: "Metabolismo de glucosa" },
  { concepto: "Páncreas", opcion: "Producción de insulina" },
  { concepto: "Estómago", opcion: "Digestión de proteínas" }
], wiki: "https://es.wikipedia.org/wiki/Órgano" },

{ tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su función energética:", parejas: [
  { concepto: "ATP", opcion: "Energía inmediata" },
  { concepto: "Triglicérido", opcion: "Reserva energética" },
  { concepto: "Glucógeno", opcion: "Energía rápida" }
], wiki: "https://es.wikipedia.org/wiki/Energía_bioquímica" },

{ tipo: 'arrastrar', pregunta: "Relaciona el tipo de proteína con su función:", parejas: [
  { concepto: "Enzima", opcion: "Cataliza reacciones" },
  { concepto: "Hormona", opcion: "Regula procesos" },
  { concepto: "Transportadora", opcion: "Mueve sustancias" }
], wiki: "https://es.wikipedia.org/wiki/Proteína" },

{ tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su clasificación química:", parejas: [
  { concepto: "Ácido láctico", opcion: "Ácido orgánico" },
  { concepto: "Glucosa", opcion: "Carbohidrato" },
  { concepto: "Colesterol", opcion: "Lípido" }
], wiki: "https://es.wikipedia.org/wiki/Bioquímica" },

{ tipo: 'arrastrar', pregunta: "Relaciona el tipo de ARN con su rol en la traducción:", parejas: [
  { concepto: "ARNm", opcion: "Lleva el código genético" },
  { concepto: "ARNt", opcion: "Entrega aminoácidos" },
  { concepto: "ARNr", opcion: "Forma el ribosoma" }
], wiki: "https://es.wikipedia.org/wiki/ARN" },

{ tipo: 'arrastrar', pregunta: "Relaciona el compuesto con su función hormonal:", parejas: [
  { concepto: "Insulina", opcion: "Disminuye glucosa" },
  { concepto: "Glucagón", opcion: "Aumenta glucosa" },
  { concepto: "Cortisol", opcion: "Responde al estrés" }
], wiki: "https://es.wikipedia.org/wiki/Hormona" },

{ tipo: 'arrastrar', pregunta: "Relaciona el proceso con su tipo de metabolismo:", parejas: [
  { concepto: "Glucólisis", opcion: "Catabolismo" },
  { concepto: "Síntesis de proteínas", opcion: "Anabolismo" },
  { concepto: "Beta oxidación", opcion: "Catabolismo" }
], wiki: "https://es.wikipedia.org/wiki/Metabolismo" }
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
