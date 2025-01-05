import Map from "@/components/ui/map"

export default function IndexPage() {
  return (
    <section className="">
      <Map center={[51.505, -0.09]} zoom={13} />
    </section>
  )
}
