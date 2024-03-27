import gsap from "gsap";

export const staggerReveal = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

export const staggerText = (links) => {
  gsap.fromTo(
    [...links],
    {
      y: 100,
    },
    {
      y: 0,
      delay: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    }
  );
};

export const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const fadeSideways = (node) => {
  gsap.from(node, {
    x: 150,
    duration: 1,
    delay: 0.75,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const handlePage = (page) => {
  gsap.to(cityBackground, {
    duration: 0,
    background: `url(${page}) center center`,
  });
  gsap.to(cityBackground, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });

  gsap.from(cityBackground, {
    duration: 0.4,
    // skewY: 2,
    transformOrigin: "right top",
  });
};
