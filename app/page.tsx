import dynamic from "next/dynamic"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"

import { spotsData } from "@/config/spots-data"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

// `window` オブジェクトに依存しているため、サーバーサイドでのレンダリングを無効にする
const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => (
    <Skeleton className="flex h-[600px] items-center justify-center">
      Loading map...
    </Skeleton>
  ),
})

export default function IndexPage() {
  return (
    <section className="">
      <Map center={[49.2827, -123.1207]} zoom={13} />
      <div className="container py-8">
        <h1 className="mt-8 text-center text-4xl font-bold">最新の投稿</h1>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spotsData.map((spot) => (
            <Card key={spot.id} className="flex flex-col justify-between">
              <Link href={`/spots/${spot.id}`}>
                <CardHeader>{spot.title}</CardHeader>
              </Link>
              <CardContent>
                <div className="overflow-hidden rounded-lg">
                  <YouTubeEmbed videoid={spot.id} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
