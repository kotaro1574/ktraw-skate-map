import dynamic from "next/dynamic"

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
      <Map center={[51.505, -0.09]} zoom={13} />
    </section>
  )
}
