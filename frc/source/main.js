function codeappear() {
    document.getElementById("code").innerHTML="&#60;source code&#62;"
}

function codedisappear() {
    document.getElementById("code").innerHTML="&#60;&#62;"
}

function smoothscroll(element_css_selector){
    document.querySelector(element_css_selector).scrollIntoView({ 
  behavior: 'smooth' 
});
}

function sizeIn(id) {
    document.getElementById(id).style.transform = ""
}

function sizeOut(id) {
    document.getElementById(id).style.transform = "scale(0.95, 0.95)";
}