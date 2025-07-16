/** Libraría para a xestión de táboas */
(function() {
	var tooltip = window.tooltip = {
		inicializar: function() {
			var i = 0; // Contador de tooltips nunha páxina
			$(".tooltip").each(
				function() {
					/* Actualizamos o id */
					var id = "tooltip" + i;
					i++;
					$(this).attr("id", id);
					
					var texto = $(this).children("span:first").remove().html();
					var idContido = "contido" + id;
					
					var claseContido = "";
					if ($(this).attr("class").indexOf("marcaObrigatorio") != -1)
						claseContido = "tooltipObrigatorio";
					
					
					/* Creamos o div co contido (aparece oculto) */
					$("body").append("<div class=\"contidoTooltip " + claseContido + " select-free\" id=\"" + idContido + "\">" + texto +"</div>");
					
					$(this)
						.mouseover(function() {
							tooltip.posicionarTooltip(id);
							$("#" + idContido).show();
						})
						.mouseout(function() {
							tooltip.posicionarTooltip(id);
							$("#" + idContido).hide();
						});
				}
			);
		},
		
		/* Actualiza os manexadores dos tooltips */
		asociarTooltips:function() {
			$(".tooltip").each(
					function() {
						var id = $(this).attr("id");
						var idContido = "contido" + id;
						
						$(this)
							.mouseover(function() {
								tooltip.posicionarTooltip(id);
								$("#" + idContido).show();
							})
							.mouseout(function() {
								tooltip.posicionarTooltip(id);
								$("#" + idContido).hide();
							});
					}
				);
		},
		
		/** Reposiciona o tooltip con respecto ao elemento de enlace */
		posicionarTooltip:function(id) {
			var anchoCampo = $("#contido" + id).outerWidth();
			var anchoFiestra = $(window).width();
			
			var esquerdaEnlace = $("#" + id).offset().left;
			var anchoEnlace = $("#" + id).outerWidth();
			
			var esquerda = esquerdaEnlace + anchoEnlace;
			
			/* Se escapa pola dereita amosámolo á esquerda */
			if ((esquerda + anchoCampo) > anchoFiestra) {
				esquerda = esquerdaEnlace - anchoCampo;
			}
			
			var arriba = $("#" + id).offset().top;
			
			$("#contido" + id)
				.css("top", arriba + "px")
				.css("left", esquerda + "px");
		}
	};
})();


$(document).ready(tooltip.inicializar);
