var txtInput = document.querySelector("#eng-input");
var submitBtn = document.querySelector("#btn-submit");
var outputTxt = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text 
}

function errorHandler(err) {
    console.log("error occured" + err)
    alert("something went wrong, please try again later.")
}

function clickHandler() {
    var input = txtInput.value

    fetch(getTranslationURL(input))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated
            outputTxt.innerText = translatedTxt
        })
        .catch(errorHandler)
}


submitBtn.addEventListener('click', clickHandler);