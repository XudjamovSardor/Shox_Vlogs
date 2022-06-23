// <---------------------------------------------------------------------------------------> \\
let pathHash = window.location.hash.split("#")

console.log(pathHash);


fetch('http://localhost:8080/api/new/search/' + pathHash[1])
    .then(response => response.json())
    .then(data => matnDate(data));

// fetch('http://localhost:8080/api/onlinenew/false?type=YouTube&size=3')
//     .then(r => r.json())
//     .then(d => addShortIframe(d))


function matnDate(data) {
    let title = document.getElementById("title")
    title.innerText = data.matn


    let news = document.getElementById("origin");
    news.innerText = data.tuliqMalumot;

    let img = document.getElementById('img')
    img.src = 'http://localhost:8080/api/fail/download/' + data?.image?.id
    
    if (data.onlineYangilik) {
        let ifram = document.createElement('iframe');
        ifram.src = data.onlineYangilik
        ifram.className = 'col-lg-12';
        ifram.width = 424 + "px";
        ifram.height = 424 + "px";
        ifram.frameBorder = "0";
        ifram.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        ifram.allowFullscreen = true;
        
        document.getElementById('ifr').appendChild(ifram)
    }

    console.log(data);
}