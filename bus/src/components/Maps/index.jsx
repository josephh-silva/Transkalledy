import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './index.css';

function Maps() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBEIaqsQOoOICoMcewzuu2Goj3ffy2Ljvo', // Substitua por sua chave de API
  });

  // Se a chave de API não for configurada corretamente ou houver algum erro no carregamento
  if (loadError) {
    return <h1>Erro ao carregar o mapa: {loadError.message}</h1>;
  }
  const position = {
    lat: -1.4025303117766266, 
    lng:  -48.42685922023984
  }

  return (
    <section className="container-fluid map" style={{ height: 'auto' }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ height: '70vh' }}
          className="map-coor"
          center={position}
          zoom={20} // Zoom ajustado para uma visualização melhor
        >
        </GoogleMap>
      ) : (
        <h1>Carregando o mapa...</h1>
      )}
    </section>
  );
}

export default Maps;

