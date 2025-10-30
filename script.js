 function locomotive (){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});
 
tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
  .from(
    ".line-3",
    { scaleX: 0, transformOrigin: "left center", ease: "none" },
    0
  )
  .to(".purple", { backgroundColor: "#28a92b" }, 0);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

 }
 


// vapis bheja 
var tl = gsap.timeline()
tl.from(".line h1", {
    y: 100,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.4
})
tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
        // timer
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0;
        setInterval(function () {
            if (grow < 100) {
                h5timer.innerHTML = grow++;
            }
            else {
                h5timer.innerHTML = grow
            }
        }, 45)

    }
})
tl.to(".line h2 ", {
    animationName: "anime",
    opacity: 0
})
tl.to("#loader", {
    opacity: 0,
    duration: 0.5,
    delay: 4.6
})

// page
tl.from("#page1", {
    delay: 0.3,
    y: 1600,
    opacity: 0,
    ease: Power4
})
tl.to("#loader", {
    display: "none"
})
tl.from("#nav", {
    opacity: 0,
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 120,
    stagger: 0.2
})
tl.from("#hero1,#page2", {
    opacity: 0
})
// loader khatam

// cusor
document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
        left: dets.x,
        top: dets.y
    })
});

Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
 
 function sheryAnimation(){  
    Shery.imageEffect(".image-div",{
        style:5,
        debug:true,
        gooey:true
    })
      }
  sheryAnimation();
    