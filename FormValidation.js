function validateForm() {

    var name = document.forms["userform"]["uname"].value;
    var address = document.forms["userform"]["address"].value;
    var zipcode = document.forms["userform"]["zipcode"].value;
    var zipcodeno = /^\d{6}$/;
    var country = document.forms["userform"]["country"].value;
    var phone = document.forms["userform"]["phone"].value;
    var phoneno = /^\d{10}$/;
    var email = document.forms["userform"]["email"].value;
    var emailcheck = /^[0-9a-zA-Z_.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    var password = document.forms["userform"]["password"].value;
    var repassword = document.forms["userform"]["repassword"].value;
    var flag = true;          
    
    if (name == "") {
        document.getElementById("nameerror").textContent="Please enter your name";        
        flag = false;
    } else {
        document.getElementById("nameerror").textContent="";
    }      
    
    if (zipcode == "") {
        document.getElementById("ziperror").textContent="Please enter your zipcode";        
        flag = false;
    } else if(!zipcode.match(zipcodeno)){
        document.getElementById("ziperror").textContent="Enter a valid zipcode";
    } else {
        document.getElementById("ziperror").textContent="";
    }
    
    if (country == "nocountry") {
        document.getElementById("countryerror").textContent="Please select your country";        
        flag = false;
    } else {
        document.getElementById("countryerror").textContent="";
    }
    
    if(document.forms["userform"]["gender"][0].checked == false && document.forms["userform"]["gender"][1].checked == false) {
        document.getElementById("generror").textContent="Select your gender";        
        flag = false;
    } else {
        document.getElementById("generror").textContent="";
    }
    
    if(document.forms["userform"]["color"][0].checked == false && document.forms["userform"]["color"][1].checked == false && document.forms["userform"]["color"][2].checked == false) {
        document.getElementById("preferror").textContent="Please choose color";        
        flag = false;
    } else {
        document.getElementById("preferror").textContent="";
    }
    
    if (phone == "") {
        document.getElementById("phoneerror").textContent="Please enter your phone number";        
        flag = false;
    } else if(!phone.match(phoneno)){
        document.getElementById("phoneerror").textContent="Enter a valid phone number";
    } else {
        document.getElementById("phoneerror").textContent="";
    }
    
    if (email == "") {
        document.getElementById("emailerror").textContent="Please enter your email";        
        flag = false;
    } else if(!email.match(emailcheck)){
        document.getElementById("emailerror").textContent="Enter a valid email";
    } else {
        document.getElementById("emailerror").textContent="";
    }
    
    if (password == "") {
        document.getElementById("passerror").textContent="Please enter your password";        
        flag = false;
    } else if (password.length < 8) {
        document.getElementById("passerror").textContent="Password should be minimun of 8 characters";        
        flag = false;
    }else {
        document.getElementById("passerror").textContent="";
    }
    
    if (repassword == "") {
        document.getElementById("repasserror").textContent="Please enter your verify password";        
        flag = false;
    } else {
        document.getElementById("repasserror").textContent="";
    }
    
    if(password != repassword) {
       document.getElementById("passerror").textContent="Password and verify password should be same";        
        flag = false; 
    }
    
    
    return flag;

//  if(flag == true) {
//      document.getElementById("userform").submit();
//  } else {
//      
//  }
}