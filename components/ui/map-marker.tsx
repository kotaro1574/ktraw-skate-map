import { Icon } from "leaflet"

import "leaflet/dist/leaflet.css"

import Image from "next/image"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"
import { Marker, Popup } from "react-leaflet"

import { areasData } from "@/config/areas-data"
import { countriesData } from "@/config/countries-data"
import { Spot } from "@/config/spots-data"

import MarkerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png"
import MarkerShadow from "../../node_modules/leaflet/dist/images/marker-shadow.png"
import GoogleMapsLink from "../google-map-link"

type Props = {
  spot: Spot
}

export function MapMarker({ spot }: Props) {
  const area = areasData.find((area) => area.id === spot.areaId) || null

  if (!area) {
    return null
  }

  const country =
    countriesData.find((country) => country.id === area.countryId) || null

  if (!country) {
    return null
  }

  return (
    <Marker
      icon={
        new Icon({
          iconUrl: MarkerIcon.src,
          iconRetinaUrl: MarkerIcon.src,
          iconSize: [25, 41],
          iconAnchor: [12.5, 41],
          popupAnchor: [0, -41],
          shadowUrl: MarkerShadow.src,
          shadowSize: [41, 41],
        })
      }
      position={spot.center}
    >
      <Popup>
        <div className="w-64">
          <Link href={`/${country.nameEn}/${spot.id}`}>
            <div className="text-sm font-medium sm:font-semibold">
              {spot.name}
            </div>
          </Link>

          <div className="mt-2 overflow-hidden rounded-lg">
            <YouTubeEmbed videoid={spot.youTubeIds[0]} />
          </div>

          <div className="mt-2">
            <GoogleMapsLink lat={spot.center.lat} lng={spot.center.lng} />
          </div>
        </div>
      </Popup>
    </Marker>
  )
}
