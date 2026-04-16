import { useState } from "react";
import { Link } from "react-router-dom";
import { heroArticle, subHeroArticles } from "./data";
import TagPill from "./TagPill";
import StickerBadge from "./StickerBadge";

function HeroImage({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  return failed ? (
    <div
      className="hp-hero-img"
      style={{ background: fallback }}
      role="img"
      aria-label={alt}
    />
  ) : (
    <img
      className="hp-hero-img"
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      loading="eager"
    />
  );
}

export default function HeroGrid() {
  const hero = heroArticle;
  const [sub1, sub2] = subHeroArticles;

  return (
    <section className="hp-hero-grid" aria-label="Featured stories">
      {/* ---- Main hero (left, large) ---- */}
      <Link
        to={hero.internalRoute ?? "#"}
        className="hp-hero-main"
        id="hp-hero-main"
      >
        <HeroImage
          src={hero.image}
          fallback={hero.fallbackGradient}
          alt={hero.title}
        />
        <div className="hp-hero-overlay">
          <StickerBadge
            variant="hot"
            rotation={-4}
            style={{ position: "absolute", top: 16, left: 16 }}
          />
          <TagPill tag={hero.tag} />
          <h2 className="hp-hero-headline">{hero.title}</h2>
          <span className="hp-hero-meta">
            {hero.author} · {hero.timeAgo}
          </span>
        </div>
      </Link>

      {/* ---- Right column (stacked) ---- */}
      <div className="hp-hero-side">
        {sub1 && (
          <Link
            to={sub1.internalRoute ?? "#"}
            className="hp-hero-sub"
            id="hp-hero-sub1"
          >
            <HeroImage
              src={sub1.image}
              fallback={sub1.fallbackGradient}
              alt={sub1.title}
            />
            <div className="hp-hero-overlay hp-hero-overlay-small">
              <TagPill tag={sub1.tag} />
              <h3 className="hp-hero-sub-headline">{sub1.title}</h3>
              <span className="hp-hero-meta">
                {sub1.author} · {sub1.timeAgo}
              </span>
            </div>
          </Link>
        )}

        {sub2 && (
          <Link
            to={sub2.internalRoute ?? "#"}
            className="hp-hero-sub"
            id="hp-hero-sub2"
          >
            <HeroImage
              src={sub2.image}
              fallback={sub2.fallbackGradient}
              alt={sub2.title}
            />
            <div className="hp-hero-overlay hp-hero-overlay-small">
              <StickerBadge
                variant="quiz"
                rotation={3}
                style={{ position: "absolute", top: 12, right: 12 }}
              />
              <TagPill tag={sub2.tag} />
              <h3 className="hp-hero-sub-headline">{sub2.title}</h3>
              <span className="hp-hero-meta">
                {sub2.author} · {sub2.timeAgo}
              </span>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
