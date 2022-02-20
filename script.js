// Edit the initial year and number of tabs to match your GeoJSON data and tabs in index.html
var year = "1870";
var tabs = 11;

// Edit the center point and zoom level
var map = L.map('map', {
  center: [41.46200919428693, -70.56452831433079],
  zoom: 10,
  scrollWheelZoom: true
});

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/leaflet-map-polygon-tabs">data and code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>; design by <a href="http://ctmirror.org">CT Mirror</a>');

// Basemap layer
new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);

// Edit links to your GitHub repo and data source credit
map.attributionControl
.setPrefix('View <a href="http://github.com/jackdougherty/leaflet-map-polygon-tabs">data and code on GitHub</a>, created with <a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>; design by <a href="http://ctmirror.org">CT Mirror</a>');

// Basemap layer
new L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(map);


// Edit to upload GeoJSON data file from your local directory
$.getJSON("polygon_test_wgs_84.geojson", function(geojsonTest){
// add GeoJSON layer to the map once the file is loaded
    geoJsonLayer = L.geoJson(geojsonTest ,{
	    style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
	 map.fitBounds(geoJsonLayer.getBounds());
         });
