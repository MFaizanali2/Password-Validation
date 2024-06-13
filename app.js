let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let confirm = document.getElementById("exampleInputPassword2");
let emailReg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function login(){
    event.preventDefault();
    if(emailReg.test(email.value) && passwordReg(password.value)){
        if(password.value === confirm.value){

        }else{
            alert("password not match");
        }
    }else{
        alert("password and email should not follow rule")
    }
}