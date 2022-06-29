fetch("https://api.shoxvlogs.uz/api/reklama?size=3")
    .then(r => r.json())
    .then(d => addRekalama(d))


function addRekalama(d) {
    for (let data of d.content) {
        let img = document.createElement('img')
        img.src = "https://api.shoxvlogs.uz/api/fail/download/" + data?.image?.id
        img.className = "pt-4"
        img.height = 180
        img.width = 330

        let a = document.getElementById('rek')
        a.appendChild(img)
    }
}