const iconMenu = document.querySelector('.menu_icon');
const menuContent = document.querySelector('.header_nav');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('active');
        menuContent.classList.toggle('active');   
    })
}

const menuLinks = document.querySelectorAll(".header_link");

if (menuLinks.length > 0) {
    menuLinks.forEach(function(menuLink){
        menuLink.addEventListener("click", function(e){
            if (iconMenu.classList.contains('active')) {
                iconMenu.classList.remove('active');
                menuContent.classList.remove('active');
            }
        });
    });
}

