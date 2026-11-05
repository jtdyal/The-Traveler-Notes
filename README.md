# The Traveler — Jump Tracker & Reading Companion

A spoiler-free reading companion and timeline tracker for Joseph Eckert's sci-fi novel *The Traveler*.

## Overview

In *The Traveler*, Scott Treder jumps forward in time in ever-doubling intervals ($2^{n-1}$ days) starting April 1, 2026. This application tracks the exponential timeline, converts jump durations into readable units (days, weeks, months, years), calculates calendar arrival dates, and provides an auto-saving notes journal for each jump.

## Features

- **Spoiler Shield**: Locks future jumps and reveals only up to the jump you are currently reading.
- **Reading Progress Selector**: Step through jumps one by one with "Reveal Next Jump" or use the dropdown jump selector.
- **Auto-Saving Notes**: Every note you type auto-saves to your browser's local storage with debounced save indicators.
- **Dual Views**: Switch seamlessly between a clean 5-column Table View and a modern Card / Journal View.
- **Data Export & Import**: Backup your reading notes to a JSON file anytime or restore them across devices.
- **Zero Build Step**: Fully self-contained `index.html` with Tailwind CSS via CDN.

## GitHub Pages Deployment

1. Drop `index.html` into the root of this repository (`https://github.com/jtdyal/The-Traveler-Notes`).
2. Go to repository **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://jtdyal.github.io/The-Traveler-Notes/`.
