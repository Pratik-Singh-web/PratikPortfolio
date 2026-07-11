// Real projects, pulled from github.com/Pratik-Singh-web
// Update taglines / imageUrls whenever you ship something new.

export const projects = [
  {
    slug: "minnie",
    title: "Minnie",
    tagline:
      "Give your AI agent a body — a native macOS desktop pet that talks, listens, and does real work.",
    description:
      "Minnie is a native macOS AI desktop pet. A floating 3D character lives on your screen (menu-bar app, no Dock) and drives the AI coding agent you already use — Claude Code out of the box, bring-your-own for Gemini / Codex / Custom. You talk to her by voice; she runs the agent, asks permission out loud before anything risky (\"I want to run pytest. Ok?\"), speaks the result back, and her mood mirrors the agent's live state — thinking, working, happy, stuck. She's a pure skin: the agent CLI holds its own auth and does the reasoning, so Minnie adds zero extra AI cost. On-device voice, local CLI, secrets in the macOS Keychain — private by default. Built in SwiftUI with a real-time 3D character, one-click MCP catalog (GitHub, Notion, Slack, Sentry, Postgres, Figma…), native Sign in with Google for Gmail / Calendar / Chat, and silent profile memory.",
    imageUrl: "https://placehold.co/1200x800/ff5e8a/0a0a0f?text=Minnie",
    tags: ["SwiftUI", "macOS", "AI", "Voice", "MCP", "3D"],
    link: "https://wa.me/917905971073?text=Hi%20Pratik%2C%20I%27d%20love%20early%20access%20to%20Minnie.",
    linkLabel: "Request early access",
    year: "2025",
    status: "In active development · private beta",
  },
  {
    slug: "medicare-hybrid",
    title: "MediCare Hybrid",
    tagline:
      "AI-powered medicine assistant — type any medicine, get everything you need to know.",
    description:
      "Medicare is an intelligent medicine information assistant powered by AI. Enter the name of any medicine and get comprehensive, real-time details — composition, uses, dosage, side effects, and precautions. Built as a hybrid app so it works everywhere, with an LLM layer that keeps answers grounded and easy to read for non-medical users.",
    imageUrl: "https://placehold.co/1200x800/0d9488/f5f0e6?text=MediCare+Hybrid",
    tags: ["AI", "Healthcare", "Hybrid", "LLM"],
    link: "https://github.com/Pratik-Singh-web/MediCareHybrid",
    year: "2025",
  },
  {
    slug: "imagica",
    title: "Imagica",
    tagline:
      "A daily widget that paints a fresh image tuned to your mood and preferences.",
    description:
      "Imagica is a widget app for iOS that generates a unique image each day based on your personalized preferences — nature, abstract, custom categories, whatever you like. Customize once in-app, and the widget takes care of the rest. Built with SwiftUI + WidgetKit, wired to an image generation pipeline so every home-screen refresh feels intentional.",
    imageUrl: "https://placehold.co/1200x800/f472b6/f5f0e6?text=Imagica",
    tags: ["SwiftUI", "WidgetKit", "AI", "iOS"],
    link: "https://github.com/Pratik-Singh-web/Imagica",
    year: "2025",
  },
  {
    slug: "video-downloader",
    title: "videoDownloader",
    tagline:
      "A Telegram bot that grabs videos from YouTube, Instagram, and more — auto-compressed.",
    description:
      "A Python-based Telegram bot for downloading videos from YouTube, Instagram, and other platforms. If a file crosses Telegram's 50 MB cap it auto-compresses before sending, and every request is logged with metadata for later review. Built on yt-dlp, ffmpeg, and python-telegram-bot — designed to be low-friction, self-hostable, and reliable.",
    imageUrl: "https://placehold.co/1200x800/fbbf24/0a0a0f?text=videoDownloader",
    tags: ["Python", "Telegram", "yt-dlp", "ffmpeg"],
    link: "https://github.com/Pratik-Singh-web/videoDownloader",
    year: "2025",
  },
  {
    slug: "medicare",
    title: "MediCare",
    tagline:
      "A native SwiftUI take on medicine tracking — my SwiftUI apprenticeship.",
    description:
      "MediCare is an iOS app I built in pure SwiftUI to sharpen my Development Skill and showcase what native, declarative UI can do. It focuses on medicine tracking flows — clean lists, detail views, and reminders — while doubling as a personal deep-dive into SwiftUI's state model, navigation stack, and animation system.",
    imageUrl: "https://placehold.co/1200x800/5eead4/0a0a0f?text=MediCare",
    tags: ["SwiftUI", "iOS", "Native"],
    link: "https://github.com/Pratik-Singh-web/MediCare",
    year: "2024",
  },
  {
    slug: "lets-serve-u",
    title: "letsServeU",
    tagline:
      "A local-services iOS app that surfaces what's nearby — starting with restaurants.",
    description:
      "letsServeU is an iOS project I built to surface the services around you, starting with restaurants. It combines location services, a curated data layer, and a clean list/detail UX so users can find what's actually nearby without wading through generic listings. Foundation for a broader neighborhood-services app.",
    imageUrl: "https://placehold.co/1200x800/be185d/f5f0e6?text=letsServeU",
    tags: ["Swift", "iOS", "MapKit", "Local"],
    link: "https://github.com/Pratik-Singh-web/letsServeU",
    year: "2023",
  },
  {
    slug: "javascript-clock",
    title: "JavaScript Clock",
    tagline:
      "A first-principles analog clock built in vanilla JS + HTML/CSS.",
    description:
      "A very simple JavaScript project of a working analog clock — no libraries, no frameworks. Just the DOM, requestAnimationFrame, and a bit of trig. One of my early wins with the browser, still a favorite for teaching how a real-world 'live' UI actually ticks under the hood.",
    imageUrl: "https://placehold.co/1200x800/1a1a22/5eead4?text=JS+Clock",
    tags: ["JavaScript", "HTML", "CSS", "Vanilla"],
    link: "https://github.com/Pratik-Singh-web/JavaScript-Clock",
    year: "2021",
  },
];
