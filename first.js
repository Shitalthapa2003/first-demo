gsap.from(".hero-title", {
    y: -50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
  
  gsap.from(".hero-subtitle", {
    y: 30,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    ease: "power2.out",
  });
  
  gsap.from(".btn", {
    scale: 0,
    opacity: 0,
    delay: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
  });
  