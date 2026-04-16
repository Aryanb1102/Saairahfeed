export type ArticleTag =
  | "POP CULTURE"
  | "STYLE"
  | "QUIZ"
  | "LIFE"
  | "GAMES"
  | "FOOD"
  | "ENTERTAINMENT"
  | "TECH";

export type Article = {
  id: string;
  title: string;
  tag: ArticleTag;
  image: string;
  author: string;
  timeAgo: string;
  /** If set, clicking navigates to this internal route */
  internalRoute?: string;
  /** CSS gradient fallback when image fails to load */
  fallbackGradient: string;
};

const TAG_COLORS: Record<ArticleTag, string> = {
  "POP CULTURE": "#EE3322",
  STYLE: "#9C27B0",
  QUIZ: "#00E676",
  LIFE: "#FF9800",
  GAMES: "#00A3F2",
  FOOD: "#FF5722",
  ENTERTAINMENT: "#E91E63",
  TECH: "#607D8B",
};

export const getTagColor = (tag: ArticleTag): string => TAG_COLORS[tag];

export const heroArticle: Article = {
  id: "hero-met-gala",
  title:
    "We Ranked The Most Chaotic Moments From The 2026 Met Gala, And Number 4 Is Unhinged",
  tag: "POP CULTURE",
  image: "/images/articles/hero-met-gala.jpg",
  fallbackGradient:
    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f72585 100%)",
  author: "Saairah Ahmed",
  timeAgo: "3 hours ago",
};

export const subHeroArticles: Article[] = [
  {
    id: "sub-athleisure",
    title:
      "Is The 'Quiet Confidence' Athleisure Trend Finally Over? Here's What Gen Z Is Wearing Instead.",
    tag: "STYLE",
    image: "/images/articles/style-athleisure.jpg",
    fallbackGradient:
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #d4fc79 100%)",
    author: "Priya Nair",
    timeAgo: "5 hours ago",
  },
  {
    id: "sub-shampoo-quiz",
    title:
      "Make A Paper-Packaged 'Super Shampoo' And We'll Reveal Your Hidden Red Flag",
    tag: "QUIZ",
    image: "/images/articles/quiz-shampoo.png",
    fallbackGradient:
      "linear-gradient(135deg, #f5af19 0%, #f12711 50%, #fa709a 100%)",
    author: "BuzzFeed Staff",
    timeAgo: "7 hours ago",
    internalRoute: "/quiz",
  },
];

export const feedArticles: Article[] = [
  {
    id: "feed-consultancy",
    title:
      "17 Things That Just Make Sense If You Are Running A Consultancy Agency In Your 20s",
    tag: "LIFE",
    image: "/images/articles/feed-consultancy.jpg",
    fallbackGradient:
      "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    author: "Jordan Chase",
    timeAgo: "9 hours ago",
  },
  {
    id: "feed-snack-mascot",
    title:
      "Which 'Must Be Nuts' Mascot Are You? Choose Your Favorite Snack To Find Out.",
    tag: "GAMES",
    image: "/images/articles/feed-snack-mascot.jpg",
    fallbackGradient:
      "linear-gradient(135deg, #f7971e 0%, #ffd200 50%, #f9d423 100%)",
    author: "Saairah Ahmed",
    timeAgo: "11 hours ago",
    internalRoute: "/quiz",
  },
  {
    id: "feed-plant-dad",
    title:
      "I Became A Full-Time Plant Dad And Here Are 14 Lessons I Learned The Hard Way",
    tag: "LIFE",
    image: "/images/articles/feed-plant-dad.jpg",
    fallbackGradient:
      "linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #c3ec52 100%)",
    author: "Alex Kim",
    timeAgo: "Yesterday",
  },
  {
    id: "feed-streaming-wars",
    title:
      "The Streaming Wars Are Officially Over — And The Winner Is Not Who You Think",
    tag: "ENTERTAINMENT",
    image: "/images/articles/feed-streaming.jpg",
    fallbackGradient:
      "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    author: "Maya Singh",
    timeAgo: "Yesterday",
  },
  {
    id: "feed-ai-dating",
    title:
      "People Are Using AI To Write Their Dating App Bios And Honestly? The Results Are Unhinged.",
    tag: "TECH",
    image: "/images/articles/feed-ai-dating.jpg",
    fallbackGradient:
      "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)",
    author: "Aryan B.",
    timeAgo: "2 days ago",
  },
  {
    id: "feed-comfort-food",
    title:
      "Rate These Comfort Foods And We'll Guess If You're An Introvert Or Extrovert",
    tag: "QUIZ",
    image: "/images/articles/feed-comfort-food.jpg",
    fallbackGradient:
      "linear-gradient(135deg, #ee5a24 0%, #f0932b 50%, #f6e58d 100%)",
    author: "BuzzFeed Staff",
    timeAgo: "2 days ago",
    internalRoute: "/quiz",
  },
];

export const trendingTopics = [
  "Met Gala 2026",
  "Quiet Confidence",
  "AI Dating",
  "Gen Z Fashion",
  "Streaming Wars",
  "Plant Dad Era",
];
