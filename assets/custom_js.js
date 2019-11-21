;"use strict";


var NS = {
	test_func: function(){
		var t = false;
		$(".btn[type=submit]").on("click", function(){
			if($("#CartCount span[data-cart-count]").text() !== "0"){
				$("#CartCount").removeClass("hide");
			}else{
				$("#CartCount").addClass("hide");
			}	
			if(t == false){
				$("#CartCount").removeClass("hide");
			}
			t = true;
		});
	},
	init: function(){
		this.test_func();
	}
};

$(window).on("load", function(){
	NS.init();

	/*$("img.vsh_nearly_swatch").on("click", function(e){
		var $src = $(this).attr("src");
		var $srcset = $(this).attr("srcset");
		$(this).closest("li.grid__item").find("img.grid-view-item__image").attr("src", $src);
		$(this).closest("li.grid__item").find("img.grid-view-item__image").attr("srcset", $srcset);
	});*/

});
