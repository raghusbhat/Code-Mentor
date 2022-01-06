
// Hamburger menu [for mobile view] drawer logic
const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const menuItem = menu.getElementsByTagName("li");

button.addEventListener("click", () => {
  menu.classList.toggle("h-full");
  menu.classList.toggle("-mt-36");
  for (var i = 0; i < menuItem.length; ++i) {
    menuItem[i].classList.toggle("-mt-28");
  }
});


// Carousel control Logic
var currentSlideNum = 0;
var slides = document.querySelectorAll("#slides");
var dots = document.querySelectorAll("#dots");
var slideLen = slides.length;
showSlide(currentSlideNum);

// For arrow buttons
function slideProgress (n) {
  showSlide(currentSlideNum += n);
}

// For progress dots/bars
function dotsShow(n) {
  showSlide(currentSlideNum = n);
}


function showSlide (slideNumber) {  
  if (slideNumber > (slideLen - 1) ) {
    slideNumber = 0;
    currentSlideNum = slideNumber;
  } 
  if (slideNumber < 0 ) {
    slideNumber = slideLen - 1;
    currentSlideNum = slideNumber;
} 
  for (i = 0; i < slideLen; i++) {
    slides[i].classList.replace("flex", "hidden") 
    slides[i].classList.replace("opacity-0", "opacity-100") 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("opacity-100", "opacity-50");    
  }
  // slides[slideNumber].className = slides[slideNumber].className.replace(" hidden ", " flex ");
  slides[slideNumber].classList.replace("hidden", "flex");
  dots[slideNumber].className = dots[slideNumber].className.replace("opacity-50", "opacity-100");
}


// Pricing Cards Logic
let silver_monthly_button = document.getElementById('silver_monthly_button');
let silver_yearly_button = document.getElementById('silver_yearly_button');
silver_monthly_button.className = silver_monthly_button.className.replace("opacity-50", "opacity-100");


let gold_monthly_button = document.getElementById('gold_monthly_button');
let gold_yearly_button = document.getElementById('gold_yearly_button');
gold_monthly_button.className = gold_monthly_button.className.replace("opacity-50", "opacity-100");

let plat_monthly_button = document.getElementById('plat_monthly_button');
let plat_yearly_button = document.getElementById('plat_yearly_button');
plat_monthly_button.className = plat_monthly_button.className.replace("opacity-50", "opacity-100");

function pricing (price_type) {

  // Assign prices
  let silver_price = 20;
  let gold_price = 49;
  let plat_price = 99;

  let monthly = 1;
  let yearly = 12;

  switch(price_type) {
    case 'sliverMonthly':
      document.getElementById("#silver_price").innerHTML = '$' + calculate_price(silver_price,monthly) + '.00';
      silver_monthly_button.className = silver_monthly_button.className.replace("opacity-50", "opacity-100");
      silver_yearly_button.className = silver_yearly_button.className.replace("opacity-100", "opacity-50");
      break;
    case 'sliverYearly':
      document.getElementById("#silver_price").innerHTML = '$' + calculate_price(silver_price,yearly) + '.00';
      silver_yearly_button.className = silver_yearly_button.className.replace("opacity-50", "opacity-100");
      silver_monthly_button.className = silver_monthly_button.className.replace("opacity-100", "opacity-50");
      break;
    case 'goldMonthly':
      document.getElementById("#gold_price").innerHTML = '$' + calculate_price(gold_price,monthly) + '.00';
      gold_monthly_button.className = gold_monthly_button.className.replace("opacity-50", "opacity-100");
      gold_yearly_button.className = gold_yearly_button.className.replace("opacity-100", "opacity-50");
      break;  
    case 'goldYearly':
      document.getElementById("#gold_price").innerHTML = '$' + calculate_price(gold_price,yearly) + '.00';
      gold_yearly_button.className = gold_yearly_button.className.replace("opacity-50", "opacity-100");
      gold_monthly_button.className = gold_monthly_button.className.replace("opacity-100", "opacity-50");
      break; 
    case 'platMonthly': 
      document.getElementById("#plat_price").innerHTML = '$' + calculate_price(plat_price,monthly) + '.00';
      plat_monthly_button.className = plat_monthly_button.className.replace("opacity-50", "opacity-100");
      plat_yearly_button.className = plat_yearly_button.className.replace("opacity-100", "opacity-50");
      break;  
    case 'platYearly':
      document.getElementById("#plat_price").innerHTML = '$' + calculate_price(plat_price,yearly) + '.00';
      plat_yearly_button.className = plat_yearly_button.className.replace("opacity-50", "opacity-100");
      plat_monthly_button.className = plat_monthly_button.className.replace("opacity-100", "opacity-50");
      break; 
    default:
      break;
  }
}

//Calculate monthly/yearly price
function calculate_price (price, duration) {
  return total_price = price * duration;
}

// Get current year for copywright statement
let date =  new Date().getFullYear();
document.getElementById("#year").innerHTML = date


//GSAP register
gsap.registerPlugin(ScrollTrigger);

// ************************ ---------------------------- ************************ //
// Locomotive smooth scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".scrollContainer" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});


// ************************ ---------------------------- ************************ //
// GSAP Animation stuff

// Menu and logo load animation
 gsap.from( '.nav' , { duration: 2.5, ease: "elastic.out(0.8, 0.3)", y: -100, stagger: 1 } )


// Hero section load animation animation
gsap.fromTo('#bg_blob', {opacity: 0} , {opacity: 1, duration: 1});
gsap.fromTo('#girl_hero', {scale: 0},{scale: 1,  duration: 1, ease: "elastic.out(0.8, 0.5)", delay:.5} )

gsap.fromTo('.hero_heading', {y: 10, opacity: 0}, {y: 0, opacity: 1, duration: 1});
gsap.fromTo('.hero_desc', {y: -10, opacity: 0}, {y: 0, opacity: 1, duration: 1});
gsap.fromTo('.hero_button', {opacity: 0,scale: .5}, { opacity: 1, scale: 1,  duration: .5, ease: "expo.out", delay:.5});

// hero girl and background blob infinite yoyo and rotate
// gsap.to( '#bg_blob', { duration: 100, rotation:360, repeat: -1} );

crollTrigger.matchMedia({
  "(min-width: 800px)": function(){}
})



const hero_tl = gsap.timeline();
hero_tl.from( '#girl_hero' , { duration: 1.5, yoyo:true, y: 15, repeat: -1, ease: Power1.easeInOut })
        .to( '#bg_blob', { duration: 100, rotation:360, repeat: -1} );

// scroll behaviour for hero elements
const scroll_tl = gsap.timeline();

scroll_tl.to('#girl_hero', {
  y: -600,
  duration: 2.5,
  opacity: 0,
  scrollTrigger: {
    trigger: '#work_section',
    scroller: ".scrollContainer",
    start: "top 80%",
    markers: true,
    end: "top 10%",
    scrub: 1,
    toggleActions: "play none none none", //onEnter onLeave onEnterBack onLeaveBack                  
    onEnter: () => hero_tl.pause(2,false),
    onLeaveBack: () => hero_tl.play(2, false)
  }
})

.to('#bg_blob', {
  y: -200,
  duration: 2.5,
  ease: "expo.out",
  scrollTrigger: {
    trigger: '#work_section',
    start: "top 80%",
    end: "top 10%",
    scrub: 1,
    toggleActions: "restart none none none"               
  }
});

gsap.to('.hero_card', {
  y: -100,
  opacity: 0,
  duration: 2.5,
  ease: "expo.out",
  scrollTrigger: {
    trigger: '#work_section',
    start: "top 80%",
    end: "top 40%",
    scrub: true,
    scroller:".scrollContainer",
    toggleActions: "restart none reverse reverse",
    onComplete: () => ScrollTrigger.refresh()
  }
});

// "How does it work" section animation
const work_tl = gsap.timeline();
work_tl.from('.tech', {
  x: 600,
  duration: 2.5,
  opacity: 0,
  scrollTrigger: {
    trigger: '#how_does_it_work',
    start: "top 80%",
    end: "top 20%",
    scrub: 1,
    toggleActions: "restart reset reverse reverse" //onEnter onLeave onEnterBack onLeaveBack                  
  }
})
.fromTo('#work_section', {opacity: 1} , 
{opacity: 0, 
duration: 1,
scrollTrigger: {
  trigger: '#work_section',
  start: "top 10%",
  end: "bottom top",
  scrub: 1,
  toggleActions: "play none none none" //onEnter onLeave onEnterBack onLeaveBack                  
  // onEnter: () => hero_tl.pause(2,false),
  // onLeaveBack: () => hero_tl.play(2, false)
}
})

.from('.success', {
  x: -600,
  duration: 2.5,
  opacity: 0,
  scrollTrigger: {
    trigger: '#how_does_it_work',
    start: "top 80%",
    end: "bottom 50%",
    scrub: 1,
    toggleActions: "play none none none" //onEnter onLeave onEnterBack onLeaveBack                  
    // onEnter: () => hero_tl.pause(2,false),
    // onLeaveBack: () => hero_tl.play(2, false)
  }
})


 gsap.fromTo('.pgm', 
 {scale: 0}, 
 {scale: 1, stagger: 0.05, ease: "expo:out", 
  scrollTrigger:{
  trigger: '#program_div',
  start: "top 80%",
  end: "top 50%",
  scrub: 1,  
  toggleActions: "play none none none" 
 } })

 gsap.fromTo('#slides', 
 {scale: 0}, 
 {scale: 1, stagger: 0.05, ease: "expo:out", 
  scrollTrigger:{
  trigger: '#program_div',
  start: "top 80%",
  end: "top 50%",
  scrub: 1,  
  toggleActions: "play none none none" 
 } })

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


























// Easter egg :)
console.log('')
console.log(`
 █  █ █▀▀ █   █   █▀▀█ █ 
 █▀▀█ █▀▀ █   █   █  █ ▀ 
 █  █ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▄`)

console.log("%cThanks for visiting.","font-family:serif; font-size: 20px");
console.log("%cContact me at:  https://www.raghubhat.com","font-family:serif; font-size: 15px");
console.log('')