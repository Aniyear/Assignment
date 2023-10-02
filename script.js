let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick = () =>  {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance: '50px',
    duration:1500,
    delay:450,
    reset:true
});

sr.reveal('.hero-text', {delay:200,  origin:'top'});
sr.reveal('.hero-img', {delay:450,  origin:'top'});
sr.reveal('.video', {delay:200,  origin:'right'});
sr.reveal('.icons', {delay:500,  origin:'left'});
sr.reveal('.scroll-down', {delay:200,  origin:'right'});
sr.reveal('.textbox', {delay:10,  origin:'right'});
sr.reveal('.textbox2', {delay:10,  origin:'right'});
sr.reveal('button', {delay:5,  origin:'bottom'});