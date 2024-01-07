const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

function openModal(){
    modal.classList.add("active");
    overlay.classList.add("overlay-active");
};
function closeModal(){
    modal.classList.remove("active");
    overlay.classList.remove("overlay-active");
};