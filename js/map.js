ymaps.ready(init);

function init(){

    var myMap = new ymaps.Map("map_route", {
        center: [55.733677, 37.587874],
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([55.733670, 37.587874], { 
        hintContent: 'NN', 
        balloonContent: 'NN'
    });

    myMap.behaviors
    .disable(['scrollZoom', 'rightMouseButtonMagnifier']);

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('zoomControl');
    myMap.behaviors.disable(['scrollZoom']);

}