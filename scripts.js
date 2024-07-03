// scripts.js
gsap.timeline()
  .from(".logo1", { opacity: 0, scale: 0.5, duration: 1.5, ease: "elastic.out(1, 0.3)" })
  .from(".logo2", { opacity: 0, scale: 0.5, duration: 1.5, ease: "elastic.out(1, 0.3)", delay: 0.5 })
  .from(".welcome-text", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out", delay: 1 });

new Typed('.welcome-text', {
  strings: ["Welcome to Apache Server"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: false
});
