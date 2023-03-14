// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add standard marker to map
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  Add a cirlce marker to the map for Los Angeles, California.
/*L.circle([34.0522, -118.2437], {
    color: 'black',
    fillColor: 'yellow',
    fillOpacity: 0.3,
    radius: 300   // 300-meter radius (shrinks as you enlarge the map view)
 }).addTo(map);*/

// OR ALTERNATIVELY...

//  Add a cirlce marker to the map for Los Angeles, California.
L.circleMarker([34.0522, -118.2437], {
    radius: 300,  // 300-pixel radius (remains same screen size as you +/-)
    color: 'black',
    fillColor: '#ffffa1'
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

/* To change the map's style, change the map id using the list of Mapbox ids below:
mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11 */