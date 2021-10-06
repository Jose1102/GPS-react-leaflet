import './App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';


function App() {
  return (
    <div className="App">
      <h1>Mapa</h1>

      <div className="Map">
        <MapContainer className="Map-container" center={[0,0]} zoom={5}>
          <TileLayer 
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      			url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
        </MapContainer>
      </div>

    </div>
  );
}

export default App;
