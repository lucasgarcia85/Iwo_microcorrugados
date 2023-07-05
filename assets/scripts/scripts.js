//copyright year

document.querySelector(".year-copy").innerText = new Date().getFullYear();

// JS para que al clickear en nav items se cierre hamburguesa

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
// let limenu = document.querySelectorAll(".nav-item");
// for (i=0; limenu.length-1; i++){

// limenu[i].addEventListener("click", function(){

//     document.querySelector("#navbarNav").classList.remove("show");

// })
// }


AOS.init(); 