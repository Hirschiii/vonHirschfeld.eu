const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");

        span.className = "letter";

        span.innerText = letter;

        element.appendChild(span);
    });
}

enhance("hirschfeld_link");
enhance("niklas_link");
enhance("michael_link");

gsap.registerPlugin(ScrollTrigger);

const header_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".body",
        start: "top top",
        end: "+=200 -100",
        toggleActions: "play none none reverse",
        scrub: true,
    }
})
.to(".hero", {scale: 1.4, filter: "blur(15px)" });

const to_blur = gsap.utils.toArray('.blur_top');
to_blur.forEach((box, i) => {
    var fade_in = gsap.timeline({
        scrollTrigger: {
            trigger: box,
            start: "+=133 25%",
            end: "+=200 10%",
            scrub: 0.2,
        }
    })
        .to(box, {
            opacity: 1,
            filter: "blur(10px)"
        })
});

