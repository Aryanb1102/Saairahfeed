import { type ArticleTag, getTagColor } from "./data";

type Props = {
  tag: ArticleTag;
};

export default function TagPill({ tag }: Props) {
  const color = getTagColor(tag);

  return (
    <span
      className="hp-tag-pill"
      style={{
        display: "inline-block",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color,
        lineHeight: 1,
        fontFamily:
          "'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {tag}
    </span>
  );
}
