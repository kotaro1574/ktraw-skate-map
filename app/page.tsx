import dynamic from "next/dynamic"

// `window` オブジェクトに依存しているため、サーバーサイドでのレンダリングを無効にする
const Map = dynamic(() => import("@/components/ui/map"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

export default function IndexPage() {
  return (
    <section className="">
      <Map center={[51.505, -0.09]} zoom={13} />
    </section>
  )
}
