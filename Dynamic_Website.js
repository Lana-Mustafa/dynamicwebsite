
function validation(){
    var uname =document.getElementById("username").value;
    var email =document.getElementById("email").value;
    var phone =document.getElementById("phoneno").value;
    var pass =document.getElementById("password").value;
    var check1 =document.getElementById("checkbox").value;
    var regexuname= /^[A-Za-z0-9_]{5,20}/
    var regexemail=/^[A-Za-z0-9]{2,20}@[A-Za-z]{2,10}.[A-Za-z]{2,3}/
    var regexphone=/^([009627]{6})([7-9]{1})([0-9]{7})/
    var regexpass=/^[A-Za-z0-9!@#$%^&*()?]?*{8,32}/



    if(regexuname.test(uname)){
        document.getElementById("username_err")
    }
    else{
        document.getElementById("username_err").innerHTML="Please Enter a Valid Username";
        return false;
    }
    
    if(regexemail.test(email)){
        document.getElementById("email_err")
    }
    else{
        document.getElementById("email_err").innerHTML="Please Enter a Valid Email";
        return false;
    }
    if(regexpass.test(pass)){
        document.getElementById("pass_err")
    }
    else{
        document.getElementById("pass_err").innerHTML="Please Enter a valid password";
        return false;
    }
    if(regexphone.test(phone)){
        document.getElementById("phoneno_err")
    }
    else{
        document.getElementById("phoneno_err").innerHTML="Please Enter a valid Jordanian phone number";
        return false;
    }

    if(check1==checked){
        document.getElementById("check_err")
    }
    else{
        document.getElementById("check_err").innerHTML="Please agree to our terms."
    }
}










