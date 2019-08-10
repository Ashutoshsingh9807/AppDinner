$(document).ready(function() {
    $('#loginForm, #reg_tempAddress, .password-row, .login.form-buttons, .login.form-buttons').hide();
    /*adding click event for adding one more address bar */
    $(".show-temp-address").click(function(){
        $("#reg_tempAddress").slideDown(500);
        $('.show-temp-address').slideUp(500);
      });
      /*adding register form hide and login form show section */
      $(".to_register").click(function(){
        $('#registerForm').slideUp(500);
        $('#loginForm').slideDown(500);
      });
      $(".join-us").click(function() {
        $('#registerForm').slideDown(500);
        $('#loginForm').slideUp(500);
      });
    $(".btn-next").click(function(){
        $(".password-row").slideDown(500);
        $(".email-row").slideUp();
    })
    /* function for showing submit button */
    //creates a listener for when you press a key
    window.onkeyup = keyup;

    //creates a global Javascript variable
    var inputTextValue;

    function keyup(e) {
    //setting your input text to the global Javascript Variable for every key press
    inputTextValue = e.target.value;
    //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
    if (e.keyCode > 3) {
       $(".login.form-buttons").show();
    }
    }
				$('#reg_firstName').on('input', function() {
					var input=$(this);
					var is_Fname=input.val();
					if(is_Fname){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
        });
        $('#reg_lastName').on('input', function() {
					var input=$(this);
					var is_Lname=input.val();
					if(is_Lname){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
        });
        $('#reg_firstDigit').on('input', function() {
					var input=$(this);
					var reg_firstDigit=input.val();
					if(reg_firstDigit){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
        });
        $('#reg_secondDigit').on('input', function() {
					var input=$(this);
					var reg_secondDigit=input.val();
					if(reg_secondDigit){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
        });
        $('#reg_thirdDigit').on('input', function() {
					var input=$(this);
					var reg_thirdDigit=input.val();
					if(reg_thirdDigit){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
        });
        $('#reg_fourthDigit').on('input', function() {
					var input=$(this);
					var reg_fourthDigit=input.val();
					if(reg_fourthDigit){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				$('#reg_yourEmail').on('input', function() {
					var input=$(this);
					var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
					var is_email=re.test(input.val());
					if(is_email){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				$('#reg_perAddress').keyup(function(event) {
					var input=$(this);
					var reg_perAddress=$(this).val();
					if(reg_perAddress){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}	
        });
        $('#reg_tempAddress').addClass("valid");
        var form_data=$("#resgisterForm").serializeArray();
        
			$("#signUp").click(function(event){
          var error_free=true;
				for (var input in form_data){
					var element=$("#reg_"+form_data[input]['name']);
					var valid=element.hasClass("valid");
          var error_element=$("span", element.parent());
          
					if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
          else{error_element.removeClass("error_show").addClass("error");} 
        }
        
				if (!error_free){
					event.preventDefault(); 
				}
				else{
					alert('Form is submitted successfully');
				}
      });
      $("#signReset").click(function(){
        for (var input in form_data){
          var element=$("#reg_"+form_data[input]['name']);
          var error_element=$("span", element.parent());
					error_element.removeClass("error_show").addClass("error");
        }
      });
      
      /*dropdown res toggle */ 
      $(".has-submenu").click(function(){
        $(".submenu").toggleClass("show-div");
        $(this).toggleClass("minus-icon");
      });
      $(".toggle-icon").click(function(){
        $(".right-wrapper").toggleClass("show-div");
      });

      /*tabs js */
      $('#tabs li a:not(:first)').addClass('inactive');
        $('.container-tabs').hide();
        $('.container-tabs:first').show();
            
        $('#tabs li a').click(function(){
            var t = $(this).attr('id');
          if($(this).hasClass('inactive')){ //this is the start of our condition 
            $('#tabs li a').addClass('inactive');           
            $(this).removeClass('inactive');
            
            $('.container-tabs').hide();
            $('#'+ t + 'C').fadeIn('slow');
        }
        });
        
});