import { trendingTopics } from "./data";
import StickerBadge from "./StickerBadge";

export default function TrendingSidebar() {
  return (
    <aside className="hp-trending" aria-label="Trending topics">
      <div className="hp-trending-header">
        <StickerBadge variant="trending" rotation={-2} />
        <h3 className="hp-trending-title">Trending on Saairahfeed</h3>
      </div>
      <ol className="hp-trending-list">
        {trendingTopics.map((topic, i) => (
          <li key={topic} className="hp-trending-item">
            <span className="hp-trending-num">{i + 1}</span>
            <a href="#" className="hp-trending-link">
              {topic}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
