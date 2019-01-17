$(document).ready(function(){

//providers
//   var providers = {};
layers = [];


  openStreet = {
    title: 'Osm',
    icon: 'images/icons/icons-map/openstreetmap_mapnik.png',
    layer: L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})
  };
  layers.push(openStreet);
  esriWorldImagery = {
    title: 'World Imagery',
    icon: 'images/icons/icons-map/esri_worldterrain.png',
    layer: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    })
  };
  layers.push(esriWorldImagery);

L.control.iconL
    var map = L.map('map', {
        center: [8.30871620165794, -15.95611395955086],
        zoom: 3,
        maxZoom: 18,
        minZoom: 3,
        // layers: [openStreet, esriWorldImagery],
        zoomControl: true,
        fullscreenControl: true,
        fullscreenControlOptions: {
            position: 'topleft'
        }
    });



// añado un logo al mapa

  var logo = L.Control.extend({
    options: {
      position: 'topright'
    },

    onAdd: function (map) {
      // create the control container with a particular class name
      var container = L.DomUtil.create('div', 'logo');

      container.innerHTML =
        '<img id=logo src="images/logo-peq.png">';
      return container;
    }
  });

  map.addControl(new logo());

  L.control.iconLayers(layers).addTo(map);

    var urlIcon = 'images/map/icon.png';
    var myIcon = L.icon({
        iconUrl: urlIcon,
        iconSize: [40, 40],
        iconAnchor: [22, 10]
    });
var opt = {
    'maxHeight' : 300
};
    L.marker([39.952583, -75.165222]).addTo(map).setIcon(myIcon).bindPopup('<h4>Philadelphia</h4></br><p></p>', opt);

    L.marker([-6.554210, -75.177071]).addTo(map).setIcon(myIcon).bindPopup('<h4>Pucallpa</h4></br><img width="100%" src="images/map/pucallpa.jpg"><p>Discourses regarding the development of the Amazon region highlight the importance of the local cultures, local knowledge and participation of smallholders, such as indigenous people, traditional communities and small-scale colonists. Current policies, however, still pursue a development model that is oriented towards global commodity markets and the capacity of well-qualified entrepreneurs with the capital required for large-scale investments, despite a growing consensus on its ecological incompatibilities, social limitations and economic risks. Decision makers from both governmental and non-governmental organisations widely disregard the possibility that smallholders could more actively contribute to rural development. Instead, the production practices of smallholders and their modes of social organisation are perceived as obsolete and inefficient. By presenting examples from the region, this paper argues that smallholders have the potential to manage production systems that maintain environmental stability while effectively contributing to local well-being. Therefore, the paper advocates to more effectively using local capacities for the development of rural Amazon through the promotion of small-scale production systems.</p>', opt);

    L.marker([6.248220, -75.580032]).addTo(map).setIcon(myIcon).bindPopup('<h4>Medellin</h4></br><p></p>', opt);

    L.marker([6.190850, -67.484780]).addTo(map).setIcon(myIcon).bindPopup('<h4>Puerto Carreño</h4></br><p></p>', opt);

    L.marker([28.613939, 77.209023]).addTo(map).setIcon(myIcon).bindPopup('<h4>New Delhi</h4></br><p></p>', opt);

    L.marker([19.432608, -99.133209]).addTo(map).setIcon(myIcon).bindPopup('<h4>Mexico City</h4></br><p></p>', opt);



});
