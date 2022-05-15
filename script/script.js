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

var urls = [
    'https://viewplayer.online/embed/thebigbangtheory/',
    'https://viewplayer.online/embed/legacies/',
    'https://viewplayer.online/embed/moon-knight/',
    'https://viewplayer.online/embed/peakyblinders/',
];

for(let index = 0; index <= urls.length; index++) {
let iframe = document.getElementById('idIframe');
iframe.src = urls[index]
}


// var iframe = document.getElementById('thebigbangtheory');
// iframe1.src = urls[0];

// var iframe = document.getElementById('legacies');
// iframe2.src = urls[1];

// var iframe = document.getElementById('MoonKnight');
// iframe3.src = urls[2];

// var iframe = document.getElementById('peakyblinders');
// iframe4.src = urls[3];