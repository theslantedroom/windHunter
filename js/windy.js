const options = {
    // Required: API key
    key: 'mfuL4uwl1FNGu0tTitrEYSVNkzhY8oBA', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 49.15,
    lon: -123,
    zoom: 10,



};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([49.12, -123.4])
        .setContent('Hello Wind')
        .openOn(map);
});