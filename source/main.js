function codeappear() {
    document.getElementById("code").innerHTML="&#60;source code&#62;"
}

function codedisappear() {
    document.getElementById("code").innerHTML="&#60;&#62;"
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

function smoothscroll(element_css_selector){
    document.querySelector(element_css_selector).scrollIntoView({ 
  behavior: 'smooth' 
});
}
