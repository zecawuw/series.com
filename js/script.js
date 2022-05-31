function mobileMenu(){
    document.getElementById("m-p").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block";
}

function mobileClose(){
    document.getElementById("m-p").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
}


function go(loc) {
    document.getElementById('idIframe').src = loc;
    document.getElementById('destaques').style.display = "none"
    document.getElementById("destaque").style.display = "none";
    document.getElementById("iFrame").style.display = "block";
    document.getElementById("atencao").style.display = "block";
}