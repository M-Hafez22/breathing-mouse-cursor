// Select cursor element
const cursor = document.querySelector(".cursor");

// Move the Curser with the original cursor
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", `top: ${e.pageY - 10}px;
                                left:${e.pageX - 10}px;`);
});

// Add animation on click
document.addEventListener('click', () => {
  cursor.classList.add("expand");
  // remove the animation Automaticly
  setTimeout( () => {
    cursor.classList.remove("expand");
  }, 500);
});
