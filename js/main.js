	//for signup
	var eye = document.getElementById('eye');	
	var input = document.getElementById('pass');
 	function changeText(){
		"use strict";
 		if(eye.className === "fa fa-eye"){
 			eye.className = "fa fa-eye-slash";
 			input.type = "text";
 		}
 		else{
 			eye.className = "fa fa-eye";
 			input.type = "password";
		}
 	
 	}
	
	//for login
	var eye_login = document.getElementById('eye-login');	
	var input_login = document.getElementById('loginpass');
 	function changeLoginPassType(){
		"use strict";
 		if(eye_login.className === "fa fa-eye"){
 			eye_login.className = "fa fa-eye-slash";
 			input_login.type = "text";
 		}
 		else{
 			eye_login.className = "fa fa-eye";
 			input_login.type = "password";
		}
 	
 	}
	
//my jquery
$(document).ready(function(){
 	"use strict";	

 	 $("#email").focus(function(){
 	 	
 	 		$("#labelemail").css("top", "0");

 	 	
 	 });

 	 $("#email").blur(function(){
 	 	if($("#email").val().length === 0){
 	 		$("#labelemail").css("top", "35%");

 	 	}
 	 });


 	
 		
 		
//toLogin	
	$("#tologin").on("click", function(){
		$("#registerform").trigger("reset");
		$(".outer-box").css({"transform": "scale(0)"});
		$(".inner-box").css({"transform": " translate(-50%, -50%) scale(1)"});
		
	});
	
	
		
// 	//tosignup
	$("#tosignup").on("click", function(){
		$("#loginform").trigger("reset");
		$(".inner-box").css({"transform": "scale(0)"});
		$(".outer-box").css({"transform": " translate(-50%, -50%) scale(1)"});
		
			
	});

	$("#forgot-password-btn").on("click", function(){
		$(".registration").css("display", "none");
		$(".title h2").replaceWith("<h2>Forgot Password</h2>");
		$(".forgotbox").show().slideDown().fadeIn();
		
	});

	
		
	});//end main