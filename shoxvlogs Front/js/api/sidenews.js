fetch("http://localhost:8080/api/new").then(r => r.json())
    .then(d => sidebarNews(d))

function sidebarNews(data) {
    for (let i = data.content.length; i < 0; i--) {
        console.log(i);
        let oneDiv = document.createElement("div");
        oneDiv.className = "media media-body media--card media--card-2";

        let twoDiv = document.createElement("div");
        twoDiv.className = "media-body";
        oneDiv.appendChild(twoDiv);

        let h5 = document.createElement("h5");
        h5.innerHTML = d.matn;
        h5.setAttribute('id', 'key')
        h5.setAttribute('data-i', d.id)
        twoDiv.appendChild(h5);

        let a = document.createElement('a');
        a.href = $`#{d.id}`

        let small = document.createElement("small");
        small.className = "meta";
        small.innerHTML = d.date;
        twoDiv.appendChild(small);

        let span = document.createElement("span");
        span.className = "pr-1";
        small.appendChild(span);

        let news = document.getElementById("news");
        news.appendChild(oneDiv);
    }
}

function selectNews(id) {
    console.log(id);
    window.location.assign('./new.html#' + id)
    console.log(window.location);
}

let selectH5 = null

let newId = document.getElementById("news");
newId.addEventListener('click', e => {
    for (let i of e.path) {
        if (i.id == "key") {
            selectNews(i.dataset.i)
        }
    }
})


