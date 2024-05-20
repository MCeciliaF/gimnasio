//Funcion para el mapa
function initMap() {
    var mapOptions = {
        center: { lat: -34.603722, lng: -58.381592 },
        zoom: 20
    };

    var map1 = new google.maps.Map(document.getElementById('map1'), mapOptions);
    var map2 = new google.maps.Map(document.getElementById('map2'), mapOptions);
    var map3 = new google.maps.Map(document.getElementById('map3'), mapOptions);

    new google.maps.Marker({ position: { lat: -34.603722, lng: -58.381592 }, map: map1 });
    new google.maps.Marker({ position: { lat: -34.603722, lng: -58.381592 }, map: map2 });
    new google.maps.Marker({ position: { lat: -34.603722, lng: -58.381592 }, map: map3 });
}

window.initMap = initMap;
