document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.block1 img, .block2 img, .block3 img',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: () => anime.random(0, 1500), 
        duration: (el, i) => i < 5 ? 1200 : 300, 
        easing: 'easeOutQuad'
    });
});