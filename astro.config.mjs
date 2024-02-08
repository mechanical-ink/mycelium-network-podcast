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
      // <<-- START :: Featured episode configuration
      featuredEpisodeGuestName: "Aashni Shah",
      featuredEpisodeGuestProfilePicture: "aashni-shah",
      featuredEpisodeTitle:
        "Technology as a Force for Good: Empowering, Innovating, and Inspiring - Aashni Shah",
      featuredEpisodeSummary:
        "Schalk Neethling, the host of the Mycelium Network podcast, engaged in an inspiring conversation with guest Aashni Shah. Aashni, with her roots in Kenya, has carved a remarkable path in the tech world, starting from her educational journey in Canada to her roles in companies like Microsoft and Square, and her dive into entrepreneurship. A significant part of the discussion revolved around HypeDocs, Aashni's innovative platform designed to enable individuals and employees in companies to document and celebrate their professional achievements. This platform, pivoted to a B2B model, addresses the crucial need for self-promotion and recognition in the workplace, particularly highlighting the challenges faced by underrepresented groups in the tech industry.",
      featuredEpisodeTrack:
        "technology-as-a-force-for-good-empowering-innovating-and-inspiring-aashni-shah",
      featuredEpisodeURL:
        "technology-as-a-force-for-good-empowering-innovating-and-inspiring-aashni-shah",
      // <<-- END :: Featured episode configuration
      headerBackgroundColor: "#1c1c44",
      headerForegroundColor: "#fff",
      hostName: "Schalk Neethling",
      hostProfilePicture: "schalk-neethling",
      logo: "logo.svg",
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
