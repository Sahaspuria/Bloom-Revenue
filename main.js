

    function openNav() {
        document.getElementById("nav").style.width = "100vw";
    }
    function closeNav() {
        document.getElementById("nav").style.width = "0";
    }
// -------------------

// Contact-form validation
function validation(){
const Fname = document.getElementById('FName').value;
const Email = document.getElementById('Email').value;
const Phone = document.getElementById('Phone').value;
const websiteURL = document.getElementById('websiteURL').value;
const companyName = document.getElementById('companyName').value;
const mailSubject = document.getElementById('mailSubject').value;
const mailMessage = document.getElementById('mailMessage').value;


if(Fname === ""){
    document.getElementById('nameError').innerHTML=" Please enter your Name";
    return false
}else if(Fname.length < 6 || Fname.length  > 20){
    document.getElementById('nameError').innerHTML=" Enter between 6-20 Characters";
    return false;
};



if(Email === ""){
    document.getElementById('emailError').innerHTML=" Please enter your Email Address";
    return false;
}else if(Email.indexOf('@')==0){
    document.getElementById('emailError').innerHTML="Invalid Characters";
    return false;
};


if(typeof Phone === "number" || Phone.length<9){
    document.getElementById('numberError').innerHTML=" Please enter your Phone Number";
    return false;
}
if(websiteURL === ""){
    document.getElementById('websiteError').innerHTML=" Please enter your Website's URL";
    return false;
}
if(companyName === ""){
    document.getElementById('companyNameError').innerHTML=" Please enter your Company's name";
    return false;
}
if(mailSubject === ""){
    document.getElementById('mailSubjectError').innerHTML=" Please enter Subject";
    return false;
}
if(mailMessage === ""){
    document.getElementById('mailMessageError').innerHTML=" Please enter your Message";
    return false;
}


}