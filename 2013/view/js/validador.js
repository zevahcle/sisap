/**
 * Librería para a validación de formularios.
 * 
 * Estas funcións requiren que os formularios a validar teñan a seguinte estructura:
 * 
 * 	<div class="entrada">
 * 		<div class="etiqueta">...</div>
 * 		<div id="erros_idCampo">...</div>
 * 		<div class="campo">
 * 			<input ... id="idCampo"/>
 * 		</div>
 * 	</div>
 * 
 * Os métodos de validación engaden a clase "erro" ao div de "entrada" e escriben
 * no campo "erros_idCampo" a mensaxe de erro.
 * 
 * Os formularios con validación ajax para facer submit deben levar a clase 
 * validar. 
 * 
 * Depende de jquery 1.2.6.
 */

(function() {
	var validador = window.validador = {
			
		/* Constantes e inicialización ===================================================================== */
			
		URL_BASE: "",
		IMAXE_ESPERA: "",
		ERRO_REQUERIDO: "",
		
		/** Array asociativo que contén o estado das validacións AJAX */
		ESTADO_AJAX: new Object(),
		
		/** Asocia as validacións aos diferentes elementos */
		inicializar: function(
					url_base,
					imaxe_espera,
					erro_requerido) {
			validador.URL_BASE = url_base;
			validador.ERRO_REQUERIDO = erro_requerido;
			validador.IMAXE_ESPERA = imaxe_espera;
			validador.asociar();
		},
		
		/** Asocia a todos os elementos con clase */
		asociar: function() {
			$(".validadorRequerido").blur(
					function() {
						validador.requerido($(this).attr("id"));
					}
				);
			
			$(".validadorNif").blur(
					function() {
						validador.nif($(this).attr("id"));
					}
				).each(
					/* Inicializamos el estado AJAX */
					function() {
						validador.ESTADO_AJAX[$(this).attr("id")] = "";
					}
				);
			$(".validadorNifCif").blur(
					function() {
						validador.nifCif($(this).attr("id"));
					}
				).each(
					/* Inicializamos el estado AJAX */
					function() {
						validador.ESTADO_AJAX[$(this).attr("id")] = "";
					}
				);
			$(".validadorData").blur(
					function() {
						validador.data($(this).attr("id"));
					}
				).each(
						/* Inicializamos el estado AJAX */
						function() {
							validador.ESTADO_AJAX[$(this).attr("id")] = "";
						}
					);
			$(".validadorEmail").blur(
					function() {
						validador.email($(this).attr("id"));
					}
				).each(
						/* Inicializamos el estado AJAX */
						function() {
							validador.ESTADO_AJAX[$(this).attr("id")] = "";
						}
					);
			$(".validadorNumerico").blur(
					function() {
						validador.numerico($(this).attr("id"));
					}
				).each(
						/* Inicializamos el estado AJAX */
						function() {
							validador.ESTADO_AJAX[$(this).attr("id")] = "";
						}
					);
			$(".validadorNumericoDecimal").blur(
					function() {
						validador.numericoDecimal($(this).attr("id"));
					}
				).each(
						/* Inicializamos el estado AJAX */
						function() {
							validador.ESTADO_AJAX[$(this).attr("id")] = "";
						}
					);
			$("input[type=submit].validar").click(function(){
				$("form.validar").submit(function(){
					validador.validar();
					return ($("form .campoErroneo").size()) == 0;
				});
			});
			$("input[type=submit].nonValidar").click(function(){
				$("form.validar").unbind("submit");
			});
			
		},
		
		/** Valida o formulario */
		validar: function() {
			
			$(document).removeClass(".campoErroneo");
	
			var valido = true;
			
			/* Lista de elementos obrigatorios */
			var requeridos = $(".validadorRequerido");
			
			for (var i = 0; i<requeridos.length; i++) {
				valido = validador.requerido(requeridos[i].id) && valido;
			}
			/* Se non se pasaron as validación obrigatorias saimos */
			if (!valido) return false;
			
			/* Os campos con AJAX xa deberian estar validados ao pasar o usuario, se algún está marcado como erro saimos,
			 * se non consideramos que é válido  */
			for(clave in validador.ESTADO_AJAX){
				if (validador.ESTADO_AJAX[clave] == "erro") return false;
			}
			
			if (!valido && reintentar) {
				setTimeout("reintentarValidar();", 2);
			}
			validador.validacionsParametricas();
			return true;
		},
		
		/* Validacións ==================================================================================== */
		
		/** Valida que un campo non esté vacío */
		requerido: function(id) {
			if (validador.estaVacio(id)) {
				validador.marcarErro(id, validador.ERRO_REQUERIDO);
				return false;
			}else{
				validador.quitarErro(id);
			}
			
			return true;
		},
		/** Valida que se trate dun NIF */
		nif: function(id) {
			if (!validador.estaVacio(id))
				validador.requeridoUrl(id, "validarNIF.htm");
		},
		nifCif: function(id) {
			if (!validador.estaVacio(id))
				validador.requeridoUrl(id, "validarNIFCIF.htm");
		},
		/** Valida que se trate dunha data */
		data: function(id) {
			if (!validador.estaVacio(id))
				validador.requeridoUrl(id, "validarData.htm");
		},
		/** Valida que se trate dun email */
		email: function(id) {
			if (!validador.estaVacio(id))
				validador.requeridoUrl(id, "validarEmail.htm");
		},
		/** Valida que se trate dun valor numerico */
		numerico: function(id) {
			if (!validador.estaVacio(id))
				validador.requeridoUrl(id, "validarNumerico.htm");
		},
		numericoDecimal: function(id) {
			if (!validador.estaVacio(id))
				validador.requeridoUrl(id, "validarNumericoDecimal.htm");
		},
		requeridoIguais: function(idCampo1, idCampo2, texto) {
			if (!validador.estaVacio(idCampo1) && validador.valor(idCampo1) != validador.valor(idCampo2)) {
				validador.marcarErro(idCampo2, texto);
				return false;
			}
			//validador.quitarErro(idCampo2);
			return true;
		},
		
		
		/* Métodos de utilidade =============================================================== */
		
		/** Validacións a incluír no método validar en tempo de execución (por exemplo: requeridoIguais cos parametros adecuados)
		 */
		validacionsParametricas: function(){
			}
		,
		/** Validación contra unha URL do servidor */
		requeridoUrl: function(idCampo, url) {
			var valor = validador.valor(idCampo);
			validador.marcarEspera(idCampo);
			$.post(validador.URL_BASE + url, {campo: idCampo, valor: valor}, validador.callbackValidacionURL, "json");
		},
		/** Procesa a resposta dunha validación por URL */
		callbackValidacionURL: function(respuesta) {
			if (respuesta.respuesta == "ok") {
				validador.ESTADO_AJAX[respuesta.campo] = "ok";
				validador.quitarErro(respuesta.campo);
				return true;
			} else {
				validador.ESTADO_AJAX[respuesta.campo] = "erro";
				validador.marcarErro(respuesta.campo, respuesta.respuesta);
				return false;
			}
		},
		/** Marca o campo indicado como esperando validación */
		marcarEspera: function(id) {
			$('#erros_' + id).html('<img src="' + validador.IMAXE_ESPERA + '" alt="."/>');
		},
		/** Marca o campo indicado como erróneo e amosa o texto */
		marcarErro: function(id, texto) {
			var erros = $('#erros_' + id);
			var campo = $('#' + id);
			var erros = $('#erros_' + id).html();
			$('#erros_' + id).html(texto);
			
			$('#' + id).addClass("campoErroneo");
		},
		/** Desmarca o erro e quita o texto */
		quitarErro: function(id) {
			$('#erros_' + id).html("");
			$('#' + id).removeClass("campoErroneo");
		},
		/** Recupera o valor dun campo */
		valor: function(id) {
			return $('#' + id).val();
		},
		/** Comproba se está vacio un campo */
		estaVacio: function(id) {
			var valor = $('#' + id).val();
			return (valor == undefined || valor == "");
		}
	};
})();