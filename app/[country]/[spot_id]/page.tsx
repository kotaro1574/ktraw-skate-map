"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { YouTubeEmbed } from "@next/third-parties/google"
import DOMPurify from "dompurify"

import { areasData } from "@/config/areas-data"
import { countriesData } from "@/config/countries-data"
import { spotsData } from "@/config/spots-data"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Skeleton } from "@/components/ui/skeleton"
import GoogleMapsLink from "@/components/google-map-link"

export const runtime = "edge"

// `window` オブジェクトに依存しているため、サーバーサイドでのレンダリングを無効にする
const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => (
    <Skeleton className="flex h-[250px] items-center justify-center sm:h-[350px] md:h-[500px]">
      Loading map...
    </Skeleton>
  ),
})

export default function SpotPage({
  params,
}: {
  params: { country: string; spot_id: string }
}) {
  const country =
    countriesData.find((country) => country.nameEn === params.country) || null

  if (!country) {
    return <p>Country not found</p>
  }

  const spot =
    spotsData.find((spot) => String(spot.id) === params.spot_id) || null

  if (!spot) {
    return <p>Spot not found</p>
  }

  const area = areasData.find((area) => area.id === spot.areaId) || null

  if (!area) {
    return <p>Area not found</p>
  }

  return (
    <section>
      <div className="h-[250px] sm:h-[350px] md:h-[500px]">
        <Map center={spot.center} zoom={13} spots={[spot]} />
      </div>
      <div className="container px-4 pb-20 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${country.nameEn}`}>
                {country.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>スポット</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-8 text-2xl font-bold sm:text-center sm:text-4xl">
          {`【${area.name}】`}
        </h1>
        <h2 className="mt-4 text-2xl font-bold sm:text-center sm:text-4xl">
          {spot.name}
        </h2>

        <div className="mt-8 flex items-center justify-center">
          <Image
            src={spot.image || ""}
            alt={spot.name}
            width={720}
            height={405}
          />
        </div>

        <div className="mx-auto max-w-[720px]">
          <GoogleMapsLink lat={spot.center.lat} lng={spot.center.lng} />
        </div>

        {spot.description && (
          <div className="mt-12 flex items-center justify-center">
            <div className="w-full max-w-[720px] whitespace-pre-wrap">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(spot.description ?? ""),
                }}
              />
              <p>
                スポットの映像をYoutubeにアップロードしているので参考にしてみてください。
              </p>
            </div>
          </div>
        )}

        {spot.youTubeIds.map((youTubeId) => (
          <div
            key={youTubeId}
            className="mt-8 flex items-center justify-center"
          >
            <div className="size-full max-w-[720px] overflow-hidden rounded-lg">
              <YouTubeEmbed videoid={youTubeId} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
