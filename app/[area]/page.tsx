import dynamic from "next/dynamic"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"

import { spotsData } from "@/config/spots-data"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// `window` オブジェクトに依存しているため、サーバーサイドでのレンダリングを無効にする
const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => (
    <Skeleton className="flex h-[350px] items-center justify-center sm:h-[450px] md:h-[600px]">
      Loading map...
    </Skeleton>
  ),
})

export default function SpotsAreaPage({
  params,
}: {
  params: { area: string }
}) {
  const spots = spotsData.filter((spot) => spot.area === params.area)

  return (
    <section>
      <div className="h-[350px] sm:h-[450px] md:h-[600px]">
        <Map
          center={{ lat: spots[0].center.lat, lng: spots[0].center.lng }}
          zoom={12}
          spots={spotsData}
        />
      </div>
      <div className="container grid grid-cols-4 gap-4 px-4 pt-8 sm:grid-cols-8">
        <Link className={buttonVariants({ variant: "outline" })} href={"/"}>
          🛹
        </Link>
        {spots[0].area === "canada" ? (
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"/america"}
          >
            🇺🇸
          </Link>
        ) : (
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={"/canada"}
          >
            🇨🇦
          </Link>
        )}
      </div>
      <div className="container px-4 pb-20 pt-8">
        <h1 className="mt-8 text-center text-4xl font-bold">{spots[0].area}</h1>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((spot) => (
            <Card key={spot.id} className="flex flex-col justify-between">
              <Link href={`/spots/${spot.id}`}>
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
