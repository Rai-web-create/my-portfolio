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
 const elements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight * 0.8;

    if (position < screenPosition) {el.classList.add("show");}});});
const light = document.querySelector(".light");

document.addEventListener("mousemove", (e) => {
  light.style.left = e.pageX + "px";
  light.style.top = e.pageY + "px";});

const sections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {const top = section.getBoundingClientRect().top;
      if(top < trigger){ section.classList.add('show');}});});
const works = document.querySelectorAll(".work-item");

window.addEventListener("scroll",()=>{

const trigger = window.innerHeight*0.85;

works.forEach(item=>{
const top = item.getBoundingClientRect().top;

if(top<trigger){
item.classList.add("show");}});});