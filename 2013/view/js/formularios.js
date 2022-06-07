
(function() {
	var formularios = window.formularios = {
		init: function() {
			$(".campoTexto").focus(function() {
				$(this).addClass("campoSeleccionado");
			}).blur(function() {
				$(this).removeClass("campoSeleccionado");
			});
		}
	};
})();