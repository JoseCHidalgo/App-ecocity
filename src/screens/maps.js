// Integración del mapa de Google en React Native usando react-native-maps 
// https://aboutreact.com/react-native-map-example/
// Importar React 
import React from 'react'; 
// Importar los componentes necesarios 
import {SafeAreaView, StyleSheet, View} from 'react-native';
// Importar mapa y marcador 
import MapView, {Marker} from 'react-native-maps';
const App = () => { 
  return ( 
    <SafeAreaView style={{flex: 1}}> 
      <View style={styles.container}> 
        <MapView 
          style={styles.mapStyle} 
          initialRegion={{ 
            latitud: 37.78825, 
            longitud : -122.4324, 
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421, 
          }} 
          customMapStyle={mapStyle}> 
          < Coordenada 
            arrastrable del marcador 
            ={{ 
              latitud: 37.78825, 
              longitud: -122.4324, 
            }} 
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate)) 
            } 
            title={'Marcador de prueba'} 
            description={'Esta es una descripción del marcador'} 
          /> 
        </MapView> 
      </View> 
    </SafeAreaView> 
  ); 
};
//exportar la aplicación predeterminada;
const mapStyle = [ 
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]}, 
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]}, 
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]}, 
  { 
    featureType: 'administrative.locality', 
    elementType: 'labels.text.fill', 
    stylers: [{color: '#d59563'}], 
  }, 
  { 
    featureType: 'poi', 
    elementType: 'labels.text.fill', 
    stylers: [{color: '#d59563'}], 
  }, 
  { 
    featureType: 'poi.park', 
    elementType: 'geometría', 
    modeladores: [{color: '#263c3f'}],
  }, 
  { 
    FeatureType: 'poi.parque',
    elementType: 'labels.text.fill', 
    stylers: [{color: '#6b9a76'}], 
  }, 
  { 
    featureType: 'road', 
    elementType: 'geometry', 
    stylers: [{color: '#38414e'}] , 
  }, 
  { 
    featureType: 'road', 
    elementType: 'geometry.stroke', 
    stylers: [{color: '#212a37'}], 
  }, 
  { 
    featureType: 'road', 
    elementType: 'labels.text.fill', 
    estilistas: [{color: '#9ca5b3'}], 
  }, 
  { 
    featureType: 'road.highway', 
    elementType: 'geometry', 
    estilistas: [{color: '#746855'}], 
  },
  { 
    featureType: 'carretera.carretera',
    elementType: 'geometry.stroke', 
    stylers: [{color: '#1f2835'}], 
  }, 
  { 
    featureType: 'road.highway', 
    elementType: 'labels.text.fill', 
    stylers: [{color: '# f3d19c'}], 
  }, 
  { 
    featureType: 'transit', 
    elementType: 'geometry', 
    stylers: [{color: '#2f3948'}], 
  }, 
  { 
    featureType: 'transit.station', 
    elementType: 'labels.text .fill', 
    modeladores: [{color: '#d59563'}], 
  }, 
  { 
    featureType: 'water', 
    elementType: 'geometry', 
    modeladores: [{color: '#17263c'}], 
  },
  { 
    FeatureType: 'agua',
    elementType: 'labels.text.fill', 
    stylers: [{color: '#515c6d'}], 
  }, 
  { 
    featureType: 'water', 
    elementType: 'labels.text.stroke', 
    stylers: [{color: '# 17263c'}], 
  }, 
];
const estilos = StyleSheet.create({ 
  contenedor: { 
    posición: 'absoluto', 
    arriba: 0, 
    izquierda: 0, 
    derecha: 0, 
    abajo: 0, 
    alignItems: 'center', 
    allowContent: 'flex-end', 
  }, 
  mapStyle : { 
    posición: 'absoluto', 
    arriba: 0, 
    izquierda: 0, 
    derecha: 0, 
    abajo: 0, 
  }, 
});