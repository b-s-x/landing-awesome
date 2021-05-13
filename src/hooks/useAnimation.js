import gsap, { Elastic } from "gsap";

export const useAnimation = (
  container,
  h1,
  container2
) => {

  const t1 = gsap.timeline({ paused: true, defaults: { duration: 0.05, ease: Elastic } });
  t1.to(container, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
  t1.to(container, { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }, "+=1");
  t1.to(h1, { color: 'white' })
  t1.to(container2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, "-=0.3");

  t1.play();
}