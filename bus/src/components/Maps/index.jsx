
import './index.css';


function Maps() {
  
  return (
    <section className="container-fluid map" style={{ height: 'auto' }}>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6226626140533!2d-48.429391225275225!3d-1.4027340985840133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48b08b5feac09%3A0x260c429b1f0d97f!2sTranskalledy%20Transportes!5e0!3m2!1spt-PT!2sbr!4v1743766101165!5m2!1spt-PT!2sbr"
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