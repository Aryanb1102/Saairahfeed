import NavBar from "./NavBar";
import HeroGrid from "./HeroGrid";
import QuizBanner from "./QuizBanner";
import FeedArticle from "./FeedArticle";
import TrendingSidebar from "./TrendingSidebar";
import { feedArticles } from "./data";
import "./homepage.css";

export default function HomepageLayout() {
  return (
    <div className="hp-root">
      <NavBar />

      <main className="hp-main">
        {/* Hero bento grid */}
        <HeroGrid />

        {/* Trending ticker */}
        <div className="hp-ticker" aria-label="Trending ticker">
          <span className="hp-ticker-label">TRENDING</span>
          <div className="hp-ticker-track">
            <span className="hp-ticker-scroll">
              {[
                "Met Gala 2026",
                "Quiet Confidence Era",
                "AI Dating Bios",
                "Gen Z Fashion",
                "Plant Dad Life",
                "Streaming Wars Winner",
                "Must Be Nuts Quiz",
                "Super Shampoo Red Flag",
              ]
                .map((t) => `${t}  ·  `)
                .join("")
                .repeat(3)}
            </span>
          </div>
        </div>

        {/* Content area: feed + sidebar */}
        <div className="hp-content-grid">
          <div className="hp-feed" aria-label="Article feed">
            {/* First 2 feed articles */}
            {feedArticles.slice(0, 2).map((article, i) => (
              <FeedArticle key={article.id} article={article} index={i} />
            ))}

            {/* Quiz banner interrupts the feed */}
            <QuizBanner />

            {/* Remaining feed articles */}
            {feedArticles.slice(2).map((article, i) => (
              <FeedArticle key={article.id} article={article} index={i + 2} />
            ))}
          </div>

          {/* Desktop sidebar */}
          <TrendingSidebar />
        </div>

        {/* Footer */}
        <footer className="hp-footer">
          <div className="hp-footer-inner">
            <span className="hp-footer-logo">Saairahfeed</span>
            <span className="hp-footer-copy">
              © 2026 Saairahfeed. All lore is canon.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
