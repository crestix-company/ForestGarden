const lunchMenu = [
  { name: 'Forest Gardenの日替りプレート', price: '1,700', note: 'その日のお楽しみプレート。旬の彩りを少しずつ。' },
  { name: '薬膳キーマカレー', price: '1,700', note: 'スパイスと薬膳素材をバランスよく合わせた中辛カレー。' },
  { name: 'トマトソース煮込みハンバーグ', price: '1,700', note: '旨味たっぷりのトマトソースでじっくり煮込みました。' },
  { name: '特製オニオンソースのハンバーグ', price: '1,700', note: '特製シャリアピンソースで、香りよく仕上げました。' },
  { name: '季節のお野菜のミートグラタン', price: '1,700', note: '旬のお野菜と、とろりと溶けたチーズを一緒に。' },
  { name: 'ゴロっとお肉のビーフシチュー', price: '2,200', note: '大きなお肉をじっくり煮込み、やわらかく。' },
];

const menuGroups = [
  {
    title: 'Kids',
    jp: 'お子様メニュー',
    items: [
      ['お子様ランチ', '800'], ['お子様キーマカレー', '600'], ['ナゲット＆ポテト', '600'],
      ['フライドポテト', '350'], ['ふりかけご飯', '300'], ['お子様ジュース', '250'],
    ],
  },
  {
    title: 'Dessert',
    jp: 'デザート',
    items: [
      ['豆乳プリン', '600'], ['メープルシフォンケーキ', '700'], ['豆乳チーズケーキ', '700'],
      ['アイスクリーム', '450'], ['おすすめのデザート3種盛り', '800'],
    ],
  },
  {
    title: 'Drink',
    jp: 'ドリンク',
    items: [
      ['コーヒー Hot / Ice', '550'], ['カフェオレ Hot / Ice', '550'], ['紅茶 Hot / Ice', '550'],
      ['抹茶ラテ Hot / Ice', '600'], ['レモンジンジャー', '700'], ['ゆず茶', '700'], ['ソフトドリンク', '550'],
    ],
  },
  {
    title: 'Parfait & Float',
    jp: 'パフェ・フロート',
    items: [
      ['もみじ抹茶パフェ', '1,100'], ['もみじマロンパフェ', '1,100'], ['箕面ゆずパフェ', '1,100'],
      ['コーヒーゼリーフロート', '800'], ['ゆずスカッシュフロート', '800'], ['抹茶フロート', '800'],
    ],
  },
];

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Forest Garden',
  telephone: '+81-72-734-6172',
  priceRange: '¥¥',
  servesCuisine: ['カフェ', '薬膳', '洋食'],
  address: {
    '@type': 'PostalAddress',
    addressRegion: '大阪府',
    addressLocality: '箕面市',
    streetAddress: '箕面6-10-21',
    addressCountry: 'JP',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '11:00',
    closes: '15:00',
  },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Forest Garden トップへ">
          <span className="brand-mark">FG</span>
          <span className="brand-name">Forest Garden</span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#concept">私たちの想い</a>
          <a href="#menu">メニュー</a>
          <a href="#space">店内</a>
          <a href="#access">アクセス</a>
        </nav>
        <div className="header-actions">
          <a className="header-reserve" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=121zhsix" target="_blank" rel="noreferrer">
            LINEで予約
          </a>
          <details className="mobile-nav">
            <summary aria-label="メニューを開く"><span /><span /></summary>
            <div>
              <a href="#concept">私たちの想い</a>
              <a href="#menu">メニュー</a>
              <a href="#space">店内</a>
              <a href="#access">アクセス</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/images/web/DSC01028.webp"
          alt="彩り豊かな野菜とお肉を盛り付けたForest Gardenのランチプレート"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Restaurant &amp; Cafe · Minoh</p>
          <h1>
            <span>こころと身体に、</span>
            <span>やさしいごちそう。</span>
          </h1>
          <p className="hero-lead">
            旬の野菜をたっぷりと。目にも身体にもやさしい、
            <br />彩り鮮やかなランチを箕面で。
          </p>
        </div>
        <a className="scroll-cue" href="#concept" aria-label="コンセプトへスクロール">
          <span>Scroll</span>
          <i />
        </a>
      </section>

      <section className="concept-section" id="concept">
        <div className="concept-heading">
          <p className="section-kicker">OUR PHILOSOPHY</p>
          <h2>日々の食事が、<br />明日のわたしをつくる。</h2>
        </div>
        <div className="concept-body">
          <p className="concept-intro">
            食薬の考えを取り入れ、<br />旬の素材をバランスよく。
          </p>
          <p>
            からだにやさしいことと、心からおいしいこと。
            そのどちらも大切にしながら、旬のお野菜をたっぷり使って、
            一皿ずつ丁寧におつくりしています。
          </p>
          <p>
            友だちと語らうランチも、ひとりでほどける午後も。
            窓から緑を望む穏やかな空間で、あなたらしい時間をお過ごしください。
          </p>
        </div>
        <div className="concept-gallery">
          <figure className="concept-photo-main">
            <img src="/images/web/DSC01386.webp" alt="明るい窓と緑を望むForest Gardenの店内" loading="lazy" />
          </figure>
          <figure className="concept-photo-sub">
            <img src="/images/web/DSC00988.webp" alt="壁に掲げられたForest Gardenの木製サイン" loading="lazy" />
          </figure>
          <span className="botanical-note">Seasonal<br />&amp; gentle</span>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading section-heading-light">
          <div>
            <p className="section-kicker">SEASONAL MENU</p>
            <h2>旬を味わう、<br />わたしたちの一皿。</h2>
          </div>
          <p>
            彩り豊かなお野菜と、食べごたえのある主菜。
            その日の気分で選べる6つのランチをご用意しています。
          </p>
        </div>

        <div className="featured-menu-grid">
          <article className="featured-card featured-card-wide">
            <img src="/images/web/DSC01067.webp" alt="薬膳キーマカレーとサラダのプレート" loading="lazy" />
            <div>
              <span>Spice &amp; wellness</span>
              <h3>薬膳キーマカレー</h3>
              <p>香り高いスパイスと薬膳素材を、食べやすいバランスで。</p>
              <strong>¥1,700</strong>
            </div>
          </article>
          <article className="featured-card">
            <img src="/images/web/DSC01055.webp" alt="トマトソース煮込みハンバーグのランチ" loading="lazy" />
            <div>
              <span>Slow cooked</span>
              <h3>煮込みハンバーグ</h3>
              <strong>¥1,700</strong>
            </div>
          </article>
          <article className="featured-card">
            <img src="/images/web/DSC01028.webp" alt="日替りプレートの彩り豊かな野菜と主菜" loading="lazy" />
            <div>
              <span>Today&apos;s special</span>
              <h3>日替りプレート</h3>
              <strong>¥1,700</strong>
            </div>
          </article>
        </div>

        <div className="lunch-list" aria-label="ランチメニュー一覧">
          {lunchMenu.map((item, index) => (
            <article key={item.name}>
              <span className="menu-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.note}</p>
              </div>
              <strong>¥{item.price}</strong>
            </article>
          ))}
        </div>

        <div className="set-menu-note">
          <p>ランチとご一緒に</p>
          <span>セットドリンク <strong>+ ¥300</strong></span>
          <span>デザート・ドリンクセット <strong>+ ¥600</strong></span>
          <span>おすすめの3種デザート <strong>+ ¥800</strong></span>
        </div>
        <p className="tax-note">価格はすべて税込です。仕入れ状況により内容が変わる場合がございます。</p>
      </section>

      <section className="cafe-section">
        <div className="cafe-collage">
          <figure className="cafe-photo-one"><img src="/images/web/DSC01204.webp" alt="抹茶、マロン、ゆずの3種のパフェ" loading="lazy" /></figure>
          <figure className="cafe-photo-two"><img src="/images/web/DSC01126.webp" alt="豆乳チーズケーキ" loading="lazy" /></figure>
          <figure className="cafe-photo-three"><img src="/images/web/DSC01283.webp" alt="木のトレーに載った紅茶" loading="lazy" /></figure>
        </div>
        <div className="cafe-copy">
          <p className="section-kicker">CAFE TIME</p>
          <h2>午後の余白に、<br />小さなごほうびを。</h2>
          <p>
            人気の豆乳プリンや、季節を映したパフェ、丁寧に淹れたコーヒーと紅茶。
            食後はもちろん、カフェタイムだけのご利用もどうぞ。
          </p>
          <div className="parfait-list">
            <span>もみじ抹茶パフェ <strong>¥1,100</strong></span>
            <span>もみじマロンパフェ <strong>¥1,100</strong></span>
            <span>箕面ゆずパフェ <strong>¥1,100</strong></span>
          </div>
        </div>
      </section>

      <section className="all-menu-section" aria-labelledby="all-menu-title">
        <div className="all-menu-heading">
          <p className="section-kicker">ALL MENU</p>
          <h2 id="all-menu-title">みんなの「食べたい」が<br />見つかる場所。</h2>
          <p>お子様メニュー、カフェ、アルコールもご用意しています。</p>
        </div>
        <div className="menu-groups">
          {menuGroups.map((group, index) => (
            <details key={group.title} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><em>{group.title}</em><strong>{group.jp}</strong></div>
                <i aria-hidden="true" />
              </summary>
              <div className="menu-group-body">
                {group.items.map(([name, price]) => (
                  <p key={name}><span>{name}</span><strong>¥{price}</strong></p>
                ))}
              </div>
            </details>
          ))}
        </div>
        <p className="alcohol-note">ビール、ワイン、ハイボールなどのアルコールメニューもございます。</p>
      </section>

      <section className="space-section" id="space">
        <div className="space-image">
          <img src="/images/web/DSC01373.webp" alt="グランドピアノのあるForest Gardenの店内" loading="lazy" />
        </div>
        <div className="space-copy">
          <p className="section-kicker">A PLACE FOR EVERYONE</p>
          <h2>それぞれの心地よさを、<br />ひとつの場所に。</h2>
          <p>
            お子様とゆったり過ごせるお部屋や、ペットと一緒に楽しめるテラス席も。
            木のぬくもりと自然光に包まれた店内で、気兼ねなくお過ごしください。
          </p>
          <div className="space-features">
            <span><b>01</b> キッズルーム</span>
            <span><b>02</b> ペット同伴テラス</span>
            <span><b>03</b> 駐車場3台</span>
          </div>
          <a className="text-link" href="https://icco82milkyway.wixsite.com/forestgarden/rental-room" target="_blank" rel="noreferrer">
            レンタル・貸切のご案内 <span>↗</span>
          </a>
        </div>
      </section>

      <section className="instagram-section">
        <div className="instagram-heading">
          <p className="section-kicker">FOLLOW OUR DAYS</p>
          <h2>日々のForest Garden</h2>
          <a href="https://instagram.com/Forest_Garden_minoo" target="_blank" rel="noreferrer" aria-label="Forest GardenのInstagramを開く">
            @forest_garden_minoo <span>↗</span>
          </a>
        </div>
        <div className="instagram-grid">
          <img src="/images/web/DSC01003.webp" alt="Forest Gardenのお子様ランチ" loading="lazy" />
          <img src="/images/web/DSC01117.webp" alt="星形のクッキーを添えたシフォンケーキ" loading="lazy" />
          <img src="/images/web/DSC01267.webp" alt="レモンを浮かべた爽やかなドリンク" loading="lazy" />
          <img src="/images/web/DSC01145.webp" alt="おすすめのデザート3種盛り" loading="lazy" />
        </div>
      </section>

      <section className="access-section" id="access">
        <div className="access-intro">
          <p className="section-kicker">VISIT US</p>
          <h2>箕面駅から、<br />歩いてすぐ。</h2>
          <p>
            駅西口から線路沿いを約100m南へ。
            めばえ保育園の角を右に曲がると、左手に見える木の看板が目印です。
          </p>
          <a className="map-button" href="https://www.google.com/maps/search/?api=1&query=Forest%20Garden%20大阪府箕面市箕面6-10-21" target="_blank" rel="noreferrer">
            Google Mapで見る <span>↗</span>
          </a>
        </div>
        <div className="access-details">
          <dl>
            <div><dt>Address</dt><dd>大阪府箕面市箕面6-10-21</dd></div>
            <div><dt>Open</dt><dd>11:00 - 15:00<br /><small>ラストオーダー 14:30</small></dd></div>
            <div><dt>Close</dt><dd>日曜・月曜・火曜・祝日</dd></div>
            <div><dt>Parking</dt><dd>店舗裏のハイツに3台</dd></div>
            <div><dt>Tel</dt><dd><a href="tel:0727346172">072-734-6172</a></dd></div>
          </dl>
        </div>
      </section>

      <section className="reservation-section">
        <img src="/images/web/DSC01288.webp" alt="Forest Gardenで楽しむ温かな紅茶" loading="lazy" />
        <div className="reservation-overlay" />
        <div className="reservation-copy">
          <p>RESERVATION</p>
          <h2>やさしい時間を、<br />ご用意してお待ちしています。</h2>
          <span>ご予約・お問い合わせは、お電話またはLINEから。</span>
          <div>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=121zhsix" target="_blank" rel="noreferrer">LINEで予約する <b>↗</b></a>
            <a href="tel:0727346172">072-734-6172 <b>☎</b></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">FG</span>
          <div><strong>Forest Garden</strong><small>Restaurant &amp; Cafe · Minoh</small></div>
        </div>
        <div className="footer-links">
          <a href="#concept">私たちの想い</a>
          <a href="#menu">メニュー</a>
          <a href="#space">店内</a>
          <a href="#access">アクセス</a>
          <a href="https://instagram.com/Forest_Garden_minoo" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <div className="footer-bottom">
          <span>© Forest Garden</span>
          <a href="#top">Page top ↑</a>
        </div>
      </footer>

      <div className="mobile-cta" aria-label="ご予約">
        <a href="tel:0727346172">電話する</a>
        <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=121zhsix" target="_blank" rel="noreferrer">LINEで予約</a>
      </div>
    </main>
  );
}
