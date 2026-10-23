import { createElement } from "react";
import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D5A640",
  background: "#12315A",
  ink: "#F7FAFE",
  muted: "#D6E4F2",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "school-arrival",
    label: "Welcome",
    kicker: "SRI GVS SANKARAIAH MEMORIAL HIGH SCHOOL · GUDUR",
    title: "A brighter future starts here.",
    body: "A caring school community for Classes 1 to 10, where every child can learn with confidence.",
    tags: ["Classes 1 to 10", "600 demo students", "Gudur, Andhra Pradesh"],
    actions: createElement("div", { className: "school-hero-actions" }, [
      createElement("a", { key: "explore", className: "school-scroll-cta", href: "#about" }, "Explore our school"),
      createElement("a", { key: "login", className: "school-scroll-cta school-scroll-cta--outline", href: "#portal" }, "School login"),
    ]),
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    poster: "/assets/world/scene-01-poster.png",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    scroll: 2.1,
    linger: 0.16,
    objectPosition: "50% 50%",
    mobileObjectPosition: "50% 50%",
  },
];
