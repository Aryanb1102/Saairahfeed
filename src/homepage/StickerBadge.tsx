import { type CSSProperties } from "react";

type Variant = "trending" | "new" | "quiz" | "hot" | "staff-pick";

const VARIANT_STYLES: Record<
  Variant,
  { bg: string; color: string; border: string; label: string }
> = {
  trending: {
    bg: "#FFD700",
    color: "#111",
    border: "#e6c200",
    label: "🔥 TRENDING",
  },
  new: { bg: "#00E676", color: "#111", border: "#00c853", label: "✨ NEW" },
  quiz: { bg: "#00A3F2", color: "#fff", border: "#0081cb", label: "🧩 QUIZ" },
  hot: { bg: "#EE3322", color: "#fff", border: "#cc2b1c", label: "🌶️ HOT" },
  "staff-pick": {
    bg: "#9C27B0",
    color: "#fff",
    border: "#7b1fa2",
    label: "⭐ STAFF PICK",
  },
};

type Props = {
  variant: Variant;
  rotation?: number;
  style?: CSSProperties;
  className?: string;
};

export default function StickerBadge({
  variant,
  rotation = -3,
  style,
  className = "",
}: Props) {
  const s = VARIANT_STYLES[variant];

  return (
    <span
      className={`sticker-badge ${className}`}
      style={{
        display: "inline-block",
        background: s.bg,
        color: s.color,
        border: `2px solid ${s.border}`,
        borderRadius: "6px",
        padding: "4px 10px",
        fontSize: "11px",
        fontWeight: 900,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        transform: `rotate(${rotation}deg)`,
        boxShadow: "2px 3px 0px rgba(0,0,0,0.15)",
        whiteSpace: "nowrap",
        lineHeight: 1.3,
        fontFamily: "'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        ...style,
      }}
    >
      {s.label}
    </span>
  );
}
