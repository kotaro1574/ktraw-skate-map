import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

interface GoogleMapsLinkProps {
  lat: number // 緯度
  lng: number // 経度
  zoom?: number // ズームレベル
  variant?: "default" | "button" // リンクの表示タイプ
}

export default function GoogleMapsLink({
  lat,
  lng,
  zoom = 15,
  variant = "default",
}: GoogleMapsLinkProps) {
  const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}`

  const linkProps = {
    href: mapsUrl,
    target: "_blank",
    rel: "noopener noreferrer",
  }

  // variant によってスタイルを切り替え
  return variant === "button" ? (
    <Link
      {...linkProps}
      className={`${cn(buttonVariants())} w-full rounded-sm`}
    >
      Google Mapsで見る 🗺️
    </Link>
  ) : (
    <Link
      {...linkProps}
      className="text-blue-600 underline hover:text-blue-800"
    >
      Google Mapsで見る 🗺️
    </Link>
  )
}
