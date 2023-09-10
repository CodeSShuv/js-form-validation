
let username = document.getElementById("user");
let password = document.getElementById("pass");
let label = document.getElementsByTagName("label");
let msg = document.getElementById("msg");
let passMsg =document.getElementById("passId");
let weak = document.getElementById("weak");
let medium = document.getElementById("medium");
let strong = document.getElementById("strong");
let veryStrong = document.getElementById("verystrong");
const validate = ()=>{

if((!username.value.trim() && !password.value)){
    msg.innerText ="Username and Password cannot remain blank";
    
    return false;
}
if(!password.value){    
    msg.innerText = "Password is required"
    return false;
}

return true;
}
const passStrength=()=>{
    if(password.value.length <= 5){
        weak.style.display = "block";
        medium.style.display = "none";
        strong.style.display = "none";
        veryStrong.style.display = "none";
    }if(password.value.length <=10 && password.value.length > 5 ){
        weak.style.display = "none";
        medium.style.display = "block";
        strong.style.display = "none";
        veryStrong.style.display = "none";
    }if ( password.value.length <= 15 && password.value.length > 10 ){
        weak.style.display = "none";
        medium.style.display = "none";
        strong.style.display = "block";
        veryStrong.style.display = "none";
    }if(password.value.length > 16){
        console.log('This')
        weak.style.display = "none";
        medium.style.display = "none";
        strong.style.display = "none";
        veryStrong.style.display = "block";
    }
}
