(function( $ ){
	$.fn.dropbar = function(){
		$('li', this).draggable({ helper: "clone" });

		$( "#dropbar" ).droppable({
	      drop: function( event, ui ) {
	      	var item = ui.draggable.attr('id');
	      	var aid = item.split('_')[1];
	      	if($('ul',this).size() == 0){
	        	$(this).append('<ul />');
	        }
	        $('ul',this).append('<li id="dropbaritem_'+aid+'" class="line_item"><div class="cancel">x</div><div class="infos">i</div><div>'+item+'</div></div>');
	      }
	    });

	    //dialog

	    $( "#dialog" ).dialog({
		      autoOpen: false,
		      show: {
		        effect: "blind",
		        duration: 1000
		      },
		      hide: {
		        effect: "explode",
		        duration: 1000
		      }
		    });

		//start event delegation to cancel apps from bar
		$('#dropbar').delegate('li.line_item .cancel','click',function(e){
			//var removedItem = $(this).parent().attr('id').split('_')[1];
			//alert('cancello l\'oggetto '+removedItem);
			$(this).parent().remove();
			if($('#dropbar ul li').size() == 0){
	        	$('#dropbar ul').remove();
	        }
		});

		$('#dropbar').delegate('li.line_item .infos','click',function(e){
			$( "#dialog" ).dialog( "open" );
		});
	};
})( jQuery );