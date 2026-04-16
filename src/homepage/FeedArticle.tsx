import { useState } from "react";
import { Link } from "react-router-dom";
import { type Article } from "./data";
import TagPill from "./TagPill";
import StickerBadge from "./StickerBadge";

type Props = {
  article: Article;
  index: number;
};

export default function FeedArticle({ article, index }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const showSticker = article.tag === "QUIZ" || article.tag === "GAMES";
  const Wrapper = article.internalRoute ? Link : "a";
  const wrapperProps = article.internalRoute
    ? { to: article.internalRoute }
    : { href: "#" };

  return (
    <article className="hp-feed-card" id={`hp-feed-${article.id}`}>
      {/* @ts-expect-error dynamic element */}
      <Wrapper className="hp-feed-link" {...wrapperProps}>
        <div className="hp-feed-img-wrap">
          {imgFailed ? (
            <div
              className="hp-feed-img"
              style={{ background: article.fallbackGradient }}
              role="img"
              aria-label={article.title}
            />
          ) : (
            <img
              className="hp-feed-img"
              src={article.image}
              alt={article.title}
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          )}

          {showSticker && (
            <StickerBadge
              variant={article.tag === "QUIZ" ? "quiz" : "trending"}
              rotation={index % 2 === 0 ? -4 : 5}
              style={{ position: "absolute", top: 10, right: 10 }}
            />
          )}
        </div>

        <div className="hp-feed-body">
          <TagPill tag={article.tag} />
          <h3 className="hp-feed-title">{article.title}</h3>
          <span className="hp-feed-meta">
            {article.author} · {article.timeAgo}
          </span>
        </div>
      </Wrapper>
    </article>
  );
}
