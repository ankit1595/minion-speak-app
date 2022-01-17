var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

function clickEventHandler() {
    console.log("clicked");
    console.log("Text inside text area - ", txtInput.value);
    txtOutput.innerText="Text will be copied from input " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);