/**
 * Card scrolling behaviour
 */

const sectionIds = [
    "home",
    "about",
    "projects",
    "contact"
]

const scrollDivs = []

for(id of sectionIds){
    scrollDivs.push(document.getElementById(id));
}

let currentIndex = 0;

window.addEventListener('wheel', (event) => {

    const deltaY = event.deltaY;

    // Scroll down
    if (deltaY > 0 && currentIndex < scrollDivs.length - 1) {
        currentIndex++;
    }
    // Scroll up
    else if (deltaY < 0 && currentIndex > 0) {
        currentIndex--;
    }

    scrollDivs[currentIndex].scrollIntoView({
        behavior: 'smooth'
    });
});

/**
 * Data to be displayed when scrolling images on right
 */
const imageData = [
    {
        path: "static/images/wall.jpg",
        title: "雁门关 山西",
        lang: "ch",
        spec: "24mm f/8"
    },
    {
        path: 'static/images/pagoda.jpg',
        title: "牛首山 江苏",
        lang: "ch",
        spec: "24mm f/1.4"
    },
    {
        path: 'static/images/moon.jpg',
        title: "Waxing Crescent",
        lang: "en",
        spec: "200mm f/4"
    },
    {
        path: 'static/images/panda.jpg',
        title: "红山动物园 江苏",
        lang: "ch",
        spec: "200mm f/4"
    }
]



const cardDivs = document.querySelectorAll(".card");

const observer = new IntersectionObserver((cards) => {
    cards.forEach(card => {

        if(card.isIntersecting && card.intersectionRatio >= 0.5){

            // image for fading out right side and changing image
            const image = document.getElementById("image");

            // image info on bottom left hand side
            const imageInfo = document.getElementById("img-info");
            let infoIndex;
            
            if(card.target === cardDivs[0]) {
                infoIndex = 0;
            } 
            else if(card.target === cardDivs[1]) {
                infoIndex = 1;
            } 
            else if(card.target === cardDivs[2]) {
                infoIndex = 2;
            }
            else if(card.target === cardDivs[3]) {
                infoIndex = 3;
            }

            /**
             * Logic for right side image
             * 
             * Fade in and fade out
             */
            let imageSrc = imageData[infoIndex].path;

            const newImage = document.createElement("img");
            newImage.src = imageSrc;
            newImage.className = "image";
            newImage.id = "image";
            newImage.style.opacity = 0;

            const imageContainer = document.getElementById("image-div");

            image.remove();
            imageContainer.appendChild(newImage);

            // fade in
            setTimeout(() => {
                newImage.style.opacity = 1; // Fade in the new image
            }, 100); // Delay to ensure the new image is rendered before fading in

            
            /** 
             * Logic for left side description
             * 
             * Same fade, change details, generate divs
             */
            const titleDiv = document.createElement("div");
            
            if(imageData[infoIndex].lang == "ch"){
                titleDiv.className = "cntitle";
            }
            else{
                titleDiv.className = "entitle";
            }

            titleDiv.innerText = imageData[infoIndex].title;


            const specDiv = document.createElement("div");
            specDiv.className = "specs";
            specDiv.innerText = imageData[infoIndex].spec;

            imageInfo.replaceChildren();

            imageInfo.appendChild(titleDiv);
            imageInfo.appendChild(specDiv);


        }
    });
}, {
    threshold: 0.5
});

cardDivs.forEach(card => {
    observer.observe(card);
})


/**
 * Loading animation logic
 */
window.onload = function() {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
  };