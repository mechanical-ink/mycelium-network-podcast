import { defineConfig } from "astro/config";

import IndieCaster from "./integration/indiecaster.js";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [
    IndieCaster({
      colorPrimaryColor: "#1c1c44",
      colorPrimaryColorDark: "#090913",
      colorPrimaryColorLight: "#f6f6ff",
      colorSecondaryColor: "#dab97e",
      colorSecondaryColorDark: "#38290d",
      colorSecondaryColorLight: "#fff1d7",
      elevatorPitch:
        "The Mycelium Network podcast. A podcast about early-stage web developers and the mentors, teachers, and communities who help them along the way.",
      featuredEpisodeGuestName: "Chad Stewart",
      featuredEpisodeGuestProfilePicture: "chad-stewart",
      featuredEpisodeTitle:
        "TechIsHiring.com ~ People First ~ Open Source As Career Growth ~ A.I. Nuance",
      featuredEpisodeSummary:
        "In this episode of the Mycelium Network Podcast, Chad Stewart, a software engineer from Kingston, Jamaica, shares his journey in the tech industry. Chad discusses his work in front-end engineering and his exploration of back-end engineering. He also talks about his role in TechIsHiring, an organization that helps people find job opportunities in the tech industry. Chad's passion for exploring interesting problems and ideas in the industry motivates him. He shares his interest in Rust and how it can help us write cleaner code, especially in contrast to the sometimes chaotic JavaScript ecosystem. Tune in to hear Chad's insights and experiences as a software engineer.",
      featuredEpisodeTrack:
        "the-mechanical-ink-podcast-with-jennifer-riggins-episode-001",
      featuredEpisodeURL:
        "techishiring-com-people-first-open-source-as-career-growth-a-i-nuance",
      headerBackgroundColor: "#1c1c44",
      headerForegroundColor: "#fff",
      hostName: "Schalk Neethling",
      hostProfilePicture: "schalk-neethling",
      logo: "/logo.svg",
      logoHeight: "275",
      logoWidth: "500",
      podcastName: "The Mycelium Network Podcast",
      podcastPlayers: [
        {
          icon: "default-amazon",
          name: "Amazon Music",
          url: "https://music.amazon.com/podcasts/...",
        },
        {
          icon: "default-apple",
          name: "Apple Podcasts",
          url: "https://podcasts.apple.com/...",
        },
        {
          icon: "default-overcast",
          name: "Overcast",
          url: "https://overcast.fm/...",
        },
        {
          icon: "default-spotify",
          name: "Spotify",
          url: "https://open.spotify.com/show/...",
        },
        {
          icon: "default-youtube",
          name: "YouTube",
          url: "https://www.youtube.com/...",
        },
        {
          icon: "default-rss",
          name: "RSS",
          url: "https://feeds.buzzsprout.com/...",
        },
      ],
      socialMedia: [
        {
          icon: "default-discord",
          name: "Discord",
          url: "https://www.discord.com/...",
        },
        {
          icon: "default-facebook",
          name: "Facebook",
          url: "https://www.facebook.com/...",
        },
        {
          icon: "default-github",
          name: "GitHub",
          url: "https://github.com/...",
        },
        {
          icon: "default-instagram",
          name: "Instagram",
          url: "https://www.instagram.com/...",
        },
        {
          icon: "default-linkedin",
          name: "LinkedIn",
          url: "https://www.linkedin.com/...",
        },
        {
          icon: "default-mastodon",
          name: "Mastodon",
          url: "https://www.hacyderm.com/...",
        },
        {
          icon: "default-slack",
          name: "Slack",
          url: "https://www.slack.com/...",
        },
        {
          icon: "default-x",
          name: "Twitter/X",
          url: "https://twitter.com/...",
        },
      ],
    }),
  ],
});
