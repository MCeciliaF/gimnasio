//Funcion para el mapa
function initMap() { 
    var mapOptions = {
        center: { lat: -34.589299601070934, lng: -58.41088279749599 },
        zoom: 20
    };

    var map1 = new google.maps.Map(document.getElementById('map1'), mapOptions);
    var map2 = new google.maps.Map(document.getElementById('map2'), mapOptions);
    var map3 = new google.maps.Map(document.getElementById('map3'), mapOptions);
    
    new google.maps.Marker({ position: { lat:  -34.589299601070934, lng:  -58.41088279749599}, map: map1 });
    new google.maps.Marker({ position: { lat: -34.589299601070934, lng: -58.41088279749599 }, map: map2 });
    new google.maps.Marker({ position: { lat: -34.589299601070934, lng: -58.41088279749599 }, map: map3 });
}

window.initMap = initMap;


