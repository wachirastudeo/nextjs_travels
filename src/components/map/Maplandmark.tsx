'use client'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const iconUrl =
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [20, 30],
});


const Maplandmark = () => {
    const position = [14, 100]

    return (
        <MapContainer
            center={position}
            zoom={7}
            scrollWheelZoom={true}
            className='h-[50vh]'

        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
                <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
        </MapContainer>
    )
}
export default Maplandmark