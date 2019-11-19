;"use strict";


var NS = {
	test_func: function(){
		$("input[type=submit].btn").on("click", function(){
			if($("#CartCount span[data-cart-count]").text() !== "0"){
				$("#CartCount").removeClass("hide");
			}else{
				$("#CartCount").addClass("hide");
			}
		});
	},
	init: function(){
		this.test_func();
	}
};

$(window).on("load", function(){
	NS.init();
});
