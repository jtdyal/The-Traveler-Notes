# The Traveler — Reading Companion & Jump Tracker

[![Live Web App](https://img.shields.io/badge/Live_App-Launch_Tracker-d97706?style=for-the-badge&logo=safari&logoColor=white)](https://jtdyal.github.io/The-Traveler-Notes/)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-22c55e?style=for-the-badge&logo=github)](https://jtdyal.github.io/The-Traveler-Notes/)

> **Live Interactive Tracker & Reader Notes:** [https://jtdyal.github.io/The-Traveler-Notes/](https://jtdyal.github.io/The-Traveler-Notes/)

---

<p align="center">
  <img src="https://www.bookbrowse.com/images/previews_images/9781250428554.jpg" alt="The Traveler by Joseph Eckert Book Cover" width="280" style="border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.5);" />
</p>

A spoiler-free reading companion, timeline calculator, and personal journal designed for readers of Joseph Eckert's sci-fi novel **_The Traveler_**.

Scott Treder slips through time at precisely 7:52 AM, starting on **Monday, April 13, 2026**. With each slip, the time jumped doubles: 1 day, 2 days, 4 days, 8 days, 16 days ($2^{n-1}$ days). As Scott leaps forward into an increasingly distant future, his son Lyle dedicates his life to catching the father who is leaving him behind.

This app calculates every calendar arrival date, converts exponential jumps into human-readable units (weeks, months, years, millennia), and provides an auto-saving reading journal that keeps future leaps hidden until you reach them.

---

## Get the Book & Audiobook

Listen to or read _The Traveler_ across your favorite platforms:

<table>
  <tr>
    <td align="center" width="33%">
      <a href="https://us.macmillan.com/books/9781250455727/thetraveler/" target="_blank">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="assets/macmillan-publishers-dark.png" />
          <img src="https://logos-world.net/wp-content/uploads/2022/09/Macmillan-Logo.png" alt="Macmillan Publishers" height="42" />
        </picture>
        <br />
        <strong>Macmillan</strong>
      </a>
      <br />
      <sub>Narrated by Ray Porter &middot; <a href="https://www.youtube.com/shorts/7rfjdRPBeQk" target="_blank">&#9654; Hear him in a short</a></sub>
    </td>
    <td align="center" width="33%">
      <a href="https://open.spotify.com/show/59AiyCn1dsOimZ0HJRecLx" target="_blank">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" alt="Spotify Audiobook" height="42" />
        <br />
        <strong>Spotify</strong>
      </a>
      <br />
      <sub>Audiobook Edition</sub>
    </td>
    <td align="center" width="33%">
      <a href="https://www.bookbrowse.com/bb_briefs/detail/index.cfm/ezine_preview_number/24249/the-traveler" target="_blank">
        <img src="https://www.bookbrowse.com/site/images/bookbrowse-icon.png" alt="BookBrowse" height="42" />
        <br />
        <strong>BookBrowse</strong>
      </a>
      <br />
      <sub>Review & Excerpt</sub>
    </td>
  </tr>
</table>

---

## Key Features

* **Spoiler Shield by Default**: Keeps upcoming jumps, arrival dates, and elapsed decades locked until Scott actually takes his next leap in the story.
* **One-Tap "Reveal Next Jump"**: Located directly on the protected card at the bottom of your notes for seamless one-handed phone reading.
* **Warm Incandescent 2700K Theme**: Soft warm whites, ivory text, and gentle amber lamp tones designed for comfortable reading in bed or low light.
* **Mobile-First Touch Ergonomics**: Sized with 16px input floors to prevent iOS Safari auto-zooming, and auto-expanding note areas.
* **Zero Cloud Setup / 100% Private**: Notes save instantly to your browser's `localStorage` on your device. Export to JSON anytime for backup.

---

## Timeline Mechanics (Starts Monday, April 13, 2026)

| Jump # | Leap Duration | Converted Time | Calendar Arrival Date | Milestone |
| :---: | :---: | :---: | :---: | :--- |
| **1** | 1 day | 1 day | **Tuesday, April 14, 2026** | First slip (24 hours lost) |
| **2** | 2 days | 2 days | **Thursday, April 16, 2026** | The doubling begins |
| **3** | 4 days | 4 days | **Monday, April 20, 2026** | 1 week total elapsed |
| **4** | 8 days | 1.1 weeks | **Tuesday, April 28, 2026** | Two weeks lost |
| **5** | 16 days | 2.3 weeks | **Thursday, May 14, 2026** | 1 month unfolded in days |
| **6** | 32 days | 1.1 months | **Monday, June 15, 2026** | Leap extends past a month |
| **7** | 64 days | 2.1 months | **Tuesday, August 18, 2026** | Summer slips away |
| **8** | 128 days | 4.2 months | **Thursday, December 24, 2026** | Christmas Eve |
| **9** | 256 days | 8.4 months | **Monday, September 6, 2027** | Labor Day 2027 |
| **10** | 512 days | 1.4 years | **Tuesday, January 30, 2029** | Passing the 1-year mark |
| **11** | 1,024 days | 2.8 years | **Thursday, November 20, 2031** | Nearly 3 years per leap |
| **12** | 2,048 days | 5.6 years | **Monday, June 29, 2037** | Lyle enters adulthood |
| **13** | 4,096 days | 11.2 years | **Tuesday, September 15, 2048** | Over a decade forward |
| **14** | 8,192 days | 22.4 years | **Thursday, February 19, 2071** | Lyle reaches senior age |
| **15** | 16,384 days | 44.9 years | **Monday, December 30, 2115** | Beyond Lyle's lifetime |
| **20** | 524,288 days | 1,435 years | **Thursday, March 7, 4897** | Deep millennial future |
| **25** | 16,777,216 days | 45,934 years | **~Year 93,894** | Prehistoric human scale |
| **30** | 536,870,912 days | 1.47 million years | **~Year 1,471,904** | Deep cosmic time |

---

## Local Development & Hosting

This app is built as a single, self-contained `index.html` with zero build steps or package dependencies:

```bash
# Clone the repository
git clone https://github.com/jtdyal/The-Traveler-Notes.git
cd The-Traveler-Notes

# Open in any browser
open index.html
```

To enable GitHub Pages:
1. Push `index.html` to your repository's `main` branch.
2. In GitHub, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` and root `/`, then save.
