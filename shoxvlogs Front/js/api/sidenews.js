fetch("http://localhost:8080/api/new").then(r => r.json())
    .then(d => sidebarNews(d))

function sidebarNews(data) {
    for (let d of data.content) {
        let oneDiv = document.createElement("div");
        oneDiv.className = "media media-body media--card media--card-2";

        let twoDiv = document.createElement("div");
        twoDiv.className = "media-body";
        oneDiv.appendChild(twoDiv);

        let h5 = document.createElement("h5");
        h5.innerHTML = d.matn;
        h5.setAttribute('id', 'click')
        twoDiv.appendChild(h5);

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

let h5 = document.getElementById("click");
console.log(h5);