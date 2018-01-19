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

//Checkbox
$('input[type="radio"]').on('change', function() {
   $(this).siblings('input[type="radio"]').prop('checked', false);
});

// Password and Confirm Password
   $(function () {
        $(".submit").click(function () {
            var password = $("#pass").val();
            var confirmPassword = $("#c-pass").val();
            if (password != confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }
            return true;
        });
    });

// Email Validation 
$(document).ready(function(e) {
  $('.submit').click(function() {
    var sEmail = $('#email').val();
    // Checking Empty Fields
    if ($.trim(sEmail).length == 0 || $("#first-name").val()=="" || $("#last-name").val()=="") {
      alert('All fields are mandatory');
      e.preventDefault();
    }
    if (validateEmail(sEmail)) {
      alert('Nice!! your Email is valid, now you can continue..');
    }
    else {
      alert('Invalid Email Address');
      e.preventDefault();
    }
  });
});
  // Function that validates email address through a regular expression.
  function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
    return true;
    }
    else {
    return false;
  }
}

// Validation Form 
$(document).ready(function() {
  $("#register").click(function() {
    var fname = $("#first-name").val();
    var lname = $("#last-name").val();
    var uname = $("#username").val();
    var email = $("#email").val();
    var password = $("#pass").val();
    var cpassword = $("#c-pass").val();

    if (fname == '' || lname == '' || uname == '' || email == '' || password == '' || cpassword == '') {
      alert("Please fill all fields...!!!!!!");
    } else if ((password.length) < 8) {
      alert("Password should atleast 8 character in length...!!!!!!");
    } else if (!(password).match(cpassword)) {
      alert("Your passwords don't match. Try again?");
    } else {
      $.post("register.php", {
    name1: name,
    email1: email,
    password1: password
  }, function(data) {
    if (data == 'You have Successfully Registered.....') {
      $("form")[0].reset();
    }
    alert(data);
  });
}
});
});
