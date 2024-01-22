let randomImageButton = document.createElement("button");
randomImageButton.className = "image";
document.querySelector("#button-wrapper").append(randomImageButton);
randomImageButton.innerHTML = "RANDOM IMAGE";
randomImageButton.addEventListener("click", getImage);

function getImage() {
  var imagenes = document.querySelectorAll('img');

  // Recorre la lista de elementos <img> y elimínalos
  imagenes.forEach(function (img) {
    img.remove();
  });
  const random = Math.floor(Math.random() * 9 + 1);
  let image = document.createElement("img");
  image.className = "ranImg";
  image.src = `images/${random}.jpg`;
  document.querySelector("#photo-wrapper").append(image);
}
