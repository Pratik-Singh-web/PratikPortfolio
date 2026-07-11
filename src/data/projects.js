// Real projects, pulled from github.com/Pratik-Singh-web
// Update taglines / imageUrls whenever you ship something new.

export const projects = [
  {
    slug: "minnie",
    title: "Minnie",
    tagline:
      "Give your AI agent a body — a native macOS desktop pet that talks, listens, and does real work.",
    description:
      "Chatbots talk. Minnie does. She's a native macOS AI desktop pet — a floating 3D character that lives on your screen, listens to you by voice, drives the AI coding agent you already use, and asks permission out loud before anything risky.",
    imageUrl: "https://placehold.co/1200x800/ff5e8a/0a0a0f?text=Minnie",
    tags: ["SwiftUI", "macOS", "AI", "Voice", "MCP", "3D"],
    link: "https://wa.me/917905971073?text=Hi%20Pratik%2C%20I%27d%20love%20early%20access%20to%20Minnie.",
    linkLabel: "Request early access",
    year: "2025",
    status: "In active development · private beta",

    sections: [
      {
        heading: "What we built",
        body:
          "Minnie is a menu-bar-only macOS app (no Dock icon) with a floating 3D character that sits on top of your desktop. You wake her by saying \"Baby\" or \"Hey Baby,\" give her a spoken command, and she runs the task on a real AI coding agent — Claude Code out of the box, or bring-your-own Gemini / Codex / Antigravity / Custom. She reads the result back in her own voice, and her mood animates in real time to mirror the agent's state — idle, thinking, working, happy, stuck.\n\nThe key idea: she's a \"pure skin.\" The agent CLI already does the reasoning and holds its own auth, so Minnie adds zero extra AI cost on top of what you already pay your provider.",
      },
      {
        heading: "How we built it",
        body:
          "The whole app is native SwiftUI with a real-time 3D character rig on top — four species, eight moods. The voice layer is credit-aware and falls through gracefully: cloud STT/TTS when the user opts in → on-device Whisper → Apple's system TTS as the last resort, so voice never breaks.\n\nA custom \"consent speech-cloud\" wraps every risky tool call — she reads the intended action out loud (\"I want to run pytest. Ok?\") and takes yes / no / always by voice or click. One-click MCP Connections plug her into GitHub, Notion, Slack, Sentry, Postgres, Figma, and custom servers; native \"Sign in with Google\" handles Gmail / Calendar / Chat. Secrets live in the macOS Keychain; there's no screen capture, no telemetry, and the entire agent CLI runs locally.",
      },
      {
        heading: "Why it's useful",
        body:
          "Chatbots are stuck inside browser tabs. Minnie lives on your desktop and executes — she can run tests, edit files, hit APIs, ship a commit, or read your calendar, all while narrating what she's about to do so you never lose control. Because she's a skin over your existing agent's CLI, she doesn't double-bill you for tokens, and because voice + agent both run locally, your conversations and code stay on your Mac. The consent layer is the moat: it turns \"AI that does scary things\" into \"AI that asks first, every single time.\"",
      },
    ],

    highlights: [
      "🐾 Real-time 3D character with 4 species and 8 moods that read the agent's live state at a glance",
      "🎙️ Voice-first: wake word, hands-free commands, spoken replies — cloud → on-device Whisper → Apple",
      "✋ Consent speech-cloud — every risky tool asks out loud; answer yes / no / always by voice or click",
      "🧠 Drives Claude Code with full Bash / file / web / MCP access; bring your own agent too",
      "🔌 One-click MCP catalog (GitHub, Notion, Slack, Sentry, Postgres, Figma) + native Sign in with Google",
      "💾 Silent profile memory, an activity timeline, and a 'What can Minnie do?' capabilities screen",
      "🔒 Local & private — on-device voice, local agent CLI, secrets in the macOS Keychain, no telemetry",
    ],
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
