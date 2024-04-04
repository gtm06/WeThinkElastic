// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });





















var tl = gsap.timeline();

tl.from(
  "#loader img",
  {
    opacity: 0,
    duration: 0.1,
    delay: 0.2,
    stagger: 0.2,
  },
  "hi"
);
tl.to(
  "#loader img",
  {
    opacity: 0,
    duration: 0.1,
    delay: 0.333,
    stagger: 0.2,
  },
  "hi"
);
tl.to("#loader", {
  height: "0vh",
  ease: "power2",
});
tl.from(
  "nav svg",
  {
    opacity: 0,
  },
  "page1"
);
tl.from(
  "#hello h1",
  {
    y: 600,
    stagger: 0.1,
  },
  "page1"
);
tl.to("#page2 video", {
  y:-200,
  scale:2,
  scrollTrigger: {
    trigger: "#page2",
    start: "top 50%",
    end: "top -100%",
    pin: "#page2",
    scrub: 1,
  },
},);

tl.from("#page3-heading h1, #page3-heading h2,#page3-heading p",{
  y:200,
  duration:1,
  scrollTrigger: {
    trigger: "#page3",
    start: "-25% 10%",
    end: "-5% 0%",
    scrub: 2,
  },
})
tl.to("#page5 #h1",{
  x:-2100,
  scrollTrigger: {
    trigger: "#page5",
    start: "top 0%",
    end: "top -100%",
    pin: "#page5",
    scrub: 3,
  },
})

tl.from("#page8-txt h1",{
  y:200,
  duration:1,
  scrollTrigger: {
    trigger: "#page8",
    start: "-20% 10%",
    end: "-15% 0%",
    scrub: 2,
  },
})



const text = document.querySelector("#circle p")

text.innerHTML = text.innerText.split('').map(
  (char, i) => 
  `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');



// var crsr = document.querySelector("#main");

// crsr.addEventListener("mousemove", function (dets) {
//   console.log(dets.x)
//       // gsap.to("#cursor", {
//       //   left: dets.x,
//       //   top: dets.y,
//       // });  
//     });  
  












// var para = document.querySelector("#page4");


// para.addEventListener("mouseenter", () => {
//   crsr.style.display = "block";
// });

// para.addEventListener("mouseleave", () => {
//   crsr.style.display = "none";
// });

// para.addEventListener("mousemove", (e) => {
//   gsap.to("#cursor", {
//     left: e.x,
//     top: e.y,
    
//   });
// });
