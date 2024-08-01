

const picturesGirl = [
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/1.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/1.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/1.jpg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/1.jpg"
    },   
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

const picturesBoy = [
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/Kesed 1.jpeg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/Kesed 2.jpeg"
    },
    {
        name: "Mira's Birthday",
        tag: "Birthday",
        image: "/assets/Kesed 2.jpeg"
    }
]

const girl = document.querySelector("#girl")
const boy = document.querySelector("#boy")
const main = document.querySelector(".main")
const galleryOne = document.querySelector(".gallery-one")
const galleryOneBG = document.querySelector(".gallery-one-bg")
const galleryTwoBG = document.querySelector(".gallery-two-bg")
const galleryTwo = document.querySelector(".gallery-two")
const home = document.querySelector(".home")

girl.addEventListener('click', () => {
    galleryOne.style.display = "block"
    main.style.display = "none"
    home.style.display = "block";
    galleryOneBG.style.display = "block"
})

boy.addEventListener('click', () => {
    galleryTwo.style.display = "block";
    main.style.display = "none";
    home.style.display = "block";
    galleryTwoBG.style.display = "block"
})

home.addEventListener('click', () => {
    galleryOne.style.display = "none";
    galleryTwo.style.display = "none";
    main.style.display = "flex"
    home.style.display = "none";
    console.log("clicked")
})


const imageContainerGirl = document.querySelector("#girl-images")
const imageContainerBoy = document.querySelector("#boy-images")

picturesGirl.forEach(image => {
    console.log("Girl")
    const galleryImages = document.createElement("img");
    galleryImages.src = image.image;
    galleryImages.style.cursor = "pointer"
    imageContainerGirl.appendChild(galleryImages)

    const modal = document.createElement("div")
    const modalImage = document.createElement("img");
    modalImage.src = image.image;
    modalImage.style.cursor = "pointer"
    modal.appendChild(modalImage)
    
    
    const close = document.createElement("span")
    close.classList.add("close")
    close.innerText = "X"
    modal.appendChild(close)

    galleryImages.addEventListener('click', () => {
        close.style.display = "block"
        modal.classList.add("modal")
        modal.style.display = "flex"
        modalImage.classList.add("modal_image")
        imageContainerGirl.appendChild(modal)

        close.addEventListener('click', () => {
            // modal.style.display = "none";
            modal.classList.remove("modal")
            modal.style.display = "none"
            close.style.display = "none"
        })
    })
})


picturesBoy.forEach(image => {
    console.log("Boy")
    const galleryImages = document.createElement("img");
    galleryImages.src = image.image;
    galleryImages.style.cursor = "pointer"
    imageContainerBoy.appendChild(galleryImages)

    const modal = document.createElement("div")
    const modalImage = document.createElement("img");
    modalImage.src = image.image;
    modalImage.style.cursor = "pointer"
    modal.appendChild(modalImage)
    
    
    const close = document.createElement("span")
    close.classList.add("close")
    close.innerText = "X"
    modal.appendChild(close)

    galleryImages.addEventListener('click', () => {
        close.style.display = "block"
        modal.classList.add("modal")
        modal.style.display = "flex"
        modalImage.classList.add("modal_image")
        imageContainerBoy.appendChild(modal)

        close.addEventListener('click', () => {
            // modal.style.display = "none";
            modal.classList.remove("modal")
            modal.style.display = "none"
            close.style.display = "none"
        })
    })
})
