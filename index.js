const passwordBox = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerCase = "abcdefghijklmnopqrstwxyz";
const number = "0123456789";
const symbols = "%$#@&*^!{}[]/|\?";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

   passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
