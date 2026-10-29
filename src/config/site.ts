export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Wonderful Neoran Valley Wiki",
  shortName: "Wonderful Neoran Valley",
  logoText: "W",
  tagline: "Narrative Roguelite Monster Collector",
  description: "Find Wonderful Neoran Valley creature profiles, recruitment tips, battle strategies, team synergies, story guides, and release updates in one fan-made wiki.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wonderfulneoranvalley.top",
  supportEmail: "support@wonderfulneoranvalley.top",
  gameUrl: "https://wonderfulneoranvalley.com/",
  heroVideoId: "xqhR0BEQOa8", // Wonderful Neoran Valley - Welcome to the Valley Trailer
  social: {
    discord: "https://discord.gg/aMVzGGCfR",
    youtube: "https://www.youtube.com/@wonderfulneoranvalley",
    twitter: "https://x.com/NeoranValley",
  },
  locales: ["en", "it", "es", "fr"],
  defaultLocale: "en",
};
