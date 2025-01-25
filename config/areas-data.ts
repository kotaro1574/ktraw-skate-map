type Area = {
  id: number
  name: string
  nameEn: string
  countryId: number
  center: {
    lat: number
    lng: number
  }
}

export const areasData: Area[] = [
  {
    id: 1,
    name: "バンクーバー",
    nameEn: "vancouver",
    countryId: 1,
    center: {
      lat: 49.2827,
      lng: -123.1207,
    },
  },
  {
    id: 2,
    name: "バーナビー",
    nameEn: "burnaby",
    countryId: 1,
    center: {
      lat: 49.2421,
      lng: -122.8895,
    },
  },
  {
    id: 3,
    name: "リッチモンド",
    nameEn: "richmond",
    countryId: 1,
    center: {
      lat: 49.1666,
      lng: -123.1336,
    },
  },
  {
    id: 4,
    name: "ポートランド",
    nameEn: "portland",
    countryId: 2,
    center: {
      lat: 45.5051,
      lng: -122.675,
    },
  },
  {
    id: 5,
    name: "シアトル",
    nameEn: "seattle",
    countryId: 2,
    center: {
      lat: 47.6062,
      lng: -122.3321,
    },
  },
]
