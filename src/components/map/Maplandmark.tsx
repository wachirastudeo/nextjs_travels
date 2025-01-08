'use client'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

const iconUrl =
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [20, 30],
});

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click(e) {
            map.locate()
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
        // locationfound(e) {
        //     setPosition(e.latlng)
        //     map.flyTo(e.latlng, map.getZoom())
        // },
    })

    return position === null ? null : (
        <Marker position={position} icon={markerIcon}>
            <Popup>You are here</Popup>
        </Marker>
    )
}


const Maplandmark = () => {

    return (
        <MapContainer
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={13}
            scrollWheelZoom={false}
            className='h-[50vh]'

        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    )
}
export default Maplandmark