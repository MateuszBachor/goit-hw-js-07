import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((images) => `<div class="gallery__item"><a class = "gallery__link" href=${images.original}><img src = ${images.preview} class="gallery__image" alt = ${images.description}></a></div>`)
  .join("")
  gallery.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);
gallery.addEventListener("click",(event)=>{
    event.preventDefault();
  });
// const imageLink = event.target.dataset.source;
// if(event.target.tagName !== "IMG")return
//  basicLightbox.create(`
//     <img src=${imageLink}>
// `)
// .show()
// });

let lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250,
  captionsData: "alt"});
