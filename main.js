// //Page Transition
// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function () {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
// })();


// Page transition Slider 

// const wrapper = document.querySelector(".wrapper");
// const control = document.querySelectorAll(".control");

// control.forEach((item, index) => {
//     item.addEventListener("click", () =>{
//         console.log("netvarg");
//         wrapper.style.transform = `translateX(${-100 * index}vw)`;
//     });
// });

//Button style Transition
// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function () {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//         })
//     });
// })();

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            header.classList.remove('active-header');
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

//Project Transition
(function () {
    [...document.querySelectorAll(".pb")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".pb-active").classList.remove("pb-active");
            this.classList.add("pb-active");
            document.querySelector(".p-active").classList.remove("p-active");
            document.getElementById(button.dataset.id).classList.add("p-active");
        })
    });
})();




// CURSOR
// const cursorRounded = document.querySelector('.rounded');
// const cursorPointed = document.querySelector('.pointed');


// // const moveCursor = (e)=> {
// //   const mouseY = e.clientY;
// //   const mouseX = e.clientX;
   
// //   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  
// //   cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
// // }

// window.addEventListener('mousemove', moveCursor)

//Header
const bar = document.querySelector('.header-bar');
const header = document.querySelector('.header');
const home = document.querySelector('.home');
const work = document.querySelector('.work');
const startup = document.querySelector('.startup');
bar.addEventListener('click', () =>{
    header.classList.toggle('active-header');
});