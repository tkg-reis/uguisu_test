'use strict';

// ----- 360px以下のスマートフォンサイズ対応 -----
const viewport = document.querySelector('meta[name="viewport"]');
function switchViewport() {
    const value =
        window.outerWidth > 360
        ? 'width=device-width,initial-scale=1'
        : 'width=360';
    if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
    }
}
addEventListener('resize', switchViewport, false);
switchViewport();
// console.log(viewport.getAttribute('content'));

//---------------------------------------------------

// all pages



const open = document.querySelector(".js_toggle");
const container = document.querySelector(".hamburger_menu");
const html = document.querySelector(".html")
const shortBar = document.querySelector('.short-bar');
let opened = false;
open.addEventListener("click",() => {
    container.style.display = "block";
    shortBar.style.opacity = "0";
    html.style.overflow = "hidden"
    setTimeout(() => {
        opened = !opened
    }, 100);
});
open.addEventListener("click", () => {
    if(!opened){
        container.style.display = "none";
        shortBar.style.opacity = "1";
        html.style.overflow = "scroll";
    }
})
// closeOne.addEventListener("click",() => {
//     container.style.display = "none";
// });
// closeTwo.addEventListener("click",() => {
//     container.style.display = "none";
// });
// document.addEventListener("click", (e) => {
//     if (e.target === example4){
//     modal.style.display = "none";
//     };
// });


// 各セクションへの導線処理
// PC時
let links = document.querySelectorAll('.l_hamburger_link');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        container.style.display = "none";
        shortBar.style.opacity = "1";
        html.style.overflow = "scroll";

        let target = document.querySelector(link.hash);
        let jump = window.pageYOffset + target.getBoundingClientRect().top;
        // ヘッダー込みの場合adjustなどの変数で調整する。
        // let adjust = ヘッダーの高さ；
        window.scrollTo({
            top: jump,
            behavior: "smooth"
        });
    });
});

// all end

// page modules

// services 

let wrappers = document.querySelectorAll('.m_services__wrapper');

let gl = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);

wrappers.forEach((wrapper,i) => {
    gsap.set(wrapper, {
        autoAlpha: 0,
    })
    gsap.to(wrapper, {
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
            trigger: wrapper,
            start: "bottom bottom",
            end :"+=100",
            // markers: true,
            delay: i * 0.7
        }
    })
})


// modules end
// -------------------------------------------------------