'use client';

import { useEffect, useRef, useState } from 'react';

const slides = [
  {
    eyebrow: "Today's special",
    title: 'Forest Gardenの日替りプレート',
    description: 'その日のお楽しみプレート。旬の彩りを少しずつ。',
    price: '¥1,700',
    image: 'DSC01028.webp',
    alt: '日替りプレートの彩り豊かな野菜と主菜',
    wide: true,
  },
  {
    eyebrow: 'Spice & wellness',
    title: '薬膳キーマカレー',
    description: 'スパイスと薬膳素材をバランスよく合わせた中辛カレー。',
    price: '¥1,700',
    image: 'DSC01067.webp',
    alt: '薬膳キーマカレーとサラダのプレート',
  },
  {
    eyebrow: 'Slow cooked',
    title: 'トマトソース煮込みハンバーグ',
    description: '旨味たっぷりのトマトソースでじっくり煮込みました。',
    price: '¥1,700',
    image: 'DSC01055.webp',
    alt: 'トマトソース煮込みハンバーグのランチ',
  },
  {
    eyebrow: 'House sauce',
    title: '特製オニオンソースのハンバーグ',
    description: '特製シャリアピンソースで、香りよく仕上げました。',
    price: '¥1,700',
    image: 'DSC01055.webp',
    alt: 'ハンバーグと彩り豊かな野菜のランチイメージ',
  },
  {
    eyebrow: 'Seasonal vegetables',
    title: '季節のお野菜のミートグラタン',
    description: '旬のお野菜と、とろりと溶けたチーズを一緒に。',
    price: '¥1,700',
    image: 'DSC01028.webp',
    alt: '旬の野菜をたっぷり使ったランチイメージ',
  },
  {
    eyebrow: 'Rich & tender',
    title: 'ゴロっとお肉のビーフシチュー',
    description: '大きなお肉をじっくり煮込み、やわらかく。',
    price: '¥2,200',
    image: 'DSC01067.webp',
    alt: 'じっくり煮込んだ料理と野菜のランチイメージ',
  },
];

type MenuCarouselProps = {
  basePath?: string;
};

export default function MenuCarousel({ basePath = '' }: MenuCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    const wrappedIndex = (index + slides.length) % slides.length;
    const nextIndex = isMobile ? wrappedIndex : wrappedIndex < 3 ? 0 : 3;
    const viewport = viewportRef.current;
    const card = viewport?.querySelector<HTMLElement>(`[data-slide-index="${nextIndex}"]`);
    if (!viewport || !card) return;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const trackOffset = card.parentElement?.offsetLeft ?? 0;
    viewport.scrollTo({ left: Math.min(card.offsetLeft - trackOffset, maxScroll), behavior: 'smooth' });
  };

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 720px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mobile.matches || reducedMotion.matches) return undefined;

    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % slides.length;
      const viewport = viewportRef.current;
      viewport?.scrollTo({ left: viewport.clientWidth * nextIndex, behavior: 'smooth' });
    }, 5200);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport || viewport.clientWidth === 0) return;
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    const nextIndex = isMobile
      ? Math.round(viewport.scrollLeft / viewport.clientWidth)
      : viewport.scrollLeft > (viewport.scrollWidth - viewport.clientWidth) / 2 ? 3 : 0;
    if (nextIndex !== activeIndex && nextIndex >= 0 && nextIndex < slides.length) setActiveIndex(nextIndex);
  };

  const step = typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches ? 1 : 3;

  return (
    <div className="featured-menu-slider">
      <div className="featured-menu-viewport" ref={viewportRef} onScroll={handleScroll}>
        <div className="featured-menu-track">
          {slides.map((slide, index) => (
            <article
              className={`featured-card${slide.wide ? ' featured-card-wide' : ''}`}
              data-slide-index={index}
              key={slide.title}
            >
              <img src={`${basePath}/images/web/${slide.image}`} alt={slide.alt} loading="lazy" />
              <div>
                <span>{slide.eyebrow}</span>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <strong>{slide.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="featured-menu-controls" aria-label="おすすめランチのスライド操作">
        <button type="button" onClick={() => goTo(activeIndex - step)} aria-label="前のメニュー">←</button>
        <div>
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => goTo(index)}
              aria-label={`${slide.title}を表示`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={() => goTo(activeIndex + step)} aria-label="次のメニュー">→</button>
      </div>
      <p className="featured-menu-hint">左右にスワイプしてメニューをご覧いただけます</p>
    </div>
  );
}
