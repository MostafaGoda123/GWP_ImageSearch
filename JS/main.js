let apiKey = 'NdpJgjdO4IGpq9oXL957kKwBCLsGoxQ5C-tjo1tKcKc'
let inputSearch = document.getElementById("inputSearch");
let form = document.querySelector("form");
let images = document.querySelector(".images");
let showMore = document.getElementById("showMore");
let keyword = "" ;
let page = 1

async function getImages() {
   keyword = inputSearch.value ;
   let res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=NdpJgjdO4IGpq9oXL957kKwBCLsGoxQ5C-tjo1tKcKc&per_page=12`)
   let data = await res.json()
   let results = data.results
   results.map(result => {
      let image = document.createElement("img")
      image.src = result.urls.small
      let linkImage = document.createElement("a")
      linkImage.href = result.links.html
      linkImage.target = "_blank"
      linkImage.appendChild(image)
      images.appendChild(linkImage);
   })
   showMore.style.display = "block"
}
form.addEventListener("submit",function (e) {
   e.preventDefault();
   images.innerHTML = ""
   page = 1 ;
   getImages()
})
showMore.addEventListener("click",function () {
   page++ ;
   getImages()
})


