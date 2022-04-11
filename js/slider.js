const slider = document.querySelector('.banner-block');
let button = document.querySelectorAll('.tabs-item');

button.forEach( function (item, i) {
    item.addEventListener('click', function () {

        slider.style.backgroundImage = `url("./img/baner-${i+1}.png")`;

        button.forEach (
            j => j.classList.remove('tabs-item__active')
        );

        item.classList.add('tabs-item__active');

        })
    }
);

// no-tabs page

let imgCounter = 1;

document.querySelector('.to-right-btn').addEventListener('click', function () {

    imgCounter = imgCounter + 1;
    
    if (imgCounter > 4) { 
        imgCounter = 1;
    }

    slider.style.backgroundImage = `url("./img/baner-${imgCounter}.png")`;
});

document.querySelector('.to-left-btn').addEventListener('click', function () {

    imgCounter = imgCounter - 1;
    
    if (imgCounter < 1) { 
        imgCounter = 4;
    }

    slider.style.backgroundImage = `url("./img/baner-${imgCounter}.png")`;
});