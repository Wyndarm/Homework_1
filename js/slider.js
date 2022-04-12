const tabButtons = document.querySelectorAll('.tabs-item');
const prevButton = document.querySelector('.to-left-btn');
const nextButton = document.querySelector('.to-right-btn');

const slidesArr = document.querySelectorAll('.slide');

const bannerStop = document.querySelector('.banner-block');
const tabsStop = document.querySelector('.tabs-block');

let index = 0; //slide index

const activeSlide = i => {  
    for (slide of slidesArr) {
        slide.classList.remove('slide__active');
    }
    slidesArr[i].classList.add('slide__active');
}

const activeTab = i => {
    for (tab of tabButtons) {
        tab.classList.remove('tabs-item__active');
    }
    tabButtons[i].classList.add('tabs-item__active');
}

const doActive = ind => {
    activeSlide(ind);
    activeTab(ind);
}

const nextSlide = () => {
    if ( index == slidesArr.length - 1 ) {
        index = 0;
        doActive(index);
    } else {
        index++;
        doActive(index);
    }
}

const prevSlide = () => {
    if ( index ==  0) {
        index = slidesArr.length - 1;
        doActive(index);
    } else {
        index--;
        doActive(index);
    }
}

tabButtons.forEach( (item, i) => {
        item.addEventListener('click', () => {

            doActive(i);

        })
    }
);


//buttons for small screen
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


//autoslider
let timerId = setInterval(nextSlide,2000);

//stop when click
bannerStop.addEventListener('click', () => {
    clearInterval(timerId);
})

tabsStop.addEventListener('click', () => {
    clearInterval(timerId);
})



// old noob script

// const slider = document.querySelector('.banner-block');
// let button = document.querySelectorAll('.tabs-item');

// button.forEach( function (item, i) {
//     item.addEventListener('click', function () {
//         slider.style.backgroundImage = `url("./img/baner-${i+1}.png")`;
//         button.forEach (
//             j => j.classList.remove('tabs-item__active')
//         );
//         item.classList.add('tabs-item__active');
//         })
//     }
// );

// // no-tabs page

// let imgCounter = 1;

// document.querySelector('.to-right-btn').addEventListener('click', function () {

//     imgCounter = imgCounter + 1;
    
//     if (imgCounter > 4) { 
//         imgCounter = 1;
//     }

//     slider.style.backgroundImage = `url("./img/baner-${imgCounter}.png")`;
// });

// document.querySelector('.to-left-btn').addEventListener('click', function () {

//     imgCounter = imgCounter - 1;
    
//     if (imgCounter < 1) { 
//         imgCounter = 4;
//     }

//     slider.style.backgroundImage = `url("./img/baner-${imgCounter}.png")`;
// });