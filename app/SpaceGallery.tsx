'use client';

import { useEffect, useState } from 'react';

const spaces = [
  {
    name: 'キッズルーム',
    image: 'kids-room',
    alt: '遊具と座卓を備えたForest Gardenのキッズルーム',
  },
  {
    name: 'テラス席',
    image: 'terrace',
    alt: '緑に囲まれたForest Gardenのテラス席',
  },
  {
    name: '別室洋間',
    image: 'private-room',
    alt: '落ち着いた照明とテーブルを備えたForest Gardenの別室洋間',
  },
];

type SpaceGalleryProps = {
  basePath?: string;
};

export default function SpaceGallery({ basePath = '' }: SpaceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? null : (current + spaces.length - 1) % spaces.length);
      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? null : (current + 1) % spaces.length);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex]);

  const imagePath = (name: string, width: number) => `${basePath}/images/spaces/${name}-${width}.webp`;

  return (
    <>
      <div className="space-gallery" aria-label="店内・テラスの写真">
        {spaces.map((space, index) => (
          <button type="button" key={space.name} onClick={() => setActiveIndex(index)} aria-label={`${space.name}の写真を拡大する`}>
            <img
              src={imagePath(space.image, 640)}
              srcSet={`${imagePath(space.image, 640)} 640w, ${imagePath(space.image, 1280)} 1280w`}
              sizes="(max-width: 720px) 42vw, 180px"
              alt={space.alt}
              loading="lazy"
            />
            <span>{space.name}</span>
            <i aria-hidden="true">＋</i>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="space-lightbox" role="dialog" aria-modal="true" aria-label={`${spaces[activeIndex].name}の拡大写真`} onClick={() => setActiveIndex(null)}>
          <div className="space-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="space-lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="写真を閉じる">×</button>
            <figure>
              <img src={imagePath(spaces[activeIndex].image, 1280)} alt={spaces[activeIndex].alt} />
              <figcaption>
                <span>{String(activeIndex + 1).padStart(2, '0')} / {String(spaces.length).padStart(2, '0')}</span>
                <strong>{spaces[activeIndex].name}</strong>
              </figcaption>
            </figure>
            <div className="space-lightbox-nav">
              <button type="button" onClick={() => setActiveIndex((activeIndex + spaces.length - 1) % spaces.length)} aria-label="前の写真">←</button>
              <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % spaces.length)} aria-label="次の写真">→</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
