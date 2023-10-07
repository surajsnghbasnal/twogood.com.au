function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },

        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locoScroll()

function navAnim() {
    gsap.to('#nav #nav1 .logo', {
        transform: 'translateY(-37%)',
        scrollTrigger: {
            trigger: '.page1',
            scroller: 'main',
            start: "top 0",
            end: "top -10%",
            scrub: 1
        }
    })

    gsap.to('#nav #nav2 .links', {
        // display: 'none',
        opacity: 0,
        scrollTrigger: {
            trigger: '.page1',
            scroller: 'main',
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
}
navAnim()

function heroHeadAnimation() {
    gsap.from('.page1 h1', {
        y: 200,
        opacity: 0,
        duration: 0.4,
        delay: 0.5,
        stagger: 0.3
    })
}
heroHeadAnimation()

function videoConAnimation() {
    var videoCon = document.querySelector(".video-container");
    var playBtn = document.querySelector('#play');

    videoCon.addEventListener('mouseenter', function () {
        gsap.to(playBtn, {
            scale: 1,
            opacity: 1
        })
    })
    videoCon.addEventListener('mouseleave', function () {
        gsap.to(playBtn, {
            scale: 0,
            opacity: 0
        })
    })

    videoCon.addEventListener('mousemove', function (event) {
        var rect = videoCon.getBoundingClientRect();
        var mouseX = event.clientX - rect.left - 50 + 'px';
        var mouseY = event.clientY - rect.top - 50 + 'px';

        gsap.to(playBtn, {
            x: mouseX,
            y: mouseY,
        });
    });
}
videoConAnimation()

function cursorAnim() {
    document.addEventListener('mousemove', function (dets) {
        gsap.to('#cursor', {
            left: dets.x,
            top: dets.y
        })
    })

    document.querySelectorAll('.pro').forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%, -50%) scale(1)'
            })
        })
        elem.addEventListener('mouseleave', function () {
            gsap.to('#cursor', {
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
}
cursorAnim()

function menuPge() {
    var menu = document.getElementById('bars');
    var close = document.getElementById('close');
    var down = document.querySelector('.menu-page');

    menu.addEventListener('click', function () {
        menu.classList.add('hide');
        close.classList.remove('hide');
        down.style.top = "0";

    });

    close.addEventListener('click', function () {
        menu.classList.remove('hide');
        close.classList.add('hide');
        down.style.top = "-200%"
    });
}
menuPge()

function cartPage() {
    var shop = document.getElementById('shop');
    var cross = document.getElementById('cross');
    var cart = document.querySelector('.cart-page');

    shop.addEventListener('click', function () {
        shop.classList.add('hide');
        cross.classList.remove('hide');
        cart.style.top = "0";
    });

    cross.addEventListener('click', function () {
        shop.classList.remove('hide');
        cross.classList.add('hide');
        cart.style.top = "-100%"
    });
}
cartPage()

