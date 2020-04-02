import '../styles/index.scss';

(function main() {
        const blackout = document.querySelector('.blackout');
        const arrow = document.querySelector('.arrow-down');

        arrow.addEventListener('click', (e) => {
            console.log('!!!', blackout);
            blackout.style.transform = 'scale(0)';
        });
    }
)();

const init = () => {
    const myMap = new ymaps.Map("map", {
        center: [60.005090, 30.245701],
        zoom: 14.5
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(new ymaps.Placemark([60.005090, 30.245701], {
            balloonContent: 'Здароова <strong>петух!</strong>'
        }));
};

ymaps.ready(init);
