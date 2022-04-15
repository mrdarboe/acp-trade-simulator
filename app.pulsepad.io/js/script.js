jQuery(function() {
    window.setTimeout(() => {
        document.getElementById("LAVLoader").style.display = "none";
    }, 800);

    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        let bg1 = document.querySelector('.pd-banner-wrapper .left-bg');
        let bg2 = document.querySelector('.pd-banner-wrapper .right-bg');
        let bg3 = document.querySelector('.pd-projects .left-bg');
        let bg4 = document.querySelector('.pd-projects .right-bg');
        if (bg1 && bg2) {
            bg1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
            bg2.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
        }
        if (bg3 && bg4) {
            bg3.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
            bg4.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
        }
    });

    $("#particles-js").length && particlesJS("particles-js", {
        particles: {
            number: {
                value: 28
            },
            color: {
                value: ["#00bcb0", "#f7d542", "#00bcb0"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.4,
                random: !1,
                anim: {
                    enable: !1
                }
            },
            size: {
                value: 3,
                random: !0,
                anim: {
                    enable: !1
                }
            },
            line_linked: {
                enable: !1
            },
            move: {
                enable: !0,
                speed: 5,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1
                },
                onclick: {
                    enable: !1
                },
                resize: !0
            }
        },
        retina_detect: !0
    })
});