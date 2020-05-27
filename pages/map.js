import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'

class Map extends Component {
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoicnlhbmhhbWxleSIsImEiOiJjaWszbmluaG8wMDAzdTBrc2Q3Ymk3b3l1In0.BxdMyaYKg_0-LwANjPybNA';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    }

    render() {
        return (
          <div className="container">
            <div id="map"></div>

            <style jsx>{`
              #map { position: absolute; top: 0; bottom: 0; width: 100%; }
            `}</style>

            <style jsx global>{`
              body { margin: 0; padding: 0; }
            `}</style>
          </div>
        )
    }
}


export default Map
