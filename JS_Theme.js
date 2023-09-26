// nav bar
function handleNavBarDisplay(){
    const NavBar = document.querySelector('#NavBar');
    NavBar.classList.toggle('show');
}

// form validation
var form = document.forms['form'];
var form2 = document.forms['form2'];
var email = document.forms['form']['email'];
var email2 = document.forms['form2']['email2'];
var username = document.forms['form2']['username'];
var enquiry = document.forms['form2']['enquiry'];

var email_error = document.getElementById('email_error');

var email2_error = document.getElementById('email2_error');
var username_error = document.getElementById('username_error');
var enquiry_error = document.getElementById('enquiry_error');

email.addEventListener('textInput', email_error);
enquiry.addEventListener('textInput', enquiry_error);

form.addEventListener('submit', function(e) {
    return validation(e);
})

form2.addEventListener('submit', function(e) {
    return validation2(e);
})


function validation(e){

    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email_pattern.test(email.value)) {
        email_error.style.display = "block";
        email.focus();
        e.preventDefault();
        return false;
    } else {
        email_error.style.display = "none";
        alert('Thank you for signing up for our newsletter!');
        form.submit();
        return true;
    }

}


function validation2(e){

    const email2_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    if (username.value.length == 0){
        username_error.style.display = "block";
        username.focus();
        e.preventDefault();
        return false;
    } else {
        username_error.style.display = "none";
    }

    if (!email2_pattern.test(email2.value)) {
        email2_error.style.display = "block";
        email2.focus();
        e.preventDefault();
        return false;
    } else {
        email2_error.style.display = "none";
    }

    if (enquiry.value.length = 0 ){
        enquiry_error.style.display = "block";
        enquiry.focus();
        e.preventDefault();
        return false;
    } else {
        enquiry_error.style.display = "none";
    }

    alert('Your enquiry has been received!');
}
