document.addEventListener('DOMContentLoaded',function(){
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const form = document.getElementById("Form")
    const msg = document.getElementById('msg')
    const erremail = document.getElementById("erremail")
    const errpass = document.getElementById("errpass")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    const succes = "succesfull"
    const errMsgemail = "Email is wrong format"
    const errMsgpassword = "password is invalid"

    form.addEventListener('submit',function(event){
        msg.innerHTML = ""
        erremail.innerHTML = ""
        errpass.innerHTML = ""

        event.preventDefault();
        if(email.value != "" && password.value != ""){
            if(emailRegex.test(email.value) && password.value.length >= 8){
                msg.innerHTML += succes;
            }
            else if(!emailRegex.test(email.value)){
                erremail.innerHTML += errMsgemail
            }
            else if(password.value.length <= 8){
                errpass.innerHTML += errMsgpassword
            }
        }
        else if(email.value == "" || password.value == ""){
            msg.innerHTML += "fill the inputs"
        }
    })
})