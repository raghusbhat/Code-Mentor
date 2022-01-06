// Hamburger menu [for mobile view] drawer logic
const menu = document.querySelector("#menu");
const menuItem = menu.getElementsByTagName("li");
const button = document.getElementById('hamburger_btn');
var state = 'play';

var animation = lottie.loadAnimation({
  container: button,
  path: './hamburger.json',
  renderer: 'svg',     
  autoplay: false,
  loop: false,
});

// Hamburger menu drwaer effect & lottie animation logic
button.addEventListener("click", () => {
  menu.classList.toggle("-mt-36");
  menu.classList.add("z-50");
  menu.classList.replace("h-0", "h-full");


  if (state === 'play') {
    animation.playSegments([1, 100], true);
    state = 'pause'
  } else {
    animation.playSegments([101, 152], true);
    state = 'play'
  }

  for (var i = 0; i < menuItem.length; ++i) {
    menuItem[i].classList.toggle("-mt-28");
  }
});


// CTA button hover animation
const CTA = document.getElementById('hero_button');
CTA.addEventListener("mouseover",function(){
  t_cta = gsap.timeline();
  t_cta.to('#cta_arrow', { yoyo:true, x: 5, repeat: -1, ease: Power1.easeIn })
});

CTA.addEventListener("mouseout",function(){
  t_cta.seek(1);
  t_cta.kill();
});

// Hero girl hover animation
const girlHero = document.getElementById('girl_hero');
girlHero.addEventListener("mouseover",function(){
  gsap.to(girlHero, { scale: 1.2, rotate: 2, duration:2.5, ease: "elastic.out(1, 0.3)" })
});

girlHero.addEventListener("mouseout",function(){
  gsap.to(girlHero, { scale: 1, rotate:0, duration:2.5, ease: "elastic.out(1, 0.3)" })
});

// "Programming languages" hover animation
const pgm = document.getElementsByClassName('pgm_icons');
const pgm_tl = gsap.timeline();
for(i = 0; i< pgm.length; i++) {
    pgm[i].addEventListener("mouseover",function(e){
      console.log('in ', e.target)
    pgm_tl.to(e.target, { rotate: 2, duration:.2, ease: "power1.out" })
          .to(e.target, { rotate: -2, duration:.2, ease: "power1.in" })
          .to(e.target, { rotate: 0, duration:.2, ease: "power1.out" })

})};


// Carousel control Logic
var currentSlideNum = 0;
var slides = document.querySelectorAll("#slides");
var dots = document.querySelectorAll("#dots");
var slideLen = slides.length;
showSlide(currentSlideNum);

// For arrow buttons
function slideProgress (n, direction) {
  showSlide(currentSlideNum += n);

  //arrow animation
  const leftArrow = document.getElementsByClassName('left_arrow');
  const rightArrow = document.getElementsByClassName('right_arrow');
  if (direction === 'leftArrow') {    
    gsap.fromTo(leftArrow, {scale: 0.5}, {scale:1});
  } else {
    gsap.fromTo(rightArrow, {scale: 0.5}, {scale:1});
  };     

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
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("opacity-100", "opacity-50");    
  }

  //slide fade effect 
  gsap.fromTo(slides[slideNumber], {opacity:0, scale:0.99}, {opacity: 1, duration:0.2, scale:1, ease: "none"});
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

silverCard = document.getElementById('card1')
goldCard = document.getElementById('card2')
platCard = document.getElementById('card3')

silverCard.addEventListener("mouseover",function(){
  gsap.to(goldCard, {scale:.90})
  gsap.to(platCard, {scale:.99})
  gsap.to(silverCard, {scale:1.1})
});

silverCard.addEventListener("mouseout",function(){
  gsap.to(goldCard, {scale:1})
  gsap.to(platCard, {scale:1})
  gsap.to(silverCard, {scale:1})
});

platCard.addEventListener("mouseover",function(){
  gsap.to(goldCard, {scale:.90})
  gsap.to(platCard, {scale:1.1})
  gsap.to(silverCard, {scale:.99})
});

platCard.addEventListener("mouseout",function(){
  gsap.to(goldCard, {scale:1})
  gsap.to(platCard, {scale:1})
  gsap.to(silverCard, {scale:1})
});





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
const hero_tl = gsap.timeline();
hero_tl.from( '#girl_hero' , { duration: 1.5, yoyo:true, y: 15, repeat: -1, ease: Power1.easeInOut })
        .to( '#bg_blob', { duration: 100, rotation:360, repeat: -1} );


ScrollTrigger.matchMedia({


   //*******************  Tablets, Laptops & Desktops ******************* 

	"(min-width: 768px) and (max-width: 2000px)" : function() {
    let t1 = gsap.timeline({
      scrollTrigger: {
      trigger: "#work_section",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top 70%",
      end: "top 50%",
      toggleActions: "restart none none none",  
      onEnter: () => hero_tl.pause(2,false),
      onLeaveBack: () => hero_tl.play(2, false)
    }
  }); 
  t1.to("#girl_hero", {y: -600, duration:1,  opacity: 0})
    .to("#bg_blob", { y: -100,  opacity: 0, ease: "Power2.easeInOut"});
  
  // Hero text and CTA scroll animation   
  let t2 = gsap.timeline({
    scrollTrigger: {
    trigger: "#work_section",
    scroller: ".scrollContainer",
    scrub: 1,
    start: "top 80%",
    end: "top 60%",
    toggleActions: "restart none none none",  
    onEnter: () => hero_tl.pause(1,false),
    onLeaveBack: () => hero_tl.play(1, false)
  }
  });    
  t2.to("#hero_txt", {y: -300, duration: 2, opacity:0,ease: "Power2.easeInOut" })
    .to("#hero_desc", {y: -200, duration: 2, opacity:0, ease: "Power2.easeInOut"})
    .to("#hero_button", {y: -100, duration: 2, opacity:0, ease: "Power2.easeInOut"})
    .to("#hero_card", {opacity:0, duration: 1});

  
  // "How does it work section scroll animation"
  let t3 = gsap.timeline({
    scrollTrigger: {
    trigger: "#work_section",
    scroller: ".scrollContainer",
    scrub: 1,
    start: "top 90%",
    end: "top 60%",
  }
    }); 

    t3.from('#match_card', {duration: 2.5, opacity:0})
      .from('#tech_card', {x: -100, duration: 2.5, opacity:0, ease: "Power1.easeInOut"})      
      .from('#success_card', {x: 100, duration: 2.5, opacity:0, ease: "Power1.easeInOut"})


    // "Programming Languages" scroll animation
    let t4 = gsap.timeline({
      scrollTrigger: {
      trigger: "#programming_heading",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "restart none none none",  
    }
      }); 
  
      t4.from('.pgm', {scale: 0, opacity: 0, stagger: 0.1}, {scale: 1, opacity:1, ease: "Power1.easeInOut"});

    
    // Pricing cards scroll animation
    let t5 = gsap.timeline({
      scrollTrigger: {
      trigger: "#pricing_heading",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top 90%",
      end: "top 60%",
      toggleActions: "restart none none none",  
    }
      }); 
  
      t5.fromTo('.pricing_card', {scale: 0.5, opacity:0}, {scale: 1, opacity:1, duration: 2.5, stagger: 0.2, ease: "Power1.easeInOut"});

    // Footer scroll animation
    let t6 = gsap.timeline({
      scrollTrigger: {
      trigger: "#footer",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top bottom",
      end: "top 90%",
      toggleActions: "restart none none none",  
    }
      }); 
  
      t6.from('#footer', {y: 100, duration: 2.5, opacity:0,  ease: "elastic.out(1, 0.5)"});  

  }, 
  

  // ******************* Mobile ******************* 

	"(max-width: 767px)" : function() {
    let t1 = gsap.timeline({
      scrollTrigger: {
      trigger: "#work_section",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top 70%",
      end: "top 50%",
      toggleActions: "restart none none none",  
      onEnter: () => hero_tl.pause(2,false),
      onLeaveBack: () => hero_tl.play(2, false)
    }
  }); 
  t1.to("#girl_hero", {y: -600, duration:1,  opacity: 0})
    .to("#bg_blob", { y: -100,  opacity: 0, ease: "Power2.easeInOut"});
  
  // Hero text and CTA scroll animation   
  let t2 = gsap.timeline({
    scrollTrigger: {
    trigger: "#work_section",
    scroller: ".scrollContainer",
    scrub: 1,
    start: "top 80%",
    end: "top 60%",
    toggleActions: "restart none none none",  
    onEnter: () => hero_tl.pause(1,false),
    onLeaveBack: () => hero_tl.play(1, false)
  }
  });    
  t2.to("#hero_txt", {y: -300, duration: 2, opacity:0,ease: "Power2.easeInOut" })
    .to("#hero_desc", {y: -200, duration: 2, opacity:0, ease: "Power2.easeInOut"})
    .to("#hero_button", {y: -100, duration: 2, opacity:0, ease: "Power2.easeInOut"})
    .to("#hero_card", {opacity:0, duration: 1});

  
    // "How does it work" section scroll animation
  let t3 = gsap.timeline({
    scrollTrigger: {
    trigger: "#work_section",
    scroller: ".scrollContainer",
    scrub: 1,
    start: "top 70%",
    end: "top 20%",
    toggleActions: "restart none none none",  
  }
    }); 

    t3.from('#tech_card', {x: -50, duration: 2.5, opacity:0, ease: "Power1.easeInOut"})
      .from('#match_card', {x: 50, duration: 2.5, opacity:0, ease: "Power1.easeInOut"}, "+=5")
      .from('#success_card', {x: -50, duration: 2.5, opacity:0, ease: "Power1.easeInOut"}, "+=5");

    // "Programming Languages" scroll animation
    let t4 = gsap.timeline({
      scrollTrigger: {
      trigger: "#programming_heading",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "restart none none none",  
    }
      }); 
  
      t4.from('.pgm', {scale: 0, opacity: 0, stagger: 0.1}, {scale: 1, opacity:1, ease: "Power1.easeInOut", stagger: 0.5 });

       // Pricing cards scroll animation
    let t5 = gsap.timeline({
      scrollTrigger: {
      trigger: "#pricing_heading",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "restart none none none",  
    }
      }); 
  
      t5.fromTo('#card1', {scale: 0.5, opacity:0}, {scale: 1, opacity:1, duration: 1, ease: "none"})
       .fromTo('#card2', {scale: 0.5, opacity:0}, {scale: 1, opacity:1, duration: 1, ease: "none"}, "+=5")
        .fromTo('#card3', {scale: 0.5, opacity:0}, {scale: 1, opacity:1, duration: 1, ease: "none"}, "+=5");

            // Footer scroll animation
    let t6 = gsap.timeline({
      scrollTrigger: {
      trigger: "#footer",
      scroller: ".scrollContainer",
      scrub: 1,
      start: "top bottom",
      end: "top 90%",
      toggleActions: "restart none none none",  
    }
      }); 
  
      t6.from('#footer', {y: 100, duration: 2.5, opacity:0,  ease: "elastic.out(1, 0.5)"});
  } 
  
});




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
console.log("%cContact me at:  info@raghubhat.com","font-family:serif; font-size: 20px");
console.log("%c https://www.raghubhat.com ","font-family:serif; font-size: 15px");
console.log('')