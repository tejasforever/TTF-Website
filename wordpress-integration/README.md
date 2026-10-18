# TheTechForever (TTF) — Headless WordPress Integration

This folder contains the complete WordPress backend drop-in code for connecting your local or live WordPress CMS with the React modern frontend.

## Installation in Local WAMP / Production WordPress

1. Copy the folder `wordpress-integration` (or just `ttf-headless-core.php`) into your WordPress plugins directory:
   ```
   E:\wamp64\www\TTF\wp-content\plugins\ttf-headless-core\ttf-headless-core.php
   ```
2. Log into your WordPress Admin (`http://localhost/TTF/wp-admin`).
3. Navigate to **Plugins -> Installed Plugins**.
4. Activate **"TheTechForever Headless Core Engine"**.
5. Once activated, the following are immediately enabled:
   - **Services CPT** (`/wp-json/wp/v2/services`)
   - **Portfolio CPT** (`/wp-json/wp/v2/portfolio`)
   - **Testimonials CPT** (`/wp-json/wp/v2/testimonials`)
   - **FAQs CPT** (`/wp-json/wp/v2/faqs`)
   - **Inquiries Lead Capture Webhook** (`/wp-json/ttf/v1/inquiry`)
   - **Full CORS headers** allowing the React frontend (`http://localhost:5173` or production) to query the API without errors.
