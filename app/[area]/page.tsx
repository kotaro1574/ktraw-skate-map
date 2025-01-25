import dynamic from "next/dynamic"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"

import { areasData } from "@/config/areas-data"
import { spotsData } from "@/config/spots-data"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const runtime = "edge"

// `window` オブジェクトに依存しているため、サーバーサイドでのレンダリングを無効にする
const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => (
    <Skeleton className="flex h-[350px] items-center justify-center sm:h-[450px] md:h-[600px]">
      Loading map...
    </Skeleton>
  ),
})

export default function AreaPage({ params }: { params: { area: string } }) {
  const area = areasData.find((area) => area.nameEn === params.area) || null
  const spots = spotsData.filter((spot) => spot.areaId === area?.id)

  if (!area) {
    return <p>Area not found</p>
  }

  return (
    <section>
      <div className="h-[350px] sm:h-[450px] md:h-[600px]">
        <Map
          center={{ lat: area.center.lat || 0, lng: area.center.lng || 0 }}
          zoom={12}
          spots={spotsData}
        />
      </div>
      <div className="container px-4 pb-20 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{area.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-8 text-center text-2xl font-bold sm:text-4xl">
          {area.name}
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((spot) => (
            <Card key={spot.id} className="flex flex-col justify-between">
              <Link href={`/${area.nameEn}/${spot.id}`}>
                <CardHeader>{spot.name}</CardHeader>
              </Link>
              <CardContent>
                <div className="overflow-hidden rounded-lg">
                  <YouTubeEmbed videoid={spot.youTubeIds[0]} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
