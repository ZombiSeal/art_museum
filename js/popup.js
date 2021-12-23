const popupLinks = document.querySelectorAll('.popup_link');
const header = document.querySelector('.header');
let unlock = true; // не было двойных нажатий

if (popupLinks.length > 0) {

    for (let i = 0; i < popupLinks.length; i++){
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function(e){
            const popupName =popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            header.style.display = 'none';
            popupOpen(curentPopup);
            e.preventDefault();
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.close');
if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function(e) {
            header.style.display = 'block';
            popupClose(el.closest('.popup'));
            e.preventDefault();
        })
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        curentPopup.classList.add('open');
        curentPopup.addEventListener('click', function(e){
            if (!e.target.closest('.popup_content')) {
                header.style.display = 'block';
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive) {
    if (unlock) {
        popupActive.classList.remove('open');
    }
}