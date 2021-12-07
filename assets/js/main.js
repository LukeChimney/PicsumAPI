console.log("test")
let output = document.getElementById("output")
function getData(){
    fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(elt => {
            output.innerHTML += `
            <img src="${elt.download_url}" alt="">
            <figcaption> ${elt.author}</figcaption>`
        })
    })
    .catch(err => console.log(err))
}
getData()