const form = document.getElementById('*Philhealth Identification Number');
const username = document.getElementById('*Last name');
const lastname = document.getElementById('*First name');
const email = document.getElementById('*Date of Birth');
const password = document.getElementById('*Sex');
const cpassword = document.getElementById('*Mobile number');
const cpassword = document.getElementById('*Preferred Password');
const cpassword = document.getElementById('*Confirm Password');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const Philhealth Identification NumberVal = Philhealth Identification Number.value.trim();
    const Last nameVal = lastname.value.trim();
    const First nameVal = First name.value.trim();
    const DateofBirthVal = Date of Birth.value.trim();
    const SexVal = Sex.value.trim();
    const Mobile numberVal = Mobile number.value.trim();
    const Preferred PasswordVal = Preferred Password.value.trim();
    const Confirm PasswordVal = Confirm Password.value.trim();

    // Philhealth Identification Number
    if( Philhealth Identification NumberVal === ""){
        setErrorMsg( Philhealth Identification Number, ' Philhealth Identification Number cannot be blank');
    }
    else if( Philhealth Identification NumberVal.length <=2){
        setErrorMsg( Philhealth Identification Number, 'min 3 char');
    }
    else{
        setSuccessMsg( Philhealth Identification Number);
    }

    //last name

    if(lastnameVal === ""){
        setErrorMsg(lastname, 'last name cannot be blank');
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname, 'min 3 char');
    }
    else{
        setSuccessMsg(lastname);
    }

    //First name
    if(First nameVal === ""){
        setErrorMsg(First name, 'First name cannot be blank');
    }
    else if(!isFirstname(First nameVal)){
        setErrorMsg(First name, 'First name is not valid');
    }
    else{
        setSuccessMsg(First name);
    }

    //Date of birth
    if(Dateofbirth(Val === ""){
        setErrorMsg(Date of birth, 'Date of birth cannot be blank');
    }
    else if(DateofbirthVal.length <= 7){
        setErrorMsg(Date of birth, 'min 8 char');
    }
    else{
        setSuccessMsg(Date of birth);
    }

    //Sex
    if(csexVal === ""){
        setErrorMsg(sex, 'sex cannot be blank');
    }
    else if(sexVal != csexVal){
        setErrorMsg(sex,);
    }
    else{
        setSuccessMsg(sex);
    }
    SuccessMsg(sexVal);

     //Email Address
    if(EmailAdress(Val === ""){
        setErrorMsg(Email Address, 'Email Address cannot be blank');
    }
    else if(EmailAddressVal.length <= 7){
        setErrorMsg(Email Address, 'min 8 char');
    }
    else{
        setSuccessMsg(Email Address);

    }

 //Mobile Number
    if(MobileNumber(Val === ""){
        setErrorMsg(Mobile Number, 'Mobile Number cannot be blank');
    }
    else if(MobileNumber.length <= 7){
        setErrorMsg(Mobile Number, 'min 8 char');
    }
    else{
        setSuccessMsg(Mobile Number);
    }

//Preffered Password
    if(PrefferedPassword(Val === ""){
        setErrorMsg(Preffered Password, 'Preffered Password cannot be blank');
    }
    else if(PrefferedPasswordVal.length <= 7){
        setErrorMsg(Preffered Password, 'min 8 char');
    }
    else{
        setSuccessMsg(Preffered Password);

    }

    /Confirm Password
    if(ConfirmPassword(Val === ""){
        setErrorMsg(Confirm Password, 'Confirm Password cannot be blank');
    }
    else if(ConfirmPasswordVal.length <= 7){
        setErrorMsg(Confirm Password, 'min 8 char');
    }
    else{
        setSuccessMsg(Confirm Password);




function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
