let aboutMe = document.querySelector(".about_animation");
let aboutText = aboutMe.innerText;

// 한글자 한글자 자름
let aboutSplit = aboutText.split("").join("</span><span aria-hidden='true'>");

aboutSplit = "<span aria-hidden='true'>" + aboutSplit + "</span>";
aboutMe.innerHTML = aboutSplit;

gsap.registerPlugin(ScrollTrigger);
let state = false;
let state1 = false;
let state2 = false;
let state3 = false;
let state4 = false;
let state5 = false;
const pageContents = document.getElementById("main");
const scroller = new LocomotiveScroll({
  el: pageContents,
  smooth: true,
});
scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContents, {
  scrollTop(value) {
    // about me
    if (scroller.scroll.instance.scroll.y > 150 && !state) {
      state = true;

      aboutMe.querySelectorAll("span").forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("show");
        }, 20 * (index + 1));
      });
    }

    gsap.registerPlugin(ScrollTrigger);

    //   script_card
    gsap.to(".title_box1", {
      scrollTrigger: ".sec1-6",
      top: "-2%",
      duration: 0.4,
    });
    gsap.to(".title_box2", {
      scrollTrigger: ".sec1-6",
      top: "-2%",
      duration: 0.6,
    });
    gsap.to(".title_box3", {
      scrollTrigger: ".sec1-6",
      top: "-4%",
      duration: 0.8,
    });
    gsap.to(".title_box4", {
      scrollTrigger: ".sec1-6",
      top: "-4%",
      duration: 1,
    });

    // contact
    gsap.to(".contact_cont", {
      scrollTrigger: ".contact_cont",
      scale: 4,
      rotation: 360,
      duration: 1.5,
    });

    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y - 4000;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: pageContents.style.transform ? "transform" : "fixed",
});

window.addEventListener("load", function () {
  let sec2WrapWidth = document.querySelector(".sec2_wrap").offsetWidth;
  let horizontal2 = sec2WrapWidth - window.innerWidth;

  gsap.to("#section2 .sec2_wrap", {
    scrollTrigger: {
      scroller: pageContents,
      scrub: true,
      trigger: "#section2",
      pin: true,
      start: "top",
      markers: true,
      end: sec2WrapWidth,
    },
    x: -horizontal2,
    ease: "none",
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});
