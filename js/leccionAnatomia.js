// Sonido pop para siguiente pregunta
const audioPop = new Audio('../sonidos/pop.mp3');
// Sonidos de feedback (archivos locales en carpeta sonidos)
const audioCorrecto = new Audio('../sonidos/correcto.mp3');
const audioIncorrecto = new Audio('../sonidos/incorrecto.mp3');

// Muestra el resultado final del quiz
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
	// Botón de reintentar
	const btnReintentar = document.createElement('button');
	btnReintentar.textContent = 'Reintentar';
	btnReintentar.style.marginTop = '16px';
	btnReintentar.onclick = function() {
		preguntaActual = 0;
		puntaje = 0;
		preguntasQuiz = obtenerPreguntasAleatorias(ejerciciosQuiz, LIMITE_PREGUNTAS);
		mostrarPregunta();
	};
	resultadoDiv.appendChild(btnReintentar);
	quizRoot.appendChild(resultadoDiv);
}

// Obtener la materia desde la URL (?materia=Anatomía)
function getMateriaFromURL() {
	const params = new URLSearchParams(window.location.search);
	return params.get('materia') || 'Anatomía';
}
const contenidoLeccion = document.getElementById('contenido-leccion');

// Ejercicios para el quiz
const ejerciciosQuiz = [
{ tipo: 'completar', pregunta: "¿Qué porción del intestino delgado se continúa con el íleon?", respuesta: "yeyuno", wiki: "https://es.wikipedia.org/wiki/Intestino_delgado" },
  { tipo: 'completar', pregunta: "¿Qué segmento del intestino grueso se encuentra entre el ciego y el colon transverso?", respuesta: "colon ascendente", wiki: "https://es.wikipedia.org/wiki/Colon_ascendente" },
  { tipo: 'completar', pregunta: "¿Qué estructura conecta el estómago con el duodeno?", respuesta: "píloro", wiki: "https://es.wikipedia.org/wiki/Píloro" },
  { tipo: 'completar', pregunta: "¿Qué conducto conecta la pelvis renal con la vejiga urinaria?", respuesta: "uréter", wiki: "https://es.wikipedia.org/wiki/Uréter" },
  { tipo: 'completar', pregunta: "¿Qué estructura marca el inicio del intestino grueso?", respuesta: "ciego", wiki: "https://es.wikipedia.org/wiki/Ciego" },
  { tipo: 'completar', pregunta: "¿Qué parte del estómago se relaciona con el diafragma y el fundus gástrico?", respuesta: "cardias", wiki: "https://es.wikipedia.org/wiki/Cardias" },
  { tipo: 'completar', pregunta: "¿Qué estructura del sistema urinario se ubica en la pelvis menor y actúa como reservorio?", respuesta: "vejiga urinaria", wiki: "https://es.wikipedia.org/wiki/Vejiga" },
  { tipo: 'completar', pregunta: "¿Qué conducto atraviesa la próstata en el varón?", respuesta: "uretra prostática", wiki: "https://es.wikipedia.org/wiki/Uretra" },
  { tipo: 'completar', pregunta: "¿Qué estructura conecta el útero con la vulva?", respuesta: "vagina", wiki: "https://es.wikipedia.org/wiki/Vagina" },
  { tipo: 'completar', pregunta: "¿Qué parte del útero se proyecta hacia la vagina y contiene el orificio cervical?", respuesta: "cuello uterino", wiki: "https://es.wikipedia.org/wiki/Cérvix" },
  { tipo: 'completar', pregunta: "¿Qué estructura del oído interno participa en el equilibrio?", respuesta: "aparato vestibular", wiki: "https://es.wikipedia.org/wiki/Oído_interno" },
  { tipo: 'completar', pregunta: "¿Qué estructura del ojo se encarga de enfocar la luz sobre la retina?", respuesta: "cristalino", wiki: "https://es.wikipedia.org/wiki/Cristalino" },
  { tipo: 'completar', pregunta: "¿Qué nervio craneal atraviesa el conducto óptico?", respuesta: "nervio óptico", wiki: "https://es.wikipedia.org/wiki/Nervio_óptico" },
  { tipo: 'completar', pregunta: "¿Qué estructura del oído externo capta las ondas sonoras?", respuesta: "pabellón auricular", wiki: "https://es.wikipedia.org/wiki/Oído_externo" },
  { tipo: 'completar', pregunta: "¿Qué estructura transparente protege el globo ocular y permite el paso de luz?", respuesta: "córnea", wiki: "https://es.wikipedia.org/wiki/Córnea" },
  { tipo: 'completar', pregunta: "¿Cuántos pares de nervios craneales emergen del tronco encefálico?", respuesta: "10 pares", wiki: "https://es.wikipedia.org/wiki/Nervio_craneal" },
  { tipo: 'completar', pregunta: "¿Qué estructura ósea forma el techo de la cavidad orbitaria?", respuesta: "porción orbitaria del hueso frontal", wiki: "https://es.wikipedia.org/wiki/Hueso_frontal" },
  { tipo: 'completar', pregunta: "¿Qué agujero del cráneo permite el paso del nervio mandibular?", respuesta: "agujero oval", wiki: "https://es.wikipedia.org/wiki/Agujero_oval" },
  { tipo: 'completar', pregunta: "¿Qué surco del húmero aloja el nervio radial?", respuesta: "surco del nervio radial", wiki: "https://es.wikipedia.org/wiki/Húmero" },
  { tipo: 'completar', pregunta: "¿Qué músculo se inserta en la espina de la escápula?", respuesta: "trapecio", wiki: "https://es.wikipedia.org/wiki/Músculo_trapecio" },
  { tipo: 'completar', pregunta: "¿Qué estructura pasa por el canal inguinal en el varón?", respuesta: "cordón espermático", wiki: "https://es.wikipedia.org/wiki/Canal_inguinal" },
  { tipo: 'completar', pregunta: "¿Qué músculo se origina en la espina ilíaca anterosuperior?", respuesta: "sartorio", wiki: "https://es.wikipedia.org/wiki/Músculo_sartorio" },
  { tipo: 'completar', pregunta: "¿Qué estructura pasa por el agujero ciático mayor junto al nervio ciático?", respuesta: "arteria glútea inferior", wiki: "https://es.wikipedia.org/wiki/Agujero_ciático_mayor" },
  { tipo: 'completar', pregunta: "¿Qué corte anatómico divide el cuerpo en mitades derecha e izquierda?", respuesta: "plano sagital", wiki: "https://es.wikipedia.org/wiki/Plano_sagital" },
  { tipo: 'completar', pregunta: "¿Qué músculo se inserta en el trocánter mayor del fémur?", respuesta: "glúteo medio", wiki: "https://es.wikipedia.org/wiki/Músculo_glúteo_medio" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura conecta el estómago con el duodeno?", opciones: ["Cardias", "Fundus", "Píloro", "Cuerpo gástrico"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Píloro" },
  { tipo: 'seleccion', pregunta: "¿Qué hueso forma la parte anterior del paladar óseo?", opciones: ["Maxilar", "Palatino", "Vómer", "Etmoides"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Maxilar" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo se inserta en la espina ilíaca anterosuperior?", opciones: ["Recto femoral", "Sartorio", "Psoas mayor", "Tensor de la fascia lata"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Músculo_sartorio" },
  { tipo: 'seleccion', pregunta: "¿Qué nervio atraviesa el conducto óptico?", opciones: ["Nervio óptico", "Nervio oculomotor", "Nervio troclear", "Nervio abducens"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Nervio_óptico" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura pasa por el agujero yugular?", opciones: ["Nervio vago", "Nervio facial", "Nervio hipogloso", "Nervio trigémino"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Agujero_yugular" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo se inserta en el trocánter mayor del fémur?", opciones: ["Glúteo mayor", "Glúteo medio", "Piriforme", "Iliaco"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Músculo_glúteo_medio" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura forma el techo de la órbita?", opciones: ["Hueso frontal", "Hueso esfenoides", "Hueso cigomático", "Hueso maxilar"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Hueso_frontal" },
  { tipo: 'seleccion', pregunta: "¿Qué plano divide el cuerpo en mitades derecha e izquierda?", opciones: ["Coronal", "Transversal", "Sagital", "Oblicuo"], respuesta: 2, wiki: "https://es.wikipedia.org/wiki/Plano_sagital" },
  { tipo: 'seleccion', pregunta: "¿Qué nervio pasa por el surco del nervio radial en el húmero?", opciones: ["Nervio radial", "Nervio mediano", "Nervio cubital", "Nervio musculocutáneo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Húmero" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura atraviesa el canal inguinal en el varón?", opciones: ["Cordón espermático", "Conducto deferente", "Arteria epigástrica inferior", "Vena femoral"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Canal_inguinal" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo se origina en la espina de la escápula?", opciones: ["Trapecio", "Dorsal ancho", "Deltoides", "Romboides mayor"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Músculo_trapecio" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura pasa por el agujero ciático mayor junto al nervio ciático?", opciones: ["Arteria glútea inferior", "Arteria femoral", "Arteria obturatriz", "Arteria pudenda interna"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Agujero_ciático_mayor" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo forma el piso de la pelvis?", opciones: ["Elevador del ano", "Obturador interno", "Piriforme", "Iliaco"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Músculo_elevador_del_ano" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura delimita el triángulo femoral?", opciones: ["Ligamento inguinal", "Sartorio", "Aductor largo", "Todas las anteriores"], respuesta: 3, wiki: "https://es.wikipedia.org/wiki/Triángulo_femoral" },
  { tipo: 'seleccion', pregunta: "¿Qué nervio emerge por el agujero supraorbitario?", opciones: ["Nervio frontal", "Nervio supraorbitario", "Nervio cigomático", "Nervio óptico"], respuesta: 1, wiki: "https://es.wikipedia.org/wiki/Nervio_supraorbitario" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura pasa por el canal del carpo?", opciones: ["Nervio mediano", "Nervio cubital", "Arteria radial", "Tendón del palmar largo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Túnel_carpiano" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo se inserta en el tubérculo mayor del húmero?", opciones: ["Supraespinoso", "Subescapular", "Redondo mayor", "Deltoides"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Músculo_supraespinoso" },
  { tipo: 'seleccion', pregunta: "¿Qué nervio pasa por el canal de Guyon?", opciones: ["Nervio cubital", "Nervio radial", "Nervio mediano", "Nervio musculocutáneo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Canal_de_Guyon" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura forma el límite posterior del triángulo submandibular?", opciones: ["Vientre posterior del digástrico", "Esternocleidomastoideo", "Omohioideo", "Milohioideo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Triángulo_submandibular" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo se inserta en la cara posterior del calcáneo mediante el tendón de Aquiles?", opciones: ["Gastrocnemio", "Sóleo", "Plantaris", "Todos los anteriores"], respuesta: 3, wiki: "https://es.wikipedia.org/wiki/Tendón_de_Aquiles" },
  { tipo: 'seleccion', pregunta: "¿Qué nervio atraviesa el foramen redondo mayor?", opciones: ["Nervio maxilar", "Nervio mandibular", "Nervio oftálmico", "Nervio facial"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Nervio_maxilar" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo se origina en la fosa infraespinosa?", opciones: ["Infraespinoso", "Subescapular", "Supraespinoso", "Redondo menor"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Músculo_infraespinoso" },
  { tipo: 'seleccion', pregunta: "¿Qué estructura pasa por el hiato esofágico del diafragma?", opciones: ["Esófago", "Aorta", "Vena cava inferior", "Nervio frénico"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Hiato_esofágico" },
  { tipo: 'seleccion', pregunta: "¿Qué músculo se inserta en el borde medial de la escápula?", opciones: ["Romboides mayor", "Trapecio", "Deltoides", "Subescapular"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Músculo_romboides" },
  { tipo: 'seleccion', pregunta: "¿Qué nervio pasa por el canal del epicóndilo medial del húmero?", opciones: ["Nervio cubital", "Nervio radial", "Nervio mediano", "Nervio musculocutáneo"], respuesta: 0, wiki: "https://es.wikipedia.org/wiki/Nervio_cubital" },
  { tipo: 'arrastrar', pregunta: "Relaciona el hueso con su ubicación anatómica:", parejas: [
    { concepto: "Fémur", opcion: "Miembro inferior" },
    { concepto: "Húmero", opcion: "Miembro superior" },
    { concepto: "Occipital", opcion: "Cráneo" }
  ], wiki: "https://es.wikipedia.org/wiki/Hueso" },

  { tipo: 'arrastrar', pregunta: "Relaciona el agujero craneal con la estructura que lo atraviesa:", parejas: [
    { concepto: "Agujero magno", opcion: "Bulbo raquídeo" },
    { concepto: "Conducto óptico", opcion: "Nervio óptico" },
    { concepto: "Agujero yugular", opcion: "Nervio vago" }
  ], wiki: "https://es.wikipedia.org/wiki/Base_del_cráneo" },

  { tipo: 'arrastrar', pregunta: "Relaciona el músculo con su punto de inserción:", parejas: [
    { concepto: "Trapecio", opcion: "Espina de la escápula" },
    { concepto: "Glúteo medio", opcion: "Trocánter mayor" },
    { concepto: "Sartorio", opcion: "Cara medial de la tibia" }
  ], wiki: "https://es.wikipedia.org/wiki/Músculo" },

  { tipo: 'arrastrar', pregunta: "Relaciona el nervio con el canal o surco que atraviesa:", parejas: [
    { concepto: "Nervio radial", opcion: "Surco del nervio radial" },
    { concepto: "Nervio cubital", opcion: "Canal del epicóndilo medial" },
    { concepto: "Nervio mediano", opcion: "Túnel carpiano" }
  ], wiki: "https://es.wikipedia.org/wiki/Nervio" },

  { tipo: 'arrastrar', pregunta: "Relaciona el plano anatómico con su descripción:", parejas: [
    { concepto: "Sagital", opcion: "Divide en derecha e izquierda" },
    { concepto: "Coronal", opcion: "Divide en anterior y posterior" },
    { concepto: "Transversal", opcion: "Divide en superior e inferior" }
  ], wiki: "https://es.wikipedia.org/wiki/Plano_anatómico" },

  { tipo: 'arrastrar', pregunta: "Relaciona el paquete vasculonervioso con su trayecto anatómico:", parejas: [
    { concepto: "Arteria femoral", opcion: "Triángulo femoral" },
    { concepto: "Nervio ciático", opcion: "Agujero ciático mayor" },
    { concepto: "Arteria braquial", opcion: "Surco bicipital medial" }
  ], wiki: "https://es.wikipedia.org/wiki/Paquete_vasculonervioso" },

  { tipo: 'arrastrar', pregunta: "Relaciona el hueso con una estructura anatómica que contiene:", parejas: [
    { concepto: "Temporal", opcion: "Conducto auditivo externo" },
    { concepto: "Esfenoides", opcion: "Silla turca" },
    { concepto: "Maxilar", opcion: "Seno maxilar" }
  ], wiki: "https://es.wikipedia.org/wiki/Hueso" },

  { tipo: 'arrastrar', pregunta: "Relaciona el músculo con su función anatómica principal:", parejas: [
    { concepto: "Diafragma", opcion: "Separación de cavidades torácica y abdominal" },
    { concepto: "Elevador del ano", opcion: "Sostén del piso pélvico" },
    { concepto: "Intercostales externos", opcion: "Elevación de las costillas" }
  ], wiki: "https://es.wikipedia.org/wiki/Músculo" },

  { tipo: 'arrastrar', pregunta: "Relaciona el nervio craneal con su número:", parejas: [
    { concepto: "Nervio facial", opcion: "VII" },
    { concepto: "Nervio trigémino", opcion: "V" },
    { concepto: "Nervio hipogloso", opcion: "XII" }
  ], wiki: "https://es.wikipedia.org/wiki/Nervio_craneal" },

  { tipo: 'arrastrar', pregunta: "Relaciona la región anatómica con una estructura que contiene:", parejas: [
    { concepto: "Fosa infratemporal", opcion: "Músculo pterigoideo lateral" },
    { concepto: "Triángulo submandibular", opcion: "Glándula submandibular" },
    { concepto: "Fosa poplítea", opcion: "Nervio tibial" }
  ], wiki: "https://es.wikipedia.org/wiki/Región_anatómica" },
{ tipo: 'vf', pregunta: "El píloro comunica el estómago con el duodeno.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Píloro" },
  { tipo: 'vf', pregunta: "El corazón humano posee dos aurículas y dos ventrículos.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Corazón" },
  { tipo: 'vf', pregunta: "El músculo liso se encuentra en las paredes de órganos huecos y es involuntario.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Músculo_liso" },
  { tipo: 'vf', pregunta: "La tráquea se localiza anterior al esófago en el cuello.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Tráquea" },
  { tipo: 'vf', pregunta: "La córnea es una estructura transparente y avascular del ojo.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Córnea" },
  { tipo: 'vf', pregunta: "El riñón se ubica en la región retroperitoneal del abdomen.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Riñón" },
  { tipo: 'vf', pregunta: "El hígado está situado en el hipocondrio derecho y parte del epigastrio.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Hígado" },
  { tipo: 'vf', pregunta: "La médula ósea roja es el sitio principal de hematopoyesis en adultos.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Médula_ósea" },
  { tipo: 'vf', pregunta: "El intestino delgado mide aproximadamente 6 metros en adultos.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Intestino_delgado" },
  { tipo: 'vf', pregunta: "El páncreas se localiza transversalmente por detrás del estómago.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Páncreas" },
  { tipo: 'vf', pregunta: "La vesícula biliar se encuentra adherida a la cara inferior del hígado.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Vesícula_biliar" },
  { tipo: 'vf', pregunta: "El bazo se localiza en el hipocondrio izquierdo, entre el diafragma y el estómago.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Bazo" },
  { tipo: 'vf', pregunta: "El cráneo está compuesto por huesos planos unidos por suturas.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Suturas_del_cráneo" },
  { tipo: 'vf', pregunta: "El sistema esquelético adulto está formado por 206 huesos.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_esquelético_humano" },
  { tipo: 'vf', pregunta: "El líquido sinovial se encuentra en las cavidades articulares sinoviales.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Líquido_sinovial" },
  { tipo: 'vf', pregunta: "La médula espinal está contenida dentro del conducto vertebral.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Médula_espinal" },
  { tipo: 'vf', pregunta: "El sistema nervioso central está compuesto por el encéfalo y la médula espinal.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Sistema_nervioso_central" },
  { tipo: 'vf', pregunta: "El líquido cefalorraquídeo circula por el espacio subaracnoideo.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Líquido_cefalorraquídeo" },
  { tipo: 'vf', pregunta: "El nervio óptico atraviesa el conducto óptico del esfenoides.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Nervio_óptico" },
  { tipo: 'vf', pregunta: "El hueso hioides no se articula con ningún otro hueso.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Hueso_hioides" },
  { tipo: 'vf', pregunta: "El músculo diafragma separa la cavidad torácica de la abdominal.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Diafragma_(anatomía)" },
  { tipo: 'vf', pregunta: "El canal inguinal permite el paso del cordón espermático en el varón.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Canal_inguinal" },
  { tipo: 'vf', pregunta: "El nervio cubital pasa por detrás del epicóndilo medial del húmero.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Nervio_cubital" },
  { tipo: 'vf', pregunta: "El músculo supraespinoso se origina en la fosa supraespinosa de la escápula.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Músculo_supraespinoso" },
  { tipo: 'vf', pregunta: "El agujero oval del esfenoides permite el paso del nervio mandibular.", respuesta: true, wiki: "https://es.wikipedia.org/wiki/Agujero_oval" }
];

// --- Feedback y validación de respuestas ---
function mostrarFeedback(respuestaCorrecta, respuestaUsuario, wikiUrl, tipoPregunta, ejercicio) {
	let esCorrecta = false;
	if (tipoPregunta === 'completar' || tipoPregunta === 'vf') {
		esCorrecta = String(respuestaUsuario).trim().toLowerCase() === String(respuestaCorrecta).trim().toLowerCase();
	} else if (tipoPregunta === 'seleccion') {
		esCorrecta = respuestaUsuario === respuestaCorrecta;
	} else if (tipoPregunta === 'arrastrar') {
		esCorrecta = JSON.stringify(respuestaUsuario) === JSON.stringify(respuestaCorrecta);
	}
	const feedbackDiv = document.createElement('div');
	feedbackDiv.className = 'feedback-quiz';
	if (esCorrecta) {
		feedbackDiv.innerHTML = '<span style="color:green;font-weight:bold">¡Correcto!</span>';
		try { audioCorrecto.currentTime = 0; audioCorrecto.play(); } catch(e){}
	} else {
		try { audioIncorrecto.currentTime = 0; audioIncorrecto.play(); } catch(e){}
		let respuestaMostrada = '';
		if (tipoPregunta === 'seleccion' && Array.isArray(respuestaCorrecta)) {
			respuestaMostrada = ejercicio.opciones[respuestaCorrecta];
		} else if (tipoPregunta === 'seleccion' && typeof respuestaCorrecta === 'number' && ejercicio && ejercicio.opciones) {
			respuestaMostrada = ejercicio.opciones[respuestaCorrecta];
		} else if (tipoPregunta === 'vf') {
			respuestaMostrada = respuestaCorrecta ? 'Verdadero' : 'Falso';
		} else if (tipoPregunta === 'arrastrar') {
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
			'<br><button class="btn-wikipedia" onclick="window.open(\'' + wikiUrl + '\', \'_blank\')">Estudiar en Wikipedia</button>';
	}
	return feedbackDiv;
}

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
		copia.splice(idx, 1);
	}
	return seleccionadas;
}

let preguntasQuiz = [];
window.addEventListener('DOMContentLoaded', () => {
	preguntaActual = 0;
	puntaje = 0;
	preguntasQuiz = obtenerPreguntasAleatorias(ejerciciosQuiz, LIMITE_PREGUNTAS);
	mostrarPregunta();
});

// Inicializa el quiz si el script se carga después del DOM
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    preguntaActual = 0;
    puntaje = 0;
    preguntasQuiz = obtenerPreguntasAleatorias(ejerciciosQuiz, LIMITE_PREGUNTAS);
    mostrarPregunta();
}

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
	preguntaDiv.appendChild(inputElem);
	if (ejercicio.tipo !== 'arrastrar') {
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

window.addEventListener('DOMContentLoaded', mostrarPregunta);
