import { Link } from "react-router-dom";
import StickerBadge from "./StickerBadge";

export default function QuizBanner() {
  return (
    <section className="hp-quiz-banner" aria-label="Quizzes and Games">
      {/* Decorative dots (scrapbook vibe) */}
      <div className="hp-quiz-dots hp-quiz-dots-tl" aria-hidden="true" />
      <div className="hp-quiz-dots hp-quiz-dots-br" aria-hidden="true" />

      <div className="hp-quiz-banner-inner">
        <StickerBadge
          variant="new"
          rotation={-6}
          style={{ marginBottom: 8 }}
        />

        <h2 className="hp-quiz-banner-title">
          Quizzes, Games & Unhinged Personality Tests
        </h2>
        <p className="hp-quiz-banner-dek">
          Discover which Saairah mood you are, tackle the mini crossword, or
          find out your hidden red flag through the medium of shampoo.
        </p>

        <div className="hp-quiz-banner-actions">
          <Link to="/quiz" className="hp-quiz-banner-btn hp-quiz-banner-btn-primary">
            Take the Quiz →
          </Link>
          <Link to="/crossword" className="hp-quiz-banner-btn">
            Play Crossword
          </Link>
        </div>
      </div>

      {/* Floating stickers for the scrapbook aesthetic */}
      <StickerBadge
        variant="trending"
        rotation={12}
        className="hp-quiz-float-sticker hp-quiz-float-1"
      />
      <StickerBadge
        variant="staff-pick"
        rotation={-8}
        className="hp-quiz-float-sticker hp-quiz-float-2"
      />
    </section>
  );
}
