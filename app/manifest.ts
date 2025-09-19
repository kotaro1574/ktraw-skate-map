import { MetadataRoute } from "next"

export const runtime = "edge"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ktraw Skate Map",
    short_name: "SkateMap",
    description:
      "ktraw1574-sk8のYoutubeチャンネルで紹介しているスケボースポットをマップ化したサイトです。スケボースポットの様子は、Youtubeで紹介しているので、気になるスポットがあれば、ぜひチェックしてみてください！スケボースポットを探す際に、少しでもお役に立てれば幸いです。",
    orientation: "any",
    start_url: "/",
    display: "standalone",
    theme_color: "#8936FF",
    background_color: "#2effe7",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icon512_rounded.png",
        type: "image/png",
      },
    ],
  }
}
