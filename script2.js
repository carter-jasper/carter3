// Initialize the map and set its view to a given place and zoom level
var map = L.map('map').setView([53.430556, -2.960556], 13);

// Set up the OSM layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Custom hover popups for areas
var customTooltip = "Location";

// Function to create and return a marker with a permanent tooltip and draggable option
function createHoverMarker(lat, lng, tooltipContent) {
    var marker = L.marker([lat, lng], { draggable: true }).addTo(map);

    // Bind tooltip for permanent display above the marker
    marker.bindTooltip(tooltipContent, { 
        permanent: true, 
        direction: 'top', 
        offset: [-10, -10]  // Adjust offset to position the tooltip above the marker
    });

    // Event listener to update marker position on drag end
    marker.on('dragend', function(e) {
        var position = e.target.getLatLng();
        alert('Marker moved to: ' + position.lat + ', ' + position.lng);
    });

    return marker;
}

// Create marker with a permanent tooltip
createHoverMarker(53.430556, -2.960556, customTooltip);




