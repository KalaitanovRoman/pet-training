import '../styles/index.scss';

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

//TODO: delete this code after create actions on buttons
body.addEventListener("click", (e) => {
    for (let item of buttons) {
        e.preventDefault();
        console.log('Form submitted');
    }
});

(function main() {
    const blackout = document.querySelector('.blackout');
    const arrow = document.querySelector('.arrow-down');

    arrow.addEventListener('click', () => {
        blackout.style.transform = 'scale(0)';
    });
})();

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
