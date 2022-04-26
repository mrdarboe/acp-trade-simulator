jQuery(function() {
    window.setTimeout(() => {
        document.getElementById("LAVLoader").style.display = "none";
    }, 800);

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

function inputAmount(){
	var txt = "102.494000";
	document.getElementById("inputAmountSwap").value = txt;
}