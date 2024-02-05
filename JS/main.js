let menu_icon = document.querySelector('#menu_icon');
let menu = document.querySelector('.menu');

menu_icon.onclick = () => {
    menu_icon.classList.toggle('fa-times');
    menu.classList.toggle('active');
}