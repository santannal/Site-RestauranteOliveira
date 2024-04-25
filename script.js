//background

document.addEventListener('mousemove', function (e) {
    const background = document.querySelector('.background');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    background.style.backgroundPositionX = mouseX / window.innerWidth * 100 + '%';
    background.style.backgroundPositionY = mouseY / window.innerHeight * 100 + '%';
});

//animação
window.animacao = ScrollReveal({ reset: true });

animacao.reveal('.container.home', {
    duration: 2000,
    distance: '90px',
})

animacao.reveal('.navbar', {
    duration: 2000,
    distance: '90px',
})

animacao.reveal('.card.prato', {
    duration: 2000,
    distance: '90px',
})

animacao.reveal('.title-food', {
    duration: 2000,
    distance: '90px',
})

animacao.reveal('.container-fluid.suco', {
    duration: 2000,
    distance: '90px',
})

animacao.reveal('.custom-carousel', {
    duration: 2000,
    distance: '90px',
})

animacao.reveal('.carousel.slide', {
    duration: 2000,
    distance: '90px',
})