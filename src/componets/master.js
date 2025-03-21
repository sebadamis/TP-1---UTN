window.addEventListener("load", () => {

    const show = document.querySelector(".show");
    show.addEventListener("click", (e) => {
        // previousElementSibling
        const input = e.target.previousElementSibling;
        const inputType = input.getAttribute("type");
        if (inputType === `text`) {
            input.setAttribute("type", "password");

            show.classList.remove("fa-eye-slash");
        } else {
            input.setAttribute("type", "text");

            show.classList.add("fa-eye-slash");
        }
    });
});


