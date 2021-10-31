var alpha = /^[A-Z a-z ]+$/




function validate_rform() {
    // Values
    var r_username, r_password, rc_password, r_name, r_email, number , male , female;

    r_username = document.getElementById("r_username").value;
    r_password = document.getElementById("r_password").value;
    rc_password = document.getElementById("rc_password").value;
    r_name = document.getElementById("r_name").value;
    r_email = document.getElementById("r_email").value;
    dob = document.getElementById("dob").value;
    number = document.getElementById("number").value;
    male = document.getElementById("male");
    female = document.getElementById("female");


    // Errors

    var r_usererror, r_perror, r_cperror, r_nameerror, r_mailerror, r_regierror, r_numbererror;

    r_usererror = document.getElementById("r_usererror");
    r_perror = document.getElementById("r_perror");
    r_cperror = document.getElementById("r_cperror");
    r_nameerror = document.getElementById("r_nameerror");
    r_mailerror = document.getElementById("r_mailerror");
    r_regierror = document.getElementById("r_regierror");
    r_numbererror = document.getElementById("r_numbererror");
    r_generror = document.getElementById("r_generror");
    r_doberror = document.getElementById("r_doberror");

    var caps = /^[A-Z]+$/
    var first_cap = r_name.charAt(0);

    var rflag = true;

    // username 
    if (r_username == "") {
        r_usererror.innerHTML = "* Username can't be Empty";
        rflag = false;
    } else if (r_username.length < 2 || r_username.length > 22) {
        r_usererror.innerHTML = "* Username must have 2 - 22 Characters";
        rflag = false;
    } else if (!(r_username.match(alpha))) {
        r_usererror.innerHTML = "* Only Alphabets are Avaliable";
        rflag = false;
    } else {
        r_usererror.innerHTML = "";
    }

    // password
    if (r_password == "") {
        r_perror.innerHTML = "* Password can't be Empty";
        rflag = false;
    } else if (r_password.length < 8 || r_password.length > 16) {
        r_perror.innerHTML = "* Password must have 8 - 16 Characters";
        rflag = false;
    }else {
        r_perror.innerHTML = "";
    }

    // confirm password
    if(rc_password == ""){
        r_cperror.innerHTML = "* Confirm Password can't be Empty";
        rflag = false;
    }else if(!(rc_password == r_password)) {
        r_cperror.innerHTML = "* Confirm Password should be same as Password";
        rflag = false;
    }else{
        r_cperror.innerHTML = "";
    }

    // Name
    if(r_name == ""){
        r_nameerror.innerHTML = "* Name can't be Empty";
        rflag = false;
    }else if(r_name.length < 2 || r_name.length > 22 ) {
        r_nameerror.innerHTML = "* Name must have 2 - 22 Characters";
        rflag = false;
    }else if(!(first_cap.match(caps))){
        r_nameerror.innerHTML = "* First letter of your name should be Capital";
        rflag = false;
    }else if(!(r_name.match(alpha))){
        r_nameerror.innerHTML = "* Only Alphabets are avaliable";
        rflag = false;
    }else{
        r_nameerror.innerHTML = "";
    }

    // email
    if(r_email == ""){
        r_mailerror.innerHTML = "* Email can't be Empty"
        rflag = false;
    }else{
        r_mailerror.innerHTML = ""
    }

    // number
    if(number == ""){
        r_numbererror.innerHTML = "* Number can't be Empty";
        rflag = false;

    }else if(!(number.length == 10)){
        r_numbererror.innerHTML = "* Number must have 10 Characters Only";
        rflag = false;
    }else{
        r_numbererror.innerHTML = "";
    }


    // gender
    if(male.checked == false && female.checked == false){
        r_generror.innerHTML = "* Please Select Gender";
        rflag = false;

    }else{
        r_generror.innerHTML = "";
    }


    // date
    if(dob == ""){
        r_doberror.innerHTML = "* Date can't be Empty";
        rflag = false;

    }else{
        r_doberror.innerHTML = "";
    }
    return rflag;
}











// Login Validations
function validateForm() {
    var l_username, l_password, luser_error, lpswd_error, flag;

    l_username = document.getElementById("l_username").value;
    l_password = document.getElementById("l_password").value;

    luser_error = document.getElementById("luser_error");
    lpswd_error = document.getElementById("lpswd_error");
    flag = true;




    // Username Validation

    if (l_username == "") {
        luser_error.innerHTML = "Username can,t be Empty";
        flag = false;
    } else if (l_username.length < 2 || l_username.length > 22) {
        luser_error.innerHTML = "Username must have 2 - 22 Characters";
        flag = false;
    } else if (!(l_username.match(alpha))) {
        luser_error.innerHTML = "Only Alphabets are Avaliable";
        flag = false;
    } else {
        luser_error.innerHTML = "";
    };

    // Password Validation

    if (l_password == "") {
        lpswd_error.innerHTML = "Password can,t be Empty";
        flag = false;
    } else if (l_password.length < 8 || l_password.length > 16) {
        lpswd_error.innerHTML = "Password must have 8 - 16 Characters";
        flag = false;
    } else {
        lpswd_error.innerHTML = "";
    };


    return flag;
}



