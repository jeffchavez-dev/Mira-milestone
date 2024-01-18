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
    const imgElement = document.createElement("img");
    imgElement.src = image.image;

    imageContainer.appendChild(imgElement)

})