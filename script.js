function typeEffect(element, text, speed) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);}}typing();}

window.onload = function() {
  const title = document.querySelector(".hero-title");
  const text = title.innerText;
  title.innerHTML = "";
  typeEffect(title, text, 80);};