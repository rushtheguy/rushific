/* RUSHIFIC V2.7 — EDIT THIS FILE FOR TEXT + LINKS */

const SITE = {
  copy: {
    heroTitle: "I AM RUSHIFIC.",
    heroLine1: "I play games, and I stream.",
    heroLine2: "I watch movies, TV, anime, and a bunch of other stuff.",
    heroLine3: "I make videos on almost everything while I try to understand the world.",

    contentHeading: "DIFFERENT PLACES, DIFFERENT CONTENT!",
    youtubeDescription: "Main channel + clips from the streams",
    youtubeMainName: "RUSHIFIC",
    youtubeMainDescription: "Streams + VODs",
    youtubeClipsName: "RUSHIFIC_CLIPS",
    youtubeClipsDescription: "Clips + stream highlights",
    twitchDescription: "Live streams",

    otdpName: "OH! THAT'S DOPE PRODUCTIONS",
    otdpDescription: "Film and TV critiques.",
    neobrainerName: "NEOBRAINER",
    neobrainerDescription: "Philosophy and book discussions.",
    rudraName: "RUDRA SANCHAARI",
    rudraDescription: "Video editing, and freelancing stuff.",

    discordTitle: "JOIN THE DISCORD",
    discordDescription: "community server",
    discordButton: "JOIN →",
    serverLabel: "SERVER NAME",
    serverName: "Vinland gangg",
    /*serverTagline: "Gamers. Thinkers. Creators. You?"*/

    aboutTitle: "ABOUT ME",
    aboutLine1: "The start of the page tells enough. If not that my content does.",
    aboutLine2: "I am rushific aka rushu.",
    aboutLine3: "I make content.",
    aboutLine4: "I am from India.",

    findEyebrow: "WELL...",
    findTitle: "FIND ME HERE",
    xHandle: "@rushific",
    emailTitle: "EMAIL",
    emailPrompt: "To collaborate, enquire or talk money:",
    emailAddress: "rushu.bizz@gmail.com",
    footerBrand: "rushific.com"
  },

  links: {
    RUSHIFIC_YOUTUBE_URL: "https://youtube.com/@rushific?si=WVr9j7OqBqyivMv8",
    RUSHIFIC_CLIPS_URL: "https://youtube.com/@rushific_clips?si=KLtgi6kd1-2qxYaE",
    TWITCH_URL: "https://www.twitch.tv/rushific",
    OTDP_URL: "https://youtube.com/@ohthatsdopeproductions?si=YUnHQBffkbPGOPwe",
    NEOBRAINER_URL: "https://youtube.com/@neobrainer?si=dAux04R_3kvO6vUQ",
    RUDRA_SANCHAARI_URL: "https://youtube.com/@rush-no-money?si=he74E1VdT1sgCgDz",
    DISCORD_URL: "https://discord.gg/exfjXkFht",
    X_URL: "https://x.com/rushific"
  }
};

document.querySelectorAll("[data-copy]").forEach((el) => {
  const key = el.dataset.copy;
  if (SITE.copy[key] !== undefined) el.textContent = SITE.copy[key];
});

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  if (SITE.links[key]) el.href = SITE.links[key];
});

const fill = document.querySelector(".progress-fill");
const egg = document.querySelector(".progress-egg");

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  fill.style.width = `${pct}%`;
  egg.style.left = `${pct}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const navLinks = [...document.querySelectorAll(".nav-pill a[data-nav]")];
const sections = [
  document.querySelector("#content"),
  document.querySelector("#twitch"),
  document.querySelector("#community"),
  document.querySelector("#about"),
  document.querySelector("#contact")
].filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

sections.forEach((section) => observer.observe(section));
