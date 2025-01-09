"use client"

import { LatLngExpression } from "leaflet"

import "leaflet/dist/leaflet.css"

import { MapContainer, TileLayer } from "react-leaflet"

type Props = {
  center: LatLngExpression
  zoom: number
}

export default function Map({ center, zoom }: Props) {
  return (
    <MapContainer
      style={{
        height: "100%",
        width: "100%",
      }}
      center={center}
      key={`${center}`}
      zoom={zoom}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}
