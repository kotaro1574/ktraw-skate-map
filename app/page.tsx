import dynamic from "next/dynamic"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"

import { areasData } from "@/config/areas-data"
import { countriesData } from "@/config/countries-data"
import { spotsData } from "@/config/spots-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"

// `window` オブジェクトに依存しているため、サーバーサイドでのレンダリングを無効にする
const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => (
    <Skeleton className="flex h-[350px] items-center justify-center sm:h-[450px] md:h-[600px]">
      Loading map...
    </Skeleton>
  ),
})

export default function HomePage() {
  const getArea = (areaId: number) => {
    return areasData.find((area) => area.id === areaId) || null
  }

  return (
    <section>
      <div className="h-[350px] sm:h-[450px] md:h-[600px]">
        <Map
          center={{ lat: 49.2827, lng: -123.1207 }}
          zoom={11}
          spots={spotsData}
        />
      </div>
      <div className="container px-4 pb-20 pt-8">
        <h1 className="mt-8 text-center text-2xl font-bold sm:text-4xl">
          スポットエリア🗺️
        </h1>
        <div className="mx-auto mt-8 max-w-lg">
          <Accordion type="single" collapsible>
            {countriesData.map((country) => (
              <AccordionItem value={country.name} key={`country-${country.id}`}>
                <AccordionTrigger>{country.name}</AccordionTrigger>
                <AccordionContent className="space-y-1">
                  {areasData
                    .filter((area) => area.countryId === country.id)
                    .map((area) => (
                      <div key={`area-${area.id}`}>
                        <Link
                          href={`/${area.nameEn}`}
                          className={`${buttonVariants({ variant: "ghost" })} w-full !justify-normal`}
                        >
                          <Icons.circle className="mr-1 size-3" />
                          {area.name}
                        </Link>
                      </div>
                    ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="container px-4 pb-20 pt-8">
        <h2 className="mt-8 text-center text-2xl font-bold sm:text-4xl">
          最新の投稿
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spotsData.map((spot) => (
            <Card key={spot.id} className="flex flex-col justify-between">
              <Link href={`/${getArea(spot.areaId)?.nameEn}/${spot.id}`}>
                <CardHeader>
                  {`【${getArea(spot.areaId)?.name}】`}
                  <br />
                  {spot.name}
                </CardHeader>
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
