
import './index.css';


function Maps() {
  
  return (
    <section className="container-fluid map" style={{ height: 'auto' }}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.644812334774!2d-48.393043525034216!3d-1.3896797985971905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjMnMjIuOSJTIDQ4wrAyMycyNS43Ilc!5e0!3m2!1spt-BR!2sbr!4v1770306105647!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0 }} // Aqui você corrige o estilo para ser um objeto
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Maps;

/* 
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
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
    
  
   {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ height: '70vh', width: '100%' }}
          className="map-coor"
          center={position}
          zoom={20} // Zoom ajustado para uma visualização melhor
        >
        </GoogleMap>
      ) : (
        <h1>Carregando o mapa...</h1>
      )}*/