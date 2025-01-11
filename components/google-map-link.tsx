import Link from "next/link"

interface GoogleMapsLinkProps {
  lat: number
  lng: number
  zoom?: number
}

export default function GoogleMapsLink({
  lat,
  lng,
  zoom = 15,
}: GoogleMapsLinkProps) {
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}`

  return (
    <Link
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      Google Mapsで見る
    </Link>
  )
}
