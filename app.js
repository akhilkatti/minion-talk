var txtInput = document.querySelector("#eng-input");
var submitBtn = document.querySelector("#btn-submit");
var outputTxt = document.querySelector("#output");

submitBtn.addEventListener('click',() => {
    outputTxt.textContent = txtInput.value;
});