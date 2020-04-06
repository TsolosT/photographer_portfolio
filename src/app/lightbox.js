// Get the modal
const modal = document.getElementById("galleryModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
const galleryImgs = document.querySelectorAll('.gallery__img');
const modalImg = document.getElementById("displayedImg");
const captionText = document.querySelector(".gallery__modal__caption");

galleryImgs.forEach(img=>{
    img.addEventListener('click',()=>{
         modal.style.display = "block";
         modalImg.src = img.src;
         captionText.innerHTML = img.alt;
    });
});
modal.addEventListener('click',()=>{
    modal.style.display = "none";
})
// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("modal__close")[0];
// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click',()=>{
  modal.style.display = "none";
});
modal.addEventListener('click',()=>{
    modal.style.display = "none";
})