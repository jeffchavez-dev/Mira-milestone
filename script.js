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
const gallery = document.querySelector(".gallery")

girl.addEventListener('click', () => {
    gallery.style.display = "block"
    main.style.display = "none"
})