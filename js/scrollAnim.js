 
window.addEventListener("scroll", scrolling);

document.addEventListener("DOMContentLoaded", scrolling);

let animItems = document.querySelectorAll(".anim_items");

function scrolling(e) {
  for (let i = 0; i < animItems.length; i++) {
    let animItem = animItems[i];

    if (isPartiallyVisible(animItem)) {
      animItem.classList.add("active");
    } else {
      animItem.classList.remove("active");
    }
  }
}

function isPartiallyVisible(el) {
  let elementBoundary = el.getBoundingClientRect();

  let top = elementBoundary.top;
  let bottom = elementBoundary.bottom;
  let height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}



