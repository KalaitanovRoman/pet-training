import '../styles/index.scss';

const blackout = document.querySelector('.blackout-about');
const close = document.querySelector('.close');
const readMore = document.querySelector('#read-more');
const body = document.querySelector('body');

(function main() {
    const blackout = document.querySelector('.blackout');
    const arrow = document.querySelector('.arrow-down');

    arrow.addEventListener('click', () => {
        blackout.style.transform = 'scale(0)';
    });
})();


body.addEventListener('click', function (e) {
    const target = e.target;

    if (target.closest('#read-more')) {
        console.log('!!! #read-more');
        blackout.style.display = 'flex';
    }

    if (target.closest('.blackout-about')) {
        if (target === close || blackout) {
            blackout.style.display = 'none';
        }
    }
});

// readMore.addEventListener('click', function (hui) {
//     console.log('!!!', blackout);
//     blackout.style.display = 'flex';
// });

//
// blackout.addEventListener('click', function (e) {
//     const target = e.target;
//
//     if (target === close || blackout) {
//         blackout.style.display = 'none';
//     }
// });

// Яндекс карта
const init = () => {
    const myMap = new ymaps.Map("map", {
        center: [60.005090, 30.245701],
        zoom: 14.5
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(new ymaps.Placemark([60.005090, 30.245701], {
            balloonContent: 'Здарова <strong>петух!</strong>'
        }));
};

ymaps.ready(init);


// var hiddenElement = document.getElementById("hello");
// var btn = document.getElementById('kek');
//
// function handleButtonClick() {
//     hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
// }
//
// btn.addEventListener('click', handleButtonClick);