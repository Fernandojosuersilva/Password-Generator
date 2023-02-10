const generateBtn = document.querySelector('#generate-btn');
const input = document.querySelector('#input');
const copyBtn = document.querySelector('#copy-btn');


generateBtn.addEventListener("click", function(){
    const password = generatePassword();
    input.value = password;
});

copyBtn.addEventListener("click", function(){
    input.select();
    document.execCommand("copy");
});



function generatePassword(){
    let password = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%^&*()_+-=][{}]@'~#.>,</?\|;:";
    for (let i = 0; i < 16; i++) {
        password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return password;
}