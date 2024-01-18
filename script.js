const info = [
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/Daddy\ and\ Miwa.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "none"
    }
]

const girl = document.querySelector("#girl")
const main = document.querySelector(".main")
const galleryOne = document.querySelector(".gallery-one")
const home = document.querySelector(".home")

girl.addEventListener('click', () => {
    galleryOne.style.display = "block"
    main.style.display = "none"
})

home.addEventListener('click', () => {
    galleryOne.style.display = "none"
    main.style.display = "flex"
})