var input= document.querySelector("#txt-inpt");
var button= document.querySelector("#btn-trans");
var outPut= document.querySelector("#output");

button.addEventListener("click",eventHandler)
var serverUrl= "https://api.funtranslations.com/translate/minion.json"
function translateUrl(text)
{
    return serverUrl + "?" + "text=" + text
}
function eventHandler()
{
    var txtInput= input.value;
fetch(translateUrl(txtInput))
.then(response=> response.json())
.then(json=>{
    var translatedText=json.contents.translated;
      outPut.innerText= translatedText;
})

}