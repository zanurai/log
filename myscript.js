//alert('hello')

const label = document.querySelector(".label");
const pwShow = document.querySelectorAll(".eye-icon");
const link = document.querySelector(".link");
const login = document.querySelector(".login");


console.log(label, pwShow, link)

pwShow.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFilds = eyeIcon.parentElement.parentElement.querySelectorAll(".pass");
        console.log(pwFilds)

        pwFilds.forEach(pass => {
            if (pass.type === "password") {
                pass.type = "text"
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return
            }

            pass.type = "password"
            eyeIcon.classList.replace("bx-show", "bx-hide");

        })
    })
})

