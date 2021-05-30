(function () {
  const svg = document.querySelector(".confetti__image svg");
  const button = document.querySelector(".confetti__button");
  const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

  const colors = [
  "#4b7bec", // blue
  "#fc5c65", // red
  "#fed330", // yellow
  "#26de81", // green
  "#2bcbba", // sea
  "#fd9644", // orange
  "#a55eea" // violet
  ];
  const positions = [-200, -175, -150, -125, -100, -75, -50, 50, 75, 100, 125, 150, 175, 200];
  const shapes = [
  "M -20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0", // circle
  "M -20 0 a 20 20 0 1 0 40 0 Z", // semicircle
  "M -10 -10 H 20 V 20 H -10 Z", // square
  "M 0 -15 L 20 20 L -20 20 Z" // triangle
  ];
  const shapeCount = 16;
  const buttonTl = gsap.timeline();
  gsap.set(button, {
    transformOrigin: "50% 50%" });


  buttonTl.to(button, {
    scale: 0.975,
    repeat: 1,
    yoyo: true,
    duration: 0.15,
    ease: "Back.easeIn.config(1.5)" });

  buttonTl.pause();

  button.addEventListener("click", function (e) {
    buttonTl.play(0);

    var elements = [];

    for (let i = 0; i < shapeCount; i++) {
      var newElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
      newElement.setAttribute("d", gsap.utils.random(shapes));
      newElement.style.fill = gsap.utils.random(colors);
      svg.appendChild(newElement);
      elements.push(newElement);
    }

    function removeElements() {
      elements.forEach(shape => {
        svg.removeChild(shape);
      });
    }

    gsap.set(elements, {
      transformOrigin: "50% 50%",
      scale: "random(0.4, 1)" });

    gsap.to(elements, {
      onComplete: removeElements,
      keyframes: [{
        rotate: "random(-360, 360)",
        x: `random([${positions.join(",")}])`,
        y: `random([${positions.join(",")}])`,
        ease: "expo.out",
        duration: 3,
        stagger: {
          amount: 0.15 } },

      {
        opacity: 0,
        delay: -2.35 }] });


  });
})();