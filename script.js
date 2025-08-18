// const hamburger = document.querySelector('.hamburger');
// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('open');
//   // Also toggle your menu visibility here
// });


const hamburger = document.getElementById('hamburger');
  const sideNav = document.getElementById('sideNav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    sideNav.classList.toggle('open');
  });

  function closeNav() {
    hamburger.classList.remove('open');
    sideNav.classList.remove('open');
  }

document.querySelectorAll("path").forEach(path => {
    const length = path.getTotalLength();
    path.setAttribute("stroke-dasharray", length);
    path.setAttribute("stroke-dashoffset", length);
  });

 // Animate continuously
anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 10000,
  // 2000 orginal
  delay: (el, i) => i * 500,
  direction: 'alternate',
  loop: true
});
// anime({
//   targets: 'svg',
//   scale: 0.5,
//   duration: 1000,
//   easing: 'easeOutExpo'
// });

const bg = document.querySelector(".bgAnime");
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    window.addEventListener("mousemove", (e) => {
      // Animate toward new mouse coords
      anime({
        targets: mouse,
        x: e.clientX,
        y: e.clientY,
        easing: "easeOutExpo",
        duration: 600,
        update: () => {
          let xPercent = (mouse.x / window.innerWidth) * 100;
          let yPercent = (mouse.y / window.innerHeight) * 100;
          bg.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #020D3B, #000000)`;
        }
      });
    });
