

//-----------------------------------------

jQuery(document).ready(function ($) {


  //Show like icon whene hover 



  $(function () {
    $('.img-filter').hover(function () {
      $(this).addClass('hover');
    }, function () {
      $(this).removeClass('hover');
    });
  });







  //Sowl carousel
  $('.fadeOut').owlCarousel({

    animateOut: 'fadeOut',
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<img src='./assets/images/prev.png'>", "<img src='./assets/images/next.png'>"],

    responsive: {
      0: {
        items: 1
      }
    }

  });

});
//-----------------------------------------










//-----------------------------------------
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("off_sidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("off_sidenav").style.display = "none";
}




// map #######################


google.maps.event.addDomListener(window, 'load', init);


function init() {
  var mapOptions = {
    zoom: 11,

    center: new google.maps.LatLng(40.6700, -73.9400), // New York

    styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#fff2f2" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "hue": "#ff0000" }] }, { "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "color": "#f6e9e9" }] }, { "featureType": "road.local", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }],

    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    }





  };

  var mapElement = document.getElementById('map');

  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(40.6700, -73.9400),
    map: map,


  });


  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });






}





// drop down 




$(document).ready(function () {




  var isShown = false;
  var dropdowns = document.getElementsByClassName("dropdown")


  for (i = 0; i < dropdowns.length; i++) {
    var button = dropdowns[i].getElementsByTagName("button")
    var dropdown_menu = dropdowns[i].getElementsByClassName("dropdown-menu")[0]

    console.log(dropdown_menu)

    button[i].onclick = function () {
      if (isShown == false) {

        dropdown_menu.style.display = "block"
        isShown = !isShown
      } else
        dropdown_menu.style.display = "none"

    }
  }











})




