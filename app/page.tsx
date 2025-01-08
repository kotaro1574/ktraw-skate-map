import dynamic from "next/dynamic"
import { YouTubeEmbed } from "@next/third-parties/google"

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

const youTubeContents = [
  {
    id: "BSDfDOnW0UY",
    title: "☠️☠️☠️💫💫",
  },
  {
    id: "BcWtAuqUEn4",
    title: "フェイキーヒール",
  },
  {
    id: "zIu_vc283Cc",
    title: "フェイキーポップテールスライドの巻",
  },
  {
    id: "MQ1EZ4FwBOI",
    title: "アートギャラリーのステアセッション",
  },
  {
    id: "kTqonLF-W8o",
    title: "ステアでフロントポップ",
  },
  {
    id: "ChIwDSDh7Lk",
    title: "5-O to K grind への道のり",
  },
  {
    id: "ycATXgYXi6Y",
    title: "フェイキーハーフキャブヒールで物超え♪Ｏ（≧∇≦）Ｏ",
  },
  {
    id: "M5xyvt9ZdMo",
    title: "アートギャラリーの3段ステアでSwitch Flip",
  },
  {
    id: "WPjLvfu2XlU",
    title: "スイッチフリップでバンクインしたお",
  },
]

export default function IndexPage() {
  return (
    <section className="">
      <Map center={[49.2827, -123.1207]} zoom={13} />
      <div className="container py-8">
        <h1 className="mt-8 text-center text-4xl font-bold">最新の投稿</h1>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {youTubeContents.map((content) => (
            <Card key={content.id} className="flex flex-col justify-between">
              <CardHeader>{content.title}</CardHeader>
              <CardContent>
                <YouTubeEmbed videoid={content.id} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
