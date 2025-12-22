var map = new maplibregl.Map({
  container: 'map',
  style: 'https://www.openhistoricalmap.org/map-styles/main/main.json', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

map.addControl(new maplibregl.NavigationControl());

map.on('load', () => {
  // Hide modern roads
  map.setLayoutProperty('road', 'visibility', 'none');

  // Hide buildings
  map.setLayoutProperty('building', 'visibility', 'none');

  // Hide POIs
  map.setLayoutProperty('poi', 'visibility', 'none');
});