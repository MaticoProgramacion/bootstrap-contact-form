console.log("Working!")

const form = document.querySelector("#form")
const btnSend = document.querySelector("#btnSend")
const btnLoading = document.querySelector("#btnLoading")

form.addEventListener("submit", e => {

    e.preventDefault()

    const datos = new FormData(form)

    console.log("Campo Email", datos.get("emailCamp"))
    console.log("Campo Password", datos.get("passwordCamp"))
    console.log("Campo Checkbox", datos.get("checkCamp"))

    btnSend.classList.add("d-none")
    btnLoading.classList.remove("d-none")

    window.setTimeout(() => {
        btnSend.classList.remove("d-none")
        btnLoading.classList.add("d-none")
    },3000)

    form.reset()
})