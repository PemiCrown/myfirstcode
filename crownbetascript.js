let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-magnifying-glass");

searchBox.addEventListener("click", ()=>{
   navbar.classList.toggle("showInput");
})