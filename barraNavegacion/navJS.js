let nav__container = document.querySelector('.nav__container');

document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    nav__container.classList.toggle('active');
}
