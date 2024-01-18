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
const boy = document.querySelector("#boy")
const main = document.querySelector(".main")
const galleryOne = document.querySelector(".gallery-one")
const galleryTwo = document.querySelector(".gallery-two")
const home = document.querySelector(".home")

girl.addEventListener('click', () => {
    galleryOne.style.display = "block"
    main.style.display = "none"
})

boy.addEventListener('click', () => {
    galleryTwo.style.display = "block"
    main.style.display = "none"
})

home.addEventListener('click', () => {
    galleryOne.style.display = "none"
    galleryTwo.style.display = "none"
    main.style.display = "flex"
})