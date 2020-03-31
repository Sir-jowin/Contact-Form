// write our function that we returned in our form tag using the onsubmit

function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var errorText = document.getElementById('error-id');
    var message;

    errorText.style.padding = '20px';

    if(name.length < 3){
        message = "Enter A Valid Name"
        errorText.innerHTML = message
        return false
    }

    if(email.indexOf('@') == -1 || email.length < 7){
        message = "Enter A Valid Email Address"
        errorText.innerHTML = message
        return false
    }

    if(isNaN(phone) || phone.length < 11){
        message = "Enter A Valid Phone Number"
        errorText.innerHTML = message
        return false
    }

    alert('form sumitted successfully')

    return true
}

