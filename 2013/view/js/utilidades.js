// ========================================================================  //
// Ficheiro con utilidades varias para o proxecto							 //
//  																		 //
// Autor: José Luis															 //
// ========================================================================  //

/* Utilidade para selects multiples 
 * Cando hai dous selects múltiple e dous botóns para mover elementos de un a outro
 * */
(function() {
	var multipleSelect = window.multipleSelect = {
			
			/* Constantes de inicialización */
			SELECT_CANDIDATOS_ID: "",
			SELECT_RELACIONADOS_ID: "",
			BOTON_ENGADIR_ID: "",
			BOTON_QUITAR_ID: "",
			FORMULARIO_ID:"",
			
			inicializar: function(selectCandidatosId, selectRelacionadosId, botonEngadirId, botonQuitarId, formularioId){
				multipleSelect.SELECT_CANDIDATOS_ID = selectCandidatosId;
				multipleSelect.SELECT_RELACIONADOS_ID = selectRelacionadosId;
				multipleSelect.BOTON_ENGADIR_ID = botonEngadirId;
				multipleSelect.BOTON_QUITAR_ID = botonQuitarId;
				multipleSelect.FORMULARIO_ID = formularioId;
				multipleSelect.asociar();
			},
			asociar: function(){
				$("#" + multipleSelect.SELECT_CANDIDATOS_ID + " option").dblclick(multipleSelect.quitarCandidatos);
				$("#" + multipleSelect.SELECT_RELACIONADOS_ID + " option").dblclick(multipleSelect.engadirCandidatos);
				$("#" + multipleSelect.BOTON_QUITAR_ID).click(multipleSelect.engadirCandidatos);
				$("#" + multipleSelect.BOTON_ENGADIR_ID).click(multipleSelect.quitarCandidatos);
				$("#" + multipleSelect.FORMULARIO_ID).unbind("submit");
				$("#" + multipleSelect.FORMULARIO_ID).submit(function(){
					$("#" + multipleSelect.SELECT_RELACIONADOS_ID +" option").attr("selected", true);
					});
			},
			engadirCandidatos: function(){
				$("#"+ multipleSelect.SELECT_RELACIONADOS_ID + " option:selected").each(function(){
					$("#" + multipleSelect.SELECT_CANDIDATOS_ID).prepend("<option value='" + $(this).attr("value") + ">" + $(this).html() + "</option>");
					$(this).remove();
				});
				$("#"+ multipleSelect.SELECT_CANDIDATOS_ID + " option").dblclick(multipleSelect.quitarCandidatos);
			},
			quitarCandidatos: function(){
				$("#"+ multipleSelect.SELECT_CANDIDATOS_ID + " option:selected").each(function(){
					$("#" + multipleSelect.SELECT_RELACIONADOS_ID).prepend("<option value='" + $(this).attr("value") + "'>" + $(this).html() + "</option>");
					$(this).remove();
				});
				$("#" + multipleSelect.SELECT_RELACIONADOS_ID +" option").dblclick(multipleSelect.engadirCandidatos);
			}
	}})();