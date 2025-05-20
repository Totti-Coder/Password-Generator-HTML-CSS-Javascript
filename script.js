const passwordGen = document.querySelector(".password");
const copyPass = document.querySelector(".copy");
const btn = document.querySelector(".btn-box");
const copiedPass = document.querySelector(".copied");

//This function generates de password
function generatePassword() {
    copiedPass.classList.remove("visible");

    const characters = "QAZ*WS()XEDF{}RC![]?VTG*()BY!HNUJFGMI!?*KOLPq!?a[]*zwsxedc!?rvfv*!?gbych*{}?NUJm?*!ik{)}o!?lp*12!?{13}?!45912376!?}?";
    const length = 15;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        password += randomChar;
    }
    passwordGen.innerText = password;
}
// This function copies the password
copyPass.addEventListener("click", () => {
    if (passwordGen.innerText !== "") {
        navigator.clipboard.writeText(passwordGen.innerText)
            .then(() => {
                copiedPass.classList.add("visible");
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        alert("Nothing to copy...");
    }
});
// When you click, you call the function generatePassword
btn.addEventListener("click", generatePassword);