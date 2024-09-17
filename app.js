let html = document.querySelector("#html");
let css = document.querySelector("#css");
let js = document.querySelector("#js");
let output = document.querySelector("#output");
function runcode(){
    output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";  // To access and manipulate the body of the document contained within the <iframe> tag
    output.contentWindow.eval(js.value);   // To execute JavaScript code within the context of the iframe’s window.
};
html.onkeyup = () => {   //The onkeyup event in JS is triggered as soon as the user releases a key on the keyboard
    runcode();
}
css.onkeyup = () => {
    runcode();
}
js.onkeyup = () => {
    runcode();
}
