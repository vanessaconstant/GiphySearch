const userInput = document.getElementById("giphyInput");
const btnContainer = document.querySelector(".btn-container");
const giphyContainer = document.getElementById("giphyContainer");
const form = document.getElementById("searchBar");

// The click even is put on the container to avoid repeating the code
btnContainer.addEventListener("click", (event) => {
  clearResult();
  const keyword = event.target.innerText;
  getGiphys(keyword);
});

// The input change triigers a search
userInput.addEventListener("input", (event) => {
  event.preventDefault();
  clearResult();
  const keyword = event.target.value;
  getGiphys(keyword);
});

// If they hit enter in the search bar
form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearResult();
  const keyword = userInput.value;
  getGiphys(keyword);
});

// function get giphys based on the keyword inputed
function getGiphys(searchedWord) {
  const api_key = "gCnr1pgYbPRKDph8PBDa9Nd3Zb5li1dO";
  const request = `https://api.giphy.com/v1/gifs/search?q=${searchedWord}&api_key=${api_key}`;

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const result = data.data;

      for (let i = 0; i < 10; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", `${result[i].images.original.url}`);
        img.classList.add("image");
        giphyContainer.appendChild(img);
      }
    });
}

function clearResult() {
  if (giphyContainer.childNodes.length !== 0) {
    giphyContainer.innerHTML = "";
  }
}
