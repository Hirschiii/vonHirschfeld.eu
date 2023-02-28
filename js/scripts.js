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

window.addEventListener('scroll', function () {
    let scale = 1 - window.scrollY / 400;
    let translate = window.scrollY;
    if (scale >= 0.4) {
        document.getElementById('text').style.transform = "scale(" + scale + ")";
        // document.getElementById('text').style.bottom = translate + "px";
    }
    // document.getElementById("show_scrol").innerHTML = window.pageYOffset + "px"
});
