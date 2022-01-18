var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

serverURL = "https://api.funtranslations.com/translate/?text=";

function getTranslationURL(text) {
    var textURL=serverURL+text;
    return textURL;
}
function errorHandler(){
    console.log("Error Occured",error);
    alert("Something wrong with server! please try again later!!!")
}
function clickEventHandler() {
    var URL=getTranslationURL(txtInput.value);
    fetch(URL)
    .then(response => response.json())
    .then(json => txtOutput.innerText=json.contents.text)
    .catch(errorHandler)
    ;
}

btnTranslate.addEventListener("click", clickEventHandler);