var littlePath = [];
var routesArray = [];
var idee;
var jsonRoutes = [];
var evenNewer = [];
var stopPointsArray = [];
var myStops = [];
var mappings;
var flightPlanCoordinates = [];
var AmassTheArrays;
var flightPath;
var flightPathWalk;
var flightPathTube;
var flightPathBus;
var flightPathNationalRail;
var flightPathDlr;
var flightPathOverground;
var marker;
var mapProp;
var modeSpecificArray = [];
var modeGeneralArray = [];
var symbolOne;
var modeColors;
var goldStar;
var pathClick;
var strokeOpacityCondition;
var allPathsWhite = [];
var allPathsWalk = [];
var allPathsTube = [];
var allPathsBus = [];
var allPathsOverground = [];
var allPathsDlr = [];
var allPathsNationalRail = [];
var marker_mypos;

// myObject = {
//   myMap: function () {}
// }
// removeLine();



AmassTheArrays = function(callback) {

  $(".my-list").hide()


  $('.my-emoji').each(function (index) {
    $(this).on('click', function(ev) {
      ev.stopPropagation();
      // var idea = $(this).attr("id");
      // $divy = $(idea, ".my-list");
      $(this).next(".my-list").slideToggle("slow");
    });
  });

  // function (e) {
  //   e.stopPropagation();
    // window.reply_click = function (clicked_id) {
    //   $(clicked_id).slideToggle("slow");
    // };

  // };



  $(document).ready(function (){

    $('.results_all_').each(function() {
      var $dropdown = $(this);

      $("div.routes_top", $dropdown).click(function(e) {
        e.preventDefault();
        $div = $("div.routes_bottom", $dropdown);
        $div.slideToggle("slow");

        $("div.routes_bottom").not($div).hide();

        return false;
      });
  });

  });




document.querySelectorAll('.routes_top').forEach(function(el){
  el.addEventListener('mouseenter', function() {

    // if (flightPath) {
    //   removeLine()
    // };
    idee = this.id;
    littlePath.pop();
    littlePath.push(document.querySelector(`#${idee}`).querySelectorAll('.little-paths'));
    var tempSpecificModes = [];
    var tempGeneralModes = [];
    for (m=0; m < littlePath[0].length; m++) {
      tempSpecificModes.push(littlePath[0][m].getAttribute('data-mode'));
      tempGeneralModes.push(littlePath[0][m].getAttribute('data-name'));
    };
    modeSpecificArray.pop()
    modeGeneralArray.pop()
    modeSpecificArray.push(tempSpecificModes);
    modeGeneralArray.push(tempGeneralModes);

    littlePathArray = Array.from(littlePath);
    // console.log(littlePathArray);

    allStops = document.querySelector(`#${idee}`).querySelectorAll('[data-stop]');
    stopPointsArray.pop();
    stopPointsArray.push(allStops);
    var tempStops = [];
    for (i=0; i<stopPointsArray[0].length; i++) {
      tempStops.push(stopPointsArray[0][i].getAttribute('data-stop'));
    };
    myStops.pop();
    myStops.push(tempStops);
    callback();

  });
});
return true;
};

showMeArrays = function() {
  function b() {
    var tempArrParent = [];
    for (i=0; i<littlePathArray[0].length; i++) {
      tempArrParent.push(littlePathArray[0][i].innerHTML);
    };
    routesArray.pop();
    routesArray.push(tempArrParent);
    // console.log(routesArray);
    // return routesArray;
  };
  b();

  for (n=0; n < routesArray.length; n++) {
    jsonRoutes.pop()
    jsonRoutes.push(JSON.parse("[" + routesArray[n] + "]"));
  }
  // console.log(jsonRoutes);
  //
  var fuckingTheFucking = [];
  for (m=0; m < jsonRoutes.length; m++) {
    evenNewer.pop()
    for (n=0; n < jsonRoutes[m].length; n++) {
      evenNewer.pop()
      fuckingTheFucking.push(jsonRoutes[m][n]);
    };

  }

  evenNewer.length = 0
  evenNewer.push(fuckingTheFucking)
  //
  // console.log(evenNewer);
  //

  var flightDummies = [];
  // console.log(modeSpecificArray)
  for (j=0; j<evenNewer.length; j++) {
    for (i=0; i<evenNewer[j].length; i++) {
      // flightDummies.pop()
      flightDummies.push(
      evenNewer[j][i].map(
        function(x) {
          return {
            lat: x[0],
            lng: x[1]
          };
        }
      )
    );
    }

  };

  flightPlanCoordinates.pop()
  flightPlanCoordinates.push(flightDummies)
  // console.log(flightPlanCoordinates);
  myMap();



  // for (i=0; i<modeSpecificArray[0].length; i++) {
  //   console.log(modeColors[modeSpecificArray[0][i]]);
  // };
  // console.log(modeSpecificArray);
  // console.log(modeSpecificArray[0][1]);
  // console.log(modeColors[modeSpecificArray[0][1]].hexColor);
  var lastBit = flightPlanCoordinates[0][flightPlanCoordinates[0].length-1]

  for (i=0; i<flightPlanCoordinates[0].length; i++) {
    goldStar = {
      path:
        'M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0',
      fillColor: "white",
      fillOpacity: 1,
      scale: 1,
      strokeColor: "black",
      strokeWeight: 2
    };
  };

  // console.log(tubeStationCoordinates[myStops[0][0]])

  function show_markers() {
    for (let y=0; y<myStops[0].length; y++) {
      // console.log(myStops[0][y])
      marker = new google.maps.Marker({
        position : tubeStationCoordinates[myStops[0][y]],
        icon: goldStar,
        zIndex: 2,
        get title() { return getKeyByValue(tubeStationCoordinates, this.position) },
        map : mappings
      });
      var contentMarker = marker.title;
      createInfoWindow(marker, contentMarker);
    }

  }


  var image_finish = {
    anchor: new google.maps.Point(0, 30), //16: center of 32x32 image
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(32, 32),
    size: new google.maps.Size(64, 64),
    url: "/static/images/finish-flag.svg"
  };

  var image_start = {
    anchor: new google.maps.Point(0, 30), //16: center of 32x32 image
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(32, 32),
    size: new google.maps.Size(64, 64),
    url: "/static/images/start.svg"
  };




  function show_start_finish() {
    markerStart = new google.maps.Marker({
      position: flightPlanCoordinates[0][0][0],
      icon: image_start,
      map: mappings
    });
    markerFinish = new google.maps.Marker({
      position: lastBit[lastBit.length - 1],
      icon: image_finish,
      map: mappings
    })
  }



  infowindow = new google.maps.InfoWindow();
  // markerInfoWindow = new google.maps.InfoWindow();

  function createInfoWindow(poly, content) {
    google.maps.event.addListener(poly, 'mouseover', function(event) {
      infowindow.setContent(content);
      infowindow.setPosition(event.latLng);
      infowindow.open(mappings);
    });
    google.maps.event.addListener(poly, 'mouseout', function(event) {
      infowindow.close();
    });
  }

  // function clearMarkers() {
  //   allPaths.setMap(null);
  // }
  //
  // clearMarkers();

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  // console.log(getKeyByValue(modeColorsArray, "#007732"));
  var lineSymbol = {
  path: "M 0,-1 0,1",
  strokeOpacity: 1,
  scale: 5,
  strokeColor: "#ffffff"
  };

  // var lineSymbolNationalRail = {
  // path: "M 0,-1 0,1",
  // strokeOpacity: 1,
  // scale: 5,
  // strokeColor: "#DC006B"
  // };


  // console.log(flightPlanCoordinates[0]);
  // console.log(modeGeneralArray[0]);
  // console.log(modeSpecificArray[0]);
  for (let i=0; i<flightPlanCoordinates[0].length; i++) {
    flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates[0][i],
      strokeColor: "#ffffff",
      // strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`,
      // strokeOpacity: (`${modeColors[modeSpecificArray[0][i]].hexColor}` == '#A9A9A9') ? 0 : 1.0,
      // strokeOpacity: 0,
      strokeWeight: 8,
      // get title() {return getKeyByValue(modeColorsArray, this.strokeColor);},
      // zIndex: 1,
      ...((modeGeneralArray[0][i] === "District") ? {
        strokeOpacity: 0
      } : 1.0),
      icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px"
      }
      ],
      // map: mappings
    });
    addLine(flightPath);
    // allPaths.push(flightPath);

    if (modeGeneralArray[0][i] == "walking") {
      flightPathWalk = new google.maps.Polyline({
        path: flightPlanCoordinates[0][i],
        strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`,
        // strokeOpacity: (`${modeColors[modeSpecificArray[0][i]].hexColor}` == '#A9A9A9') ? 0 : 1.0,
        strokeOpacity: 1.0,
        strokeWeight: 2.0,
        get title() {return getKeyByValue(modeColorsArray, this.strokeColor);},
        // zIndex: 1,
        // map: mappings
      });
      addLine(flightPathWalk);
      // allPaths.push(flightPathWalk);
    }
    else if (modeGeneralArray[0][i] == "tube"){
      flightPathTube = new google.maps.Polyline({
        path: flightPlanCoordinates[0][i],
        strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`,
        // strokeOpacity: (`${modeColors[modeSpecificArray[0][i]].hexColor}` == '#A9A9A9') ? 0 : 1.0,
        strokeOpacity: 1.0,
        strokeWeight: 4.0,
        get title() {return getKeyByValue(modeColorsArray, this.strokeColor);},
        // zIndex: 1,
        // map: mappings
      });
      addLine(flightPathTube);
      // allPaths.push(flightPathTube);
    }
    else if (modeGeneralArray[0][i] == "bus"){
      flightPathBus= new google.maps.Polyline({
        path: flightPlanCoordinates[0][i],
        strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`,
        // strokeOpacity: (`${modeColors[modeSpecificArray[0][i]].hexColor}` == '#A9A9A9') ? 0 : 1.0,
        strokeOpacity: 1.0,
        strokeWeight: 4.0,
        title: "Bus " + `${modeSpecificArray[0][i]}`,
        // zIndex: 1,
        // map: mappings
      });
      addLine(flightPathBus);
      // allPaths.push(flightPathBus);
    }
    else if (modeGeneralArray[0][i] == "national-rail") {
      var lineSymbolNationalRail = {
      path: "M 0,-1 0,1",
      strokeOpacity: 1,
      scale: 4,
      strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`
      };
      flightPathNationalRail = new google.maps.Polyline({
        path: flightPlanCoordinates[0][i],
        // strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`,
        // strokeOpacity: (`${modeColors[modeSpecificArray[0][i]].hexColor}` == '#A9A9A9') ? 0 : 1.0,
        strokeOpacity: 0,
        strokeWeight: 4.0,
        title: "National Rail - " + `${modeSpecificArray[0][i]}`,
        icons: [
        {
          icon: lineSymbolNationalRail,
          offset: "0",
          repeat: "25px"
        }
        ],
        // map: mappings
      });
      addLine(flightPathNationalRail);
      // allPaths.push(flightPathNationalRail);
    }
    else if (modeGeneralArray[0][i] == "dlr") {
      flightPathDlr = new google.maps.Polyline({
        path: flightPlanCoordinates[0][i],
        strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`,
        // strokeOpacity: (`${modeColors[modeSpecificArray[0][i]].hexColor}` == '#A9A9A9') ? 0 : 1.0,
        strokeOpacity: 1.0,
        strokeWeight: 4.0,
        title: "Docklands Light Railway (DLR)",
        // zIndex: 1,
        // map: mappings
      });
      addLine(flightPathDlr);
      // allPaths.push(flightPathDlr);
    }
    else if (modeGeneralArray[0][i] == "overground") {
      flightPathOverground = new google.maps.Polyline({
        path: flightPlanCoordinates[0][i],
        strokeColor: `${modeColors[modeSpecificArray[0][i]].hexColor}`,
        // strokeOpacity: (`${modeColors[modeSpecificArray[0][i]].hexColor}` == '#A9A9A9') ? 0 : 1.0,
        strokeOpacity: 1.0,
        strokeWeight: 4.0,
        title: "London Overground",
        // zIndex: 1,
        // map: mappings
      });
      addLine(flightPathOverground);
      // allPaths.push(flightPathOverground);
    }




    // console.log(modeGeneralArray[i])
    // if (modeGeneralArray[0][i] === "District") {
    //   flightPath["icons"] = [
    //     {
    //       icon: lineSymbol,
    //       offset: "0",
    //       repeat: "20px"
    //     }
    //   ];
    // }

    // google.maps.event.addListener(flightPath, 'mouseover', function (event) {
    //   this.setOptions({
    //     opacity: 0.4,
    //     zIndex: 2
    //   });
    // });
    // google.maps.event.addListener(flightPath, 'mouseout', function (event) {
    //   this.setOptions({
    //     opacity: 1.0,
    //     zIndex: 1
    //   });
    // });
    show_start_finish()
    show_markers()

    if (flightPathWalk) {
      var contentPath = flightPathWalk.title
      createInfoWindow(flightPathWalk, contentPath);
    }



    if (flightPathTube) {
      var contentFronter = flightPathTube.title
      // flightPathTube.setMap(mappings);
      createInfoWindow(flightPathTube, contentFronter);
    }
    if (flightPathNationalRail) {
      var contentFronter = flightPathNationalRail.title
      // flightPathTube.setMap(mappings);
      createInfoWindow(flightPathNationalRail, contentFronter);
    }
    if (flightPathDlr) {
      var contentDlr = flightPathDlr.title
      // flightPathTube.setMap(mappings);
      createInfoWindow(flightPathDlr, contentDlr);
    }
    if (flightPathBus) {
      var contentBus = flightPathBus.title
      // flightPathTube.setMap(mappings);
      createInfoWindow(flightPathBus, contentBus);
    }
    if (flightPathOverground) {
      var contentOverground = flightPathOverground.title
      // flightPathTube.setMap(mappings);
      createInfoWindow(flightPathOverground, contentOverground);
    }




    if (flightPath) {
      allPathsWhite.push(flightPath);
    }
    if (flightPathWalk) {
      allPathsWalk.push(flightPathWalk);
    }
    if (flightPathTube) {
      allPathsTube.push(flightPathTube);
    }
    if (flightPathBus) {
      allPathsBus.push(flightPathBus);
    }
    if (flightPathOverground) {
      allPathsOverground.push(flightPathOverground);
    }
    if (flightPathDlr) {
      allPathsDlr.push(flightPathDlr);
    }
    if (flightPathNationalRail) {
      allPathsNationalRail.push(flightPathNationalRail);
    }

  };


};
// console.log(flightPath)
function addLine(variablePath) {
  variablePath.setMap(mappings);
}

// function removeLine() {
//   if (flightPath) {
//     flightPath.setMap(null);
//   };
//   if (flightPathWalk) {
//     flightPathWalk.setMap(null);
//   };
//   if (flightPathTube) {
//     for (i=0; i < flightPathTube.length; i++) {
//       flightPathTube[i].setMap(null);
//     }
//   };
//   if (flightPathOverground) {
//     flightPathOverground.setMap(null);
//   };
//   if (flightPathDlr) {
//     flightPathDlr.setMap(null);
//   };
//   if (flightPathBus) {
//     flightPathBus.setMap(null);
//   };
//   if (flightPathNationalRail) {
//     flightPathNationalRail.setMap(null);
//   }
// };


function myMap() {

geolocate()
  mapProp = {
  center:new google.maps.LatLng(51.510251, -0.257754),
  zoom:12,
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
  styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

  };

  // startSymbol = {
  //   path: 'M -2,0 0,-2 2,0 0,2 z',
  //   // strokeColor: '#F00',
  //   // fillColor: '#F00',
  //   fillOpacity: 1
  // };
  //
  // endSymbol = {
  //   path: 'M -2,-2 2,2 M 2,-2 -2,2',
  //   // strokeColor: '#292',
  //   // strokeWeight: 4,
  //   fillOpacity: 1
  // }


  mappings = new google.maps.Map(document.getElementById("googleMap"),mapProp);




  initAutocomplete();





};

var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};


function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      document.querySelector('#id_origin'), {types: ['geocode']}, {componentRestrictions: {country: 'uk'}});

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(['address_component']);
  autocomplete.setComponentRestrictions({'country': ['uk']})
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);

  autocomplete2 = new google.maps.places.Autocomplete(document.getElementById('id_destination'), { types: [ 'geocode' ] });
  autocomplete2.setComponentRestrictions({'country': ['uk']})
  google.maps.event.addListener(autocomplete2, 'place_changed', function() {
    fillInAddress();
  });

  autocomplete3 = new google.maps.places.Autocomplete(document.querySelector('#popupf #id_origin'), { types: [ 'geocode' ] });
  autocomplete3.setComponentRestrictions({'country': ['uk']})
  google.maps.event.addListener(autocomplete2, 'place_changed', function() {
    fillInAddress();
  });

  autocomplete4 = new google.maps.places.Autocomplete(document.querySelector('#popupf #id_destination'), { types: [ 'geocode' ] });
  autocomplete4.setComponentRestrictions({'country': ['uk']})
  google.maps.event.addListener(autocomplete2, 'place_changed', function() {
    fillInAddress();
  });

}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // var here_location = {
      //   anchor: new google.maps.Point(25, 50), //16: center of 32x32 image
      //   origin: new google.maps.Point(0, 0),
      //   scaledSize: new google.maps.Size(48, 48),
      //   size: new google.maps.Size(64, 64),
      //   url: "/static/images/locationNew.svg"
      // }
      // marker_mypos = new google.maps.Marker({
      //           position: geolocation,
      //           draggable: true,
      //           icon: here_location,
      //           animation: google.maps.Animation.DROP,
      //           map: mappings
      //       });
      // google.maps.event.addListener(marker_mypos, 'dragend', function() {
      //   geocodePosition(marker_mypos.getPosition());
      // });
      mappings.setCenter(geolocation);
    });
  }
}

function geocodePosition(geolocation)
{
   geocoder = new google.maps.Geocoder();
   geocoder.geocode
    ({
        latLng: geolocation
    },
        function(results, status)
        {
            if (status == google.maps.GeocoderStatus.OK)
            {
                $("#id_origin").val(results[0].formatted_address);
                $("#mapErrorMsg").hide(100);
            }
            else
            {
                $("#mapErrorMsg").html('Cannot determine address at this location.'+status).show(100);
            }
        }
    );
}


AmassTheArrays(showMeArrays);
