
let seeMoreBtn = document.querySelector('.all_news');
let content = document.querySelector('.news');
let moreContent = document.querySelector('.more_news');

seeMoreBtn.addEventListener('click', function(e) {
  content.classList.toggle('show');
  if (seeMoreBtn.innerText === "Все новости") {
    moreContent.style.maxHeight = moreContent.scrollHeight + "px"; 
    seeMoreBtn.innerText = "Скрыть все новости";
  } else {
    moreContent.style.maxHeight = null;
    seeMoreBtn.innerText = "Все новости";
  }
})