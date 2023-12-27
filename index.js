/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  // if (window.scrollY > 700) {
  //   isBackToTopRendered = true;
  //   alterStyles(isBackToTopRendered);
  // } else {
  //   isBackToTopRendered = false;
  //   alterStyles(isBackToTopRendered);
  // }
    var scrollPosition = window.scrollY;
    var header = document.getElementsByClassName('header');
    console.log("scrollPosition: ", scrollPosition);
    console.log("header", header);
    console.log("header.top size", header.top.style.backgroundSize, header.top.style.opacity);
    var newVal = Math.max(100 - scrollPosition/10, 0);
    header.top.style.opacity = newVal/100;
    console.log("header.top size after", header.top.style.backgroundSize, header.top.style.opacity, "new size", newVal);
});
