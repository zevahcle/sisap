/** 
 * =============================================================================
 * Libraría para a xestión de lapelas
 * =============================================================================
 * 
 * As lapelas teñen a forma:
 * 
 * 	<div class="lapelas">
 * 		<div class="lapela" id="...">
 * 			<div class="lapelaNome">...</div>
 * 			<div class="lapelaContido">...</div>
 * 		</div>
 * 		
 * 		...
 * 
 *	</div>
 * 
 * Inicializar pasando a url a unha imaxe de erro para as lapelas.
 */
(function() {
	var lapelas = window.lapelas = {
			
		PATH_IMAXE_ERRO: "",
		
		/** Inicializa o formato das lapelas */
		inicializar: function(imaxeErro) {
			lapelas.PATH_IMAXE_ERRO = imaxeErro;
			
			
				/* Ocultamos as lapelas co nome */
				$(".lapelas .lapela .lapelaNome").hide();
				
				/* Se hai máis de unha lapela créanse */
				if($(".lapela") != null && $(".lapela").length > 1){	
					/* Creamos a cabeceira coas entradas nunha lista */
					$(".lapelas").each(function() {
						var id = $(this).attr("id") + "tabs";
						$(this).prepend("<div id=\"" + id + "\"><ul class=\"tabsLapelas\"></ul></div>");
						$(this).find(".lapelaNome").each(function(){
							
							var novoId = $(this).parent().attr("id") + "tab";
							var texto = $(this).text();
							
							$("#" + id + " ul").append("<li id=\"" + novoId + "\">" + texto + "</li>");
							
							/* Comprobamos se hai erros para marcalo na lapela */
							var erros = $(this).parent().find(".campoErroneo");
							if (erros.length != 0) $("#" + novoId).addClass("lapelaConErros");
						});
					});
					
					/* Engadimos os manexadores */
					$(".tabsLapelas li").each(function() {
						var texto = $(this).text();
						var contido = "<a href=\"#lapelas\">" + texto + "</a>";
						
						if ($(this).hasClass("lapelaConErros")) {
							contido = contido + "&nbsp;<img src=\"" + lapelas.PATH_IMAXE_ERRO + "\" alt=\"!\"/>";
						}
						
						$(this).html(contido);
						
						$(this).children("a").click(function() {
							
							/* Marcamos os li irmáns como non activos */
							$(this).parent().siblings("li").each(function() {
								$(this).removeClass("activa");
								var idContidoIrman = lapelas.obterIdContido($(this).attr("id"));
								$("#" + idContidoIrman + " .lapelaContido").hide();
							});
							
							var idContido = lapelas.obterIdContido($(this).parent().attr("id"));
							$("#" + idContido + " .lapelaContido").show();
							$(this).parent().addClass("activa");
						});
					});
					
					/* Escollemos a primeira */
					if ($(".tabsLapelas .lapelaConErros").length != 0) {
						$(".tabsLapelas li.lapelaConErros:first a").click();
					} else {
						$(".tabsLapelas li:first a").click();
					}
				}else{
					/* Soamente hai unha lapela, quitase a clase lapelaContido */
					$(".lapelaContido").removeClass("lapelaContido");
				}
		},
		obterIdContido: function(idEnlace) {
			/* Quitamos o termo "tab" do id para obter o orixinal */
			var idContido = idEnlace;
			idContido = idContido.substr(0, idContido.length-3);
			return idContido;
		}
	};
})();


