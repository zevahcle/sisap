/** Libraría para a xestión de táboas */
(function() {
	var taboa = window.taboa = {
		/** Inicializa o formato das táboas */
		inicializar: function() {
			/* Aspecto zebra */
			$("table.alternar tr:even td").addClass("impar");
			$("table.alternar tr:odd td").addClass("par");
			
			/* Destacar a fila actual */
			$("table.destacar tr").hover(
					function() {
						$(this).children("td").addClass("encima");
					},
					function() {
						$(this).children("td").removeClass("encima");
					}
			);
			
			/* Ordeación por columna */
			$("table.taboa th.ordenable")
				.addClass("estiloOrdenable");
			
			
			/* Xestión das cabeceiras para ordeación */
			$("table.taboa").each(
					function() {
						var $table = $(this);
						$("th", $table).each(
								function(column) {
									if ($(this).is(".ordenable")) {
										$(this)
											/* Pulsación nunha cabeceira */
											.click(
												function() {
													/* Convertimos as filas nun array e invocamos o método de ordeación */
													var rows = $table.find('tbody > tr').get();
													rows.sort(function(a, b) {
														var keyA = $(a).children('td').eq(column).text().toUpperCase();
														var keyB = $(b).children('td').eq(column).text().toUpperCase();
														if (keyA < keyB) return -1;
														if (keyA > keyB) return 1;
														return 0;
													});
													/* Recorremos o array e engadimos os elementos de forma ordeada */
													$.each(rows, function(index, row) {
														$table.children('tbody').append(row);
													});
													
													/* Reconfiguramos os estilos */
													$("table.taboa tr:even td").removeClass("par").addClass("impar");
													$("table.taboa tr:odd td").removeClass("impar").addClass("par");
													
													// Correción para as paxinables
													
													$("table.taboa .controisPaxinable").each(
															function() {
																if ($(this).is(".par"))
																	$(this).removeClass("par");
																if ($(this).is(".impar"))
																	$(this).removeClass("impar");
															}
													);
												}
											);
									}
								}) 
					}
			);
		}
	};
})();

$(document).ready(taboa.inicializar);

