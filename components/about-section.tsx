import { YouTubeEmbed } from "@next/third-parties/google"

export function AboutSection() {
  return (
    <section className="container px-4 py-8">
      <h2 className="mt-8 text-center text-4xl font-bold">
        Ktraw Skate Map について
      </h2>
      <div className="text-md mt-4 text-justify sm:text-center sm:text-lg">
        <p>
          このサイトは、ktraw1574-sk8のYoutubeチャンネルで紹介しているスケボースポットをMap化したサイトです。
        </p>
        <p className="mt-2">
          スケボースポットの様子は、Youtubeで紹介しているので、気になるスポットがあれば、ぜひチェックしてみてください！
        </p>
        <p className="mt-2">
          スケボースポットを探す際に、少しでもお役に立てれば幸いです。
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <h3 className="text-2xl font-bold">Red Eyes - ktraw1574</h3>
        <div className="mt-4 size-full max-w-[720px] overflow-hidden rounded-lg">
          <YouTubeEmbed videoid="k4RFgn9Or9Y" />
        </div>
        <h3 className="mt-12 text-2xl font-bold">ktraw1574 - 2023 part</h3>
        <div className="mt-4 size-full max-w-[720px] overflow-hidden rounded-lg">
          <YouTubeEmbed videoid="RsYLsAX1Ixw" />
        </div>
      </div>
    </section>
  )
}
