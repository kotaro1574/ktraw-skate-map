"use client"

import { useMemo, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"

import { Area, areasData } from "@/config/areas-data"
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
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"

export const runtime = "edge"

export default function AreaPage({ params }: { params: { country: string } }) {
  const country =
    countriesData.find((country) => country.nameEn === params.country) || null

  if (!country) {
    return <p>Area not found</p>
  }

  const areas = areasData.filter((area) => area.countryId === country.id)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedArea, setSelectedArea] = useState<Area | null>(null)

  // areasWithSpots を useMemo で作成し、selectedArea に応じて並び替える
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const areasWithSpots = useMemo(() => {
    const areasList = areas.map((area) => {
      const spots = spotsData.filter((spot) => spot.areaId === area?.id)
      return {
        id: area.id,
        name: area.name,
        spots,
      }
    })

    // selectedArea に基づいて並び替え
    return areasList.sort((a, b) => {
      if (a.id === selectedArea?.id) return -1
      if (b.id === selectedArea?.id) return 1
      return 0
    })
  }, [areas, selectedArea])

  const Map = dynamic(() => import("@/components/ui/map"), {
    ssr: false,
    loading: () => (
      <Skeleton className="flex h-[350px] items-center justify-center sm:h-[450px] md:h-[600px]">
        Loading map...
      </Skeleton>
    ),
  })

  return (
    <section>
      <div className="h-[350px] sm:h-[450px] md:h-[600px]">
        <Map
          center={{
            lat: selectedArea ? selectedArea.center.lat : country.center.lat,
            lng: selectedArea ? selectedArea.center.lng : country.center.lng,
          }}
          zoom={selectedArea ? selectedArea.zoom : country.zoom}
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
              <BreadcrumbPage>{country.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mx-auto mt-8">
          {areas.map((area) => (
            <Button
              key={`select-area-${area.name}`}
              variant={"outline"}
              className="mr-2 mt-2 rounded-sm"
              onClick={() => {
                setSelectedArea(area)
              }}
            >
              <Icons.circle className="mr-1 size-3" />
              {area.name}
            </Button>
          ))}
        </div>
        {areasWithSpots.map((areaWithSpots) => (
          <div key={`areaWithSpots-${areaWithSpots.name}`}>
            <h1 className="mt-8 text-center text-2xl font-bold sm:text-4xl">
              {`【${areaWithSpots.name}】`}
            </h1>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {areaWithSpots.spots.map((spot) => (
                <Card key={spot.id} className="flex flex-col justify-between">
                  <Link href={`/${country.nameEn}/${spot.id}`}>
                    <CardHeader>
                      {`【${areaWithSpots.name}】`}
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
        ))}
      </div>
    </section>
  )
}
