export type Area = {
  id: number
  name: string
  nameEn: string
  countryId: number
  zoom: number
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
    zoom: 11,
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
    zoom: 11,
    center: {
      lat: 49.2487,
      lng: -122.9787,
    },
  },
  {
    id: 3,
    name: "リッチモンド",
    nameEn: "richmond",
    countryId: 1,
    zoom: 11,
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
    zoom: 11,
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
    zoom: 11,
    center: {
      lat: 47.6062,
      lng: -122.3321,
    },
  },
  {
    id: 6,
    name: "岡山",
    nameEn: "okayama",
    countryId: 3,
    zoom: 10,
    center: {
      lat: 34.6556,
      lng: 133.919,
    },
  },
  {
    id: 7,
    name: "広島",
    nameEn: "hiroshima",
    countryId: 3,
    zoom: 11,
    center: {
      lat: 34.3853,
      lng: 132.4553,
    },
  },
  {
    id: 8,
    name: "徳島",
    nameEn: "tokushima",
    zoom: 10,
    countryId: 3,
    center: {
      lat: 34.0703,
      lng: 134.5547,
    },
  },
  {
    id: 9,
    name: "ロサンゼルス",
    nameEn: "los angeles",
    zoom: 11,
    countryId: 2,
    center: {
      lat: 34.0522,
      lng: -118.2437,
    },
  },
  {
    id: 10,
    name: "愛媛",
    nameEn: "ehime",
    zoom: 9,
    countryId: 3,
    center: {
      lat: 34.06606715614301,
      lng: 132.99812146743378,
    },
  },
  {
    id: 11,
    name: "山口",
    nameEn: "yamaguchi",
    zoom: 8,
    countryId: 3,
    center: {
      lat: 34.1862,
      lng: 131.4736,
    },
  },
  {
    id: 12,
    name: "兵庫",
    nameEn: "hyogo",
    zoom: 10,
    countryId: 3,
    center: {
      lat: 34.6852,
      lng: 135.2001,
    },
  },
]
