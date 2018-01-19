// Canvas Menu 
$(document).ready(function() {
  $menuLeft = $('.pushmenu-left');
  $nav_list = $('#nav_list');
  
  $nav_list.click(function() {
    $(this).toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');
  });
});

// Font Awesome Placeholder
$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});

// Form Validation 
$(document).ready(function(){
  $("#login").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
// Checking for blank fields.
    if( username =='' || password ==''){
      $('input[type="text"],input[type="password"]').css("border","2px solid red");
      $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
      alert("Please fill all fields...!!!!!!");
    }else {
      $.post("login.php",{ username1: username, password1:password},
  function(data) {
    if(data=='Invalid Username.......') {
      $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
      $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
      alert(data);
    }
    else if(data=='Username or Password is wrong...!!!!'){
      $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
      alert(data);
    } else if(data=='Successfully Logged in...'){
      $("form")[0].reset();
      $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
      alert(data);
    } 
    else{
      alert(data);
    }
    });
  }
  });
});