import dynamic from "next/dynamic"
import { YouTubeEmbed } from "@next/third-parties/google"

import { spotsData } from "@/config/spots-data"
import { Skeleton } from "@/components/ui/skeleton"

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

export default function SpotPage({ params }: { params: { id: string } }) {
  const spot = spotsData.find((spot) => spot.id === params.id)

  if (!spot) {
    return <p>Spot not found</p>
  }

  return (
    <section>
      <div className="h-[250px] sm:h-[350px] md:h-[500px]">
        <Map center={[49.2827, -123.1207]} zoom={13} />
      </div>
      <div className="container py-8">
        <h1 className="text-center text-4xl font-bold">{spot.title}</h1>
        <div className="mt-8 flex items-center justify-center">
          <div className="size-full max-w-[720px] overflow-hidden rounded-lg">
            <YouTubeEmbed videoid={params.id} />
          </div>
        </div>
      </div>
    </section>
  )
}
