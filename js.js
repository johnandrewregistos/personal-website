const nav = document.querySelector("#nav");
const menuBtn = document.querySelector('#main-menu-button');
const menu = document.querySelector('#main-menu');


window.onscroll = () => {
  menu.classList.add('hidden');
};


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});