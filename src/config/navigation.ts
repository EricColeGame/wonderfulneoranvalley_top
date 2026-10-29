import {
  BookOpen,
  CalendarDays,
  Cog,
  DollarSign,
  MessageCircle,
  Newspaper,
  Users,
  type LucideIcon,
} from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "community", path: "/community", icon: MessageCircle, isContentType: true },
  { key: "funding", path: "/funding", icon: DollarSign, isContentType: true },
  { key: "media", path: "/media", icon: Newspaper, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
