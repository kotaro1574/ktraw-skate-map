type Country = {
  id: number
  name: string
  nameEn: string
  zoom: number
  center: {
    lat: number
    lng: number
  }
}

export const countriesData: Country[] = [
  {
    id: 1,
    name: "カナダ🇨🇦",
    nameEn: "canada",
    zoom: 10,
    center: {
      lat: 49.2827,
      lng: -123.1207,
    },
  },
  // {
  //   id: 2,
  //   name: "アメリカ🇺🇸",
  //   nameEn: "america",
  // },
  {
    id: 3,
    name: "日本🇯🇵",
    nameEn: "japan",
    zoom: 7,
    center: {
      lat: 34.755653492545136,
      lng: 133.53109275623473,
    },
  },
]
