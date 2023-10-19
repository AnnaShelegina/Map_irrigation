var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Irrigation_1 = new ol.format.GeoJSON();
var features_Irrigation_1 = format_Irrigation_1.readFeatures(json_Irrigation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Irrigation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Irrigation_1.addFeatures(features_Irrigation_1);
var lyr_Irrigation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Irrigation_1, 
                style: style_Irrigation_1,
                interactive: true,
    title: 'Irrigation<br />\
    <img src="styles/legend/Irrigation_1_0.png" /> 21,5 - 21,5<br />\
    <img src="styles/legend/Irrigation_1_1.png" /> 21,5 - 26,7<br />\
    <img src="styles/legend/Irrigation_1_2.png" /> 26,7 - 37,4<br />\
    <img src="styles/legend/Irrigation_1_3.png" /> 37,4 - 48,7<br />\
    <img src="styles/legend/Irrigation_1_4.png" /> 48,7 - 55,3<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Irrigation_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Irrigation_1];
lyr_Irrigation_1.set('fieldAliases', {'id': 'id', 'shift': 'shift', 'number': 'number', 'S(ha)': 'S(ha)', 'drain(m3/h': 'drain(m3/h', });
lyr_Irrigation_1.set('fieldImages', {'id': 'TextEdit', 'shift': 'TextEdit', 'number': 'TextEdit', 'S(ha)': 'TextEdit', 'drain(m3/h': 'TextEdit', });
lyr_Irrigation_1.set('fieldLabels', {'id': 'no label', 'shift': 'inline label', 'number': 'inline label', 'S(ha)': 'inline label', 'drain(m3/h': 'inline label', });
lyr_Irrigation_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});