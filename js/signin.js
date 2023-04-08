function signup(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var user = {
    //     username : username,
    //     email : email,
    //     password : password,
    // }
    // var json = JSON.stringify(user);
    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    //  localStorage.setItem('foo', JSON.stringify({foo: 'bar'}));

    alert("Dang ky thanh cong")
    window.location.href="home.html"
}
function signin(){
    event.preventDefault();
    var Iusername = document.getElementById("username").value;
    var Iemail = document.getElementById("email").value;
    var Ipassword = document.getElementById("password").value;
    var user = localStorage.getItem("username");
    var mail = localStorage.getItem("email");
    var pass = localStorage.getItem("password");
    // var data = JSON.parse(user);
    if(Iusername == ""){
        alert("Vui long nhap Username va password")
    }
    else if (Iusername == user && Iemail == mail && Ipassword == pass){
        alert("Dang nhap thanh cong")
        window.location.href="home.html"
    }
    else{
        alert("Dang nhap that bai")
    }
}
function fb(){
    window.location.href="https://www.facebook.com/"
}
function gg(){
    window.location.href="https://accounts.google.com/v3/signin/identifier?dsh=S1560559716%3A1678937059784310&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=vi&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"
}
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords do not match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;





