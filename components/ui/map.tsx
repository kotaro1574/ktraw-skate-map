"use client"

import "leaflet/dist/leaflet.css"

import { MapContainer, TileLayer } from "react-leaflet"

import { Spot } from "@/config/spots-data"

import { MapMarker } from "./map-marker"

type Props = {
  center: { lat: number; lng: number }
  zoom: number
  spots: Spot[]
}

export default function Map({ center, zoom, spots }: Props) {
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
      {spots.map((spot) => (
        <MapMarker spot={spot} />
      ))}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}
