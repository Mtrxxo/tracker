let hamburgerIcon = document.querySelector(".hamburger-icon");
let closeIcon = document.querySelector(".close-icon");
let navMenu = document.querySelector(".unordered-list");

hamburgerIcon.addEventListener("click", function(){
    closeIcon.style.display = "block"
    hamburgerIcon.style.display = "none"
    navMenu.classList.toggle("active")
});

closeIcon.addEventListener("click", function(){
    closeIcon.style.display = "none"
    hamburgerIcon.style.display = "block"

    if (navMenu.classList.contains("active")){
        navMenu.classList.remove("active")
    }else {
        navMenu.classList.add("active")
    }
});