import React, {useEffect} from "react";

const {kakao} = window

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap')
        const options = {
            center: new kakao.maps.LatLng(36.49780, 127.2734),
            level: 3
        }
        const map = new kakao.maps.Map(container, options)
    }, [])
    
    return (
        <div id="myMap" style={{
            width: '500px',
            height: '300px'
        }}></div>
    )
}

export default MapContainer