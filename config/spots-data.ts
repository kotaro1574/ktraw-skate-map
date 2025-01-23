export type Spot = {
  id: number
  name: string
  description?: string
  area: "canada" | "america"
  youTubeIds: string[]
  center: {
    lat: number
    lng: number
  }
}

export const spotsData: Spot[] = [
  {
    id: 22,
    youTubeIds: ["QW8SO0KUALY"],
    name: "【ポートランド】ディレクター公園",
    description:
      "ザ・スケボースポットって感じの公園\n縁石、マニュアル台、ステア色々ある\nただ、警備員がいるので昼間は無理っぽいかなー👮\nやるなら早朝か夜がいいかもしれん\n俺も動画でスイッチノーズスライドやってるけどこれ朝の11時くらい\nでもメイクするまでやらせてくれた\nすごい優しいよねー。日本じゃ考えられんな\nけどもうちょいやりたかったなぁー笑",
    area: "america",
    center: {
      lat: 45.51872618248788,
      lng: -122.68139107949568,
    },
  },
  {
    id: 21,
    youTubeIds: ["Rm_puKbBLL4"],
    name: "【ポートランド】ダウンタウンの法律事務所",
    description:
      "ダウンタウンにある有名なスケボースポット\n四方八方スポット！妄想が膨らむ🤤\nレンガの路面がいい感じ\n法律事務所だから土日の方がいいのかな？\n俺は休みの日に行った",
    area: "america",
    center: {
      lat: 45.514606266065876,
      lng: -122.68036992702615,
    },
  },
  {
    id: 20,
    youTubeIds: ["04NSlRWgkVw"],
    name: "【ポートランド】ウォーターフロントにあるダウンレッジ",
    description:
      "近くで見ると意外といかつくて、すぐにテール弾けんかった。\n最初ノーズかけにいくの怖かったなぁ笑\nストリート感あっていい感じのダウンレッジだと思う\nすぐ横にはマニュアル台もあった\n",
    area: "america",
    center: {
      lat: 45.522254974598134,
      lng: -122.66953495415979,
    },
  },
  {
    id: 19,
    youTubeIds: ["ErW61Yd0Jfw"],
    name: "【ポートランド】上りの縁石",
    description:
      "この縁石の周りも色々スポットあってやばかった！\n駐車場の中の方にもいい感じの縁石やマニュアル台があった\n体力的しんどかったけここしかせめんかったけど笑\n無限の体力と時間がほしい",
    area: "america",
    center: {
      lat: 45.51297117800011,
      lng: -122.6678479303443,
    },
  },
  {
    id: 18,
    youTubeIds: ["T_azTXDMfaA"],
    name: "【ポートランド】ラウンド縁石",
    description:
      "ポートランド旅行の初日に発見したスポット\nスケートストップが付いてるから合間をグラインドやスライドしないといけない笑\nスケートストップが付いてない時に来たかったな笑\n想像しただけで🤤",
    area: "america",
    center: {
      lat: 45.522632061208114,
      lng: -122.67682558974211,
    },
  },
  {
    id: 17,
    youTubeIds: ["BSDfDOnW0UY"],
    name: "【バンクーバー】イエールタウン駅の６段ステア",
    description:
      "イエールタウン駅にある６段ステア\n高さがあるだけで幅があんまり無いからフェイキーヒールいけるかと思ったけど無理だった😭\n着地の路面が悪いから転けるとクソ痛い\n縁石もあるのでラインも組めると思う",
    area: "canada",
    center: {
      lat: 49.27471769703346,
      lng: -123.12127986928735,
    },
  },
  {
    id: 16,
    youTubeIds: ["BcWtAuqUEn4"],
    name: "【バンクーバー】託児所のステア",
    area: "canada",
    description:
      "託児所のステア\nここの託児所もなかなかのスケートボードスポットで縁石、マニュアル台、ステア全てが揃っている\n裏には、ラウンドした極上縁石がある。クソむずかった笑\n滑ってると子供達が見てきて可愛い笑",
    center: {
      lat: 49.255239602503885,
      lng: -123.0834869576709,
    },
  },
  {
    id: 15,
    youTubeIds: ["zIu_vc283Cc"],
    name: "【バンクーバー】アートギャラリーの縁石",
    area: "canada",
    description:
      "アートギャラリーの裏にある縁石\n高さもちょうどいい感じ\n縁石のゴリゴリ具合もいい感じだお🤤\nただ、人通りが多いから気おつけて",
    center: {
      lat: 49.28321376320037,
      lng: -123.12065191564677,
    },
  },
  {
    id: 14,
    youTubeIds: ["MQ1EZ4FwBOI"],
    name: "【バンクーバー】アートギャラリーの５段ステア",
    description:
      "有名なステアスポット\nステアの横には、縁石もあるからラインが組みやすい\nただ、今はステア飛べないように花壇が置いてある\n全然、飛べるけどトリックによっては難しかったりするかもね\nまあこれがストリートの醍醐味でもある",
    area: "canada",
    center: {
      lat: 49.282556078526206,
      lng: -123.1205809352389,
    },
  },
  {
    id: 13,
    youTubeIds: ["kTqonLF-W8o"],
    name: "【バンクーバー】高層ビルの６段ステア",
    description:
      "アプローチがいい感じだから飛びやすかった\nただ、キックアウトが早いから早めに決めないといけない\n警備員がいない時を狙うのがいいかもね👮\nプラザが近いからプラザでアップしてくると良いかもとか考えてたスポット",
    area: "canada",
    center: {
      lat: 49.277151062814625,
      lng: -123.10880623899718,
    },
  },
  {
    id: 12,
    youTubeIds: ["ChIwDSDh7Lk", "huBan6hc7Nk"],
    name: "【バンクーバー】The Plaza Skatepark",
    description:
      "ここは聖地\n本当にスケボーを好きな奴らが集まってきてる感じがする\nパークだけどストリートの雰囲気が漂うパークって感じ、\n毎日居るメンツもヤバいし刺激的なスポット\nバンク、縁石、マニュアル台とかが大理石なのヤバいよね🤤\n",
    area: "canada",
    center: {
      lat: 49.2773774432947,
      lng: -123.10241754907588,
    },
  },
  {
    id: 11,
    youTubeIds: ["ycATXgYXi6Y"],
    name: "【バーナビー】ウォーターサーバーを物超え",
    description:
      "ボンザのパーク内にあるウォーターサーバー💧\nなんかいけそうな気がしたから飛んでみた\nボンザのパークは、雰囲気がchillな感じでみんな優しいし、いろんなセクションが揃ってるから調子いい\nまた行きたいな",
    area: "canada",
    center: {
      lat: 49.222852408149514,
      lng: -122.99670933493633,
    },
  },
  {
    id: 10,
    youTubeIds: ["M5xyvt9ZdMo"],
    name: "【バンクーバー】アートギャラリーの3段ステア",
    description:
      "アートギャラリーの３段ステア！\n3段だけど高さがあるから映像的に映える\nただここの通りは、人が多いから朝とか夜とかの方がいいかもね",
    area: "canada",
    center: {
      lat: 49.28247648065291,
      lng: -123.12146527116455,
    },
  },
  {
    id: 9,
    youTubeIds: ["WPjLvfu2XlU"],
    name: "【バーナビー】バンクインスポット",
    area: "canada",
    description:
      "有名なバンクインスポット！\nウエストゲートは、一つ目のバンク使ってフロントフリップで上に登ってたけど....🤷‍♂️\n学校の中っぽいから夏休みとか土日とかに行った方がいいかもね",
    center: {
      lat: 49.243049402221374,
      lng: -122.97211881349362,
    },
  },
  {
    id: 8,
    youTubeIds: ["Smd8wqmzvQ0"],
    name: "【バンクーバー】ベンチ",
    description:
      "バンクーバーの街中は、ほんとスケボー天国👼\n店の前だけどキックアウト無し🤩\nイスも自由に動かせるし、真ん中の金属とかもう...🤤\n椅子飛び越えるのってかっこいいよねー",
    area: "canada",
    center: {
      lat: 49.27599156472149,
      lng: -123.1142420434829,
    },
  },
  {
    id: 7,
    youTubeIds: ["giOgoTIIUGU"],
    name: "【シアトル】シアトルのアップレッジ",
    description:
      "シアトル旅行で発見したスポット！\nすぐ横に警備員がいるからすぐに決めないといけない👮\nと思いきやメイクするまでやらせてくれた！優しい！\nけど納得いかないメイクだったので本当はもうちょいやりたかった笑\n多分ここを攻めるなら夜なのかもしれない🤫🌃",
    area: "america",
    center: {
      lat: 47.60053482931784,
      lng: -122.33308158465819,
    },
  },
  {
    id: 6,
    youTubeIds: ["UKn23fYVibk"],
    name: "【リッチモンド】Brighouse Station 裏のレッジ",
    area: "canada",
    description:
      "Brighouse駅の裏にあるのでアクセスがしやすい極上スポット👍\n縁石好きには、たまらないスポットだと思う🤤\nラインも組めるし、撮影にもってこいなスポット",
    center: {
      lat: 49.16733199565234,
      lng: -123.13433012999562,
    },
  },
  {
    id: 5,
    youTubeIds: ["nV7PgYprf8Y"],
    name: "【リッチモンド】リッチモンドにあるダウンレッジ",
    description:
      "発見した瞬間、思わずよだれが出てしまうくらいの極上ダウンレッジ🤤\n路面は悪い！笑\nしかしそんな事関係ないぐらい楽しいスポット\nあんな事やこんな事妄想が膨らむスポット🤤",
    area: "canada",
    center: {
      lat: 49.16215314886755,
      lng: -123.13866991164544,
    },
  },
  {
    id: 4,
    youTubeIds: ["ZdqeE1zxJGA"],
    name: "【バンクーバー】レール越え",
    area: "canada",
    description:
      "路面が荒くてしんどかった\nレールの高さはちょうどいい感じ👍\n他にもイカついけどレッジとかもあってスポット的には、色々できそうでいい感じ\n後、変な人に絡まれた。🔪俺も変な奴だけどな！！でも気おつけてな！",
    center: {
      lat: 49.28287917199901,
      lng: -123.11365832698728,
    },
  },
  {
    id: 3,
    youTubeIds: ["kiVpiV595q4"],
    name: "【バンクーバー】アートギャラリーにある大きな台",
    area: "canada",
    description:
      "俺は、気持ち高くて怖かった笑\nでも飛ぶの好きな人はいい感じの高さじゃないのかな？🤔\n幅が無いからトリックが選びやすい！\nスライドとかグラインドかける奴がおったらかなりやばいね💭",
    center: {
      lat: 49.28326864624883,
      lng: -123.11984246067236,
    },
  },
  {
    id: 2,
    youTubeIds: ["Rsfb9ih4bp0"],
    name: "【バンクーバー】物超えにも使える良き縁石",
    area: "canada",
    description:
      "高さも丁度いいし、ワックスもめっちゃ塗られてて滑り具合もいい感じ👍\nパークの縁石並みに練習できる\n物超えにも使える\nしかし自転車道の横にある縁石だから自転車に気おつけて🚴‍♂️",
    center: {
      lat: 49.2746298682028,
      lng: -123.1144968876603,
    },
  },
  {
    id: 1,
    youTubeIds: ["bCREe88IU_c"],
    name: "【バンクーバー】橋の下にあったいい感じのレッジ",
    description:
      "思ったより高くて苦戦した。ちょい膝上くらいの高さはある。\nあとアプローチがなんか難しい、絶妙に路面が凸凹で距離が短い、そして高いからなんか難しい。\nそんなスポットでした。📍",
    area: "canada",
    center: {
      lat: 49.27342920198536,
      lng: -123.11442272698729,
    },
  },
]
