function validateName(){
    var name=document.getElementById("Commentname").value;
    if (name.length==0){
        // name.style.border="1px solid red";
        producePrompt("Name is required","commentNamePromt","red");
        document.getElementById("Commentname").style.border="1px solid red"

        return false;
   
    }
    if (name.match(/[0-9]/))
    {
        producePrompt("name must be letters","commentNamePromt","red");
        document.getElementById("Commentname").style.border="1px solid red"

        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
      
        producePrompt("Firstname Lastname please ","commentNamePromt","red");
        document.getElementById("Commentname").style.border="1px solid red"
        return false;
    }
   
        producePrompt("welcome "+name,"commentNamePromt","green");
      return true
}




function validatePhone(){
    var phone =document.getElementById("Commentphone").value;
    if (phone.length==0){
        producePrompt("phone number is required","commentphonePromt","red");
        document.getElementById("Commentphone").style.border="1px solid red"
        return false;
    }
    if(!phone.match(/^(77|73|71|70)([0-9]{7})$/))
    {
        producePrompt("phone number is invalid","commentphonePromt","red");
        document.getElementById("Commentphone").style.border="1px solid red"

        return false;
    }
else{
    producePrompt("vaild  phone number ","commentphonePromt","green");
    
    return true;}
}


function validateEmail(){
    var email=document.getElementById("Commentemail").value;
    if (email.length==0){
        producePrompt("email is required","commentemailPromt","red");
        document.getElementById("Commentemail").style.border="1px solid red"

        return false;
    }
    if(!email.match(/^[A-Za-z\.-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
    producePrompt("invaild  Email ","commentemailPromt","red");
    document.getElementById("Commentemail").style.border="1px solid red"

    return false;
        }
    producePrompt("vaild  Email ","commentemailPromt","green");
    
    return true;
}




function validateComment(){
    var comment=document.getElementById("commentMessges").value;
    var required=300; 
    var left=required-comment.length;
    if(left>0){
        producePrompt(left+"charcter required","commentmessagePromt","red");
        return false;
    }
    producePrompt("valid comment","commentmessagePromt","green");
    return true;
}



function validateCommentForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateComment())
    {
        jsShow("Submitform");
        producePrompt("information must be valid to submit","Submitform","red");
        setTimeout(function(){jshide("Submitform");},2000);
        // alert("unvslid");
    }
}
function jsShow(id){
    document.getElementById(id).style.display="block";
}


function jshide(id){
    document.getElementById(id).style.display="none";
}




function Age_validator(){
    var age=document.getElementById('age').value;
    if(age === "") {
      return true;
    }
    
    // convert age to a number
    age = parseInt(age, 10);
    
    //check if age is a number or less than or greater than 100
    if (isNaN(age) || age < 1 || age > 100)
    { 
        producePrompt("unvalid age","dob1","red");
        document.getElementById("age").style.border="1px solid red"

      return false;
    }
}
function producePrompt(message,promptLocation,color){
    document.getElementById(promptLocation).innerHTML=message;
    document.getElementById(promptLocation).style.color=color;

}