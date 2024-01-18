const info = [
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/1.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/2.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/3.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/4.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/5.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/6.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/7.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/8.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/9.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/10.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/11.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/12.jpg"
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
    home.style.display = "block";
})

boy.addEventListener('click', () => {
    galleryTwo.style.display = "block";
    main.style.display = "none";
    home.style.display = "block";
})

home.addEventListener('click', () => {
    galleryOne.style.display = "none";
    galleryTwo.style.display = "none";
    main.style.display = "flex"
    home.style.display = "none";
    console.log("clicked")
})


const imageContainer = document.querySelector("#girl-images")

info.forEach(image => {
    const modal = document.createElement("div")
    const modalImage = document.createElement("img");
    modalImage.src = image.image;
    modalImage.style.cursor = "pointer"
    
    modal.appendChild(modalImage)
    imageContainer.appendChild(modal)

    const close = document.createElement("span")
    close.classList.add("close")
    close.innerText = "X"
    modal.appendChild(close)

    modalImage.addEventListener('click', () => {
        close.style.display = "block"
        modal.classList.add("modal")
        modal.style.display = "flex"
        modalImage.classList.add("modal_image")

        close.addEventListener('click', () => {
            // modal.style.display = "none";
            modal.classList.remove("modal")
        })
    })



})