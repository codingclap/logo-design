
// $('.slider').mouseenter(function(){
//    let currentSlide = 0;
//    var slideItemWidth =0;

//  var id = $(this).attr("id");
//  const sliderContainer = document.querySelector(".mainslides"+id);
//  const sliderImage = document.querySelectorAll(".slideItems"+id); 
//  const next = this.querySelector(".next");
//  const prev = this .querySelector(".prev");
//  const navDots = this.querySelector(".nav-dots");
//  let NoOfImages = sliderImage.length;
//  let sliderWidth = sliderImage[0].clientWidth;


//  $('.slideItems'+id).attr("style","width:"+ $('.slider').width()+"px;");
//     var  slideItemWidth = $(this).width();
//     sliderContainer.style.width = slideItemWidth * NoOfImages +"px";
 
//     $(window).resize(function() {
//        $('.slideItems'+id).attr("style","width:"+$('.slider').width()+"px;");
//         slideItemWidth = $(this).width();
//         sliderContainer.style.width = slideItemWidth * NoOfImages +"px";
//     });

//     init();
//     function init(){
//           sliderImage.forEach((img, i) => {
//             //   console.log(img);
//           });

//           sliderImage[0].classList.add('active');
//           createNavDots();
//        }
      
     

//       function createNavDots(){
//               for(let i = 0;i < NoOfImages; i++){
//                  const dot = document.createElement("li");
//                  console.log(navDots);
//                  dot.classList.add("dot");
//                  navDots.appendChild(dot);
//               }
//               navDots.children[0].classList.add("active");
//           }

//    next.addEventListener("click", ()=> {
//      if(currentSlide >= NoOfImages - 1){
//         goToSlides(0);
//         currentSlide = 0;
//         return;
//      }
//         currentSlide++;
//         goToSlides(currentSlide);
//      });

//    prev.addEventListener("click", ()=> {
//     if(currentSlide <= 0){
//        goToSlides(NoOfImages - 1);
//        currentSlide = NoOfImages - 1;
//        return;
//     }
//        currentSlide--;
//       goToSlides(currentSlide);
//     });


//     function goToSlides(slideNo){

//       //   alert($('.slider').width());
//           sliderContainer.style.transform = "translateX(-" + $(this).width() * slideNo +"px)";
//           sliderContainer.style.transition = "0.3s ease-in-out";
//           sliderContainer.style.width = $(this).width() * NoOfImages +"px";
//           currentSlide = slideNo;
//           setActiveClass();
//        }
      
//       function setActiveClass(){
      
//       //     Set active class for Slide Image
//           let currentActive = document.querySelector(".slideItems"+id+".active");
//           currentActive.classList.remove("active");
//           sliderImage[currentSlide].classList.add('active');
      
//       //    Set active class for Slide Dots
//           let currentDots = document.querySelector(".dot.active");
//           currentDots.classList.remove("active");
//           navDots.children[currentSlide].classList.add('active');
      
//       }




      
// // /*************** SLider A tag URL Change ***********/

// next.addEventListener("mouseenter", ()=> {
//    var OldUrl = $('.anchor'+id).attr("OldUrl");
//     $('.anchor'+id).attr("OldUrl",OldUrl);
//     $('.anchor'+id).attr("href","javascript:void(0)");
//  });

 
// next.addEventListener("mouseleave", ()=> {
//    var OldUrl = $('.anchor'+id).attr("OldUrl");
//     $('.anchor'+id).attr("href",OldUrl);
//    $('.anchor'+id).removeAttr("OldUrl");
//  });

//  prev.addEventListener("mouseenter", ()=> {
//    var OldUrl = $('.anchor'+id).attr("href");
//     $('.anchor'+id).attr("OldUrl",OldUrl);
//     $('.anchor'+id).attr("href","javascript:void(0)");
//  });

 
// prev.addEventListener("mouseleave", ()=> {
//    var OldUrl = $('.anchor'+id).attr("OldUrl");
//     $('.anchor'+id).attr("href",OldUrl);
//    $('.anchor'+id).removeAttr("OldUrl");
//  });
// // /*************** SLider A tag URL Change ***********/

//  console.log(sliderWidth);
// });





// $('.slider').mouseleave(function(){
//    var id = $(this).attr("id");
//    const sliderContainer = document.querySelector(".mainslides"+id);
//    const sliderImage = document.querySelectorAll(".slideItems"+id); 
//    const next = this.querySelector(".next");
//    const prev = this .querySelector(".prev");
//    const navDots = this.querySelector(".nav-dots");
//    let NoOfImages = sliderImage.length;
//    let sliderWidth = sliderImage[0].clientWidth;
//    let currentSlide = 0;
//    var slideItemWidth =0;

//    removeNavDots();

//    function removeNavDots(){
//      $('#dots'+id).empty();
      
//   }
   
// });



const sliderContainer = document.querySelector(".slides");
const sliderImage = document.querySelectorAll(".slide-item");

 const next = document.querySelector(".next");
 const prev = document.querySelector(".prev");

const navDots = document.querySelector(".nav-dots");
let NoOfImages = sliderImage.length;
let sliderWidth = sliderImage[0].clientWidth;
let currentSlide = 0;
var slideItemWidth =0;


$(document).ready(function(){
   $('.slide-item').attr("style","width:"+ $('.slider').width()+"px;");
   var  slideItemWidth = $('.slider').width();
   slideItemWidth = $('.slider').width();
   sliderContainer.style.width = slideItemWidth * NoOfImages +"px";

   $(window).resize(function() {
      $('.slide-item').attr("style","width:"+$('.slider').width()+"px;");
       slideItemWidth = $('.slider').width();
       sliderContainer.style.width = slideItemWidth * NoOfImages +"px";
   });
});

 function init(){
    sliderImage.forEach((img, i) => {
        console.log(img);
    });

     
    sliderImage[0].classList.add('active');
    createNavDots();
 }


init();
 function createNavDots(){
     for(let i = 0;i < NoOfImages; i++){
        const dot = document.createElement("li");
        console.log(navDots);
        dot.classList.add("dot");
        navDots.appendChild(dot);
     }
     navDots.children[0].classList.add("active");
 }

 //Next Button

 next.addEventListener("click", ()=> {
     if(currentSlide >= NoOfImages - 1){
        goToSlides(0);
        currentSlide = 0;
        return;
     }
    currentSlide++;
    goToSlides(currentSlide);
 });

 prev.addEventListener("click", ()=> {
    if(currentSlide <= 0){
       goToSlides(NoOfImages - 1);
       currentSlide = NoOfImages - 1;
       return;
    }
   currentSlide--;
   goToSlides(currentSlide);
});

  
 function goToSlides(slideNo){
  // alert($('.slider').width());
    sliderContainer.style.transform = "translateX(-" + $('.slider').width() * slideNo +"px)";
    sliderContainer.style.transition = "0.3s ease-in-out";
    sliderContainer.style.width = $('.slider').width() * NoOfImages +"px";
    currentSlide = slideNo;
    setActiveClass();
 }

function setActiveClass(){

    // Set active class for Slide Image
    let currentActive = document.querySelector(".slide-item.active");
    currentActive.classList.remove("active");
    sliderImage[currentSlide].classList.add('active');

   // Set active class for Slide Dots
    let currentDots = document.querySelector(".dot.active");
    currentDots.classList.remove("active");
    navDots.children[currentSlide].classList.add('active');

}


/*************** SLider A tag URL Change ***********/

next.addEventListener("mouseenter", ()=> {
   var OldUrl = $('.media').attr("href");
    $(".media").attr("OldUrl",OldUrl);
    $('.media').attr("href","javascript:void(0)");
 });

 
next.addEventListener("mouseleave", ()=> {
   var OldUrl = $('.media').attr("OldUrl");
    $('.media').attr("href",OldUrl);
    $(".media").removeAttr("OldUrl");
 });

 prev.addEventListener("mouseenter", ()=> {
   var OldUrl = $('.media').attr("href");
    $(".media").attr("OldUrl",OldUrl);
    $('.media').attr("href","javascript:void(0)");
 });

 
prev.addEventListener("mouseleave", ()=> {
   var OldUrl = $('.media').attr("OldUrl");
    $('.media').attr("href",OldUrl);
    $(".media").removeAttr("OldUrl");
 });
/*************** SLider A tag URL Change ***********/
