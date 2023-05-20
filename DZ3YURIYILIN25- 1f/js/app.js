const tabsContent = document.querySelectorAll(".tabcontent")
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
let tabCounter = 0
const hideTabContent =() => {
    tabsContent.forEach((item) => {
        item.style.display = "none"
    })
     tabs.forEach((item) => {
         item.classList.remove("tabheader__item_active")
     })
}

const showTabContent = (i=0) => {
    tabsContent[i].style.display = "block"
     tabs[i].classList.add ("tabheader__item_active")
}
hideTabContent()
showTabContent()
const switchTab = ()=>{
    hideTabContent()
    showTabContent(tabCounter)
    tabCounter++
    if (tabCounter >= tabs.length){
        tabCounter=0
    }

}
setInterval(switchTab,2000)


tabsParent.addEventListener("click",(e)=>{
    const target = e.target
    if(target.classList.contains("tabheader__item")) {
        tabs.forEach((item,i)  => {
            if (e.target === item){
                hideTabContent()
                showTabContent(i)
                tabCounter = i
            }
        })
    }
})
const prevButton = document.querySelector('.offer__slider-prev');
const nextButton = document.querySelector('.offer__slider-next');
const currentElement = document.getElementById('current');
const totalElement = document.getElementById('total');
const sliderWrapper = document.querySelector('.offer__slider-wrapper');
const slides = document.querySelectorAll('.offer__slide');

let currentIndex = 0;
const totalSlides = slides.length;

function updateCounter() {
    currentElement.textContent = padZeroes(currentIndex + 1);
    totalElement.textContent = padZeroes(totalSlides);
}

function padZeroes(number) {
    return number.toString().padStart(2, '0');
}

function showCurrentSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[currentIndex].classList.add('active');
}

prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateCounter();
    showCurrentSlide();
});

nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateCounter();
    showCurrentSlide();
});

updateCounter();
showCurrentSlide();