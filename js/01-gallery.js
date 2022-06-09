import { galleryItems } from './gallery-items.js'

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((images) => `<div class="gallery__item"><a class = "gallery__link" href=${images.original}><img src = ${images.preview} data-source=${images.original} alt = ${images.description}></a></div>`)
  .join("")

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click",(event)=>{
event.preventDefault();
const imageLink = event.target.dataset.source;
if(event.target.tagName !== "IMG")return
 basicLightbox.create(`
    <img src=${imageLink}>
`)
.show()
});