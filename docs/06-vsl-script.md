# Video sales letter (VSL) script

A short talking-head video in which Alain Dastros explains who Severin Finance helps, how it works and how to book. It ends on the free consultation. Every claim is taken from the website. Check the lines marked **[confirm]** with Severin before recording.

Last updated: 15 October 2026.

| | |
|---|---|
| Presenter | Alain Dastros, Managing Director (Hassaan Asad in B-roll) |
| Length | About 2 minutes 15 seconds (330 spoken words at a calm 150 words a minute) |
| Format | 16:9 for the website; a 9:16 cut of the 30-second version for social |
| Where it goes | Home page, under the hero. Contact page, under the calendar (the calendar stays directly under the H1) |
| Goal | One action: book the free 30-minute consultation |

## 1. Full script (2:15)

### Scene 1: Hook (0:00 to 0:10)
**ALAIN** (to camera, Fleet Street office):
> If you have ever opened a letter from HMRC and felt your stomach drop, this video is for you.

**On screen:** "Tax should not keep you up at night."

### Scene 2: The problem (0:10 to 0:35)
**ALAIN:**
> Deadlines. Penalties. Forms that seem written to confuse you. Maybe you run a company and do the books at midnight. Maybe you rent out a flat, or you have moved abroad and still owe a UK tax return. Or maybe you already have an accountant, and you only hear from them when the bill arrives.

**B-roll:** laptop late at night, a pile of brown HMRC envelopes, a wall calendar with 31 January circled.

### Scene 3: Who we are (0:35 to 1:00)
**ALAIN:**
> I am Alain Dastros, managing director of Severin Finance. I have spent over thirty years in accountancy, much of it in international roles, and we have looked after clients from our London office since 2013. We are regulated by CIMA, the Chartered Institute of Management Accountants, and between us our team speaks five languages.

**Lower third:** Alain Dastros, Managing Director · CIMA member in practice, MBA (Cass Business School)
**B-roll:** Alain and Hassaan at a desk, the CIMA logo, the office sign.

### Scene 4: What we do (1:00 to 1:25)
**ALAIN:**
> Our job is simple: we take the complex and make it black and white. Tax returns and self assessment. Company accounts, corporation tax, VAT and payroll. We set up and run UK companies, including for directors who live abroad. And if HMRC opens an enquiry, we deal with them, so you do not have to.

**On screen:** three cards matching the home page: Accounting & tax · Company services · Clients abroad.

### Scene 5: How it works (1:25 to 1:50)
**ALAIN:**
> Working with us takes three steps. One: book a free thirty-minute call. We listen, then send you a fixed price in writing, so you know the cost before anything starts. Two: we prepare everything and check every relief you can claim. Three: you approve it online, and we file with HMRC and Companies House. One dedicated team, from your first call to your final filing.

**On screen:** "1 Book a free call · 2 We prepare everything · 3 You approve, we file".

### Scene 6: The offer (1:50 to 2:05)
**ALAIN:**
> New clients get ten percent off their first year of filing, with no upfront fees. **[confirm]** And most clients never need to visit the office. We work by phone, video call and email, wherever you are.

**On screen:** "10% off your first year · No upfront fees".

### Scene 7: Call to action (2:05 to 2:15)
**ALAIN:**
> So here is what to do next. *[CTA line, see below.]* The call is free, there is no obligation, and you will leave it knowing exactly where you stand. Let us make your tax black and white.

CTA line by placement:
- **Home page:** "Click the red button under this video and pick a time that suits you."
- **Contact page:** "Pick a time in the calendar above. It takes less than a minute."
- **Social / ads:** "Tap the link and book your free call."

**End card (5 seconds):** red "Book a free consultation" button, 020 4542 2488, enquiries@severinfinance.com, the CIMA logo, and the small print "Severin Finance Limited. Regulated by CIMA."

## 2. 30-second cut (social and ads)

> If you have ever opened a letter from HMRC and felt your stomach drop, this is for you. I am Alain Dastros of Severin Finance, a London firm of accountants regulated by CIMA. We handle tax returns, company accounts, VAT and payroll for clients across the UK and abroad. Book a free thirty-minute call, and we will send you a fixed price in writing before anything starts. New clients get ten percent off their first year. Tap the link and book your free call.

About 80 words. Burn the captions in; most people watch social video muted.

## 3. Alternative hooks to test

Swap one of these in for Scene 1 and keep the rest of the script as it is.
1. "Most people do not need a cleverer accountant. They need one who picks up the phone."
2. "Live abroad but still have UK income? Here is how to stop worrying about your UK tax return."
3. "Running a limited company? Here is what your accountant should be doing for you."

## 4. Compliance rules for this script

- **Regulator:** say CIMA only. Never mention the FCA, loans, finance, mortgages or holding client money.
- **No promised results:** no promised tax savings, refund amounts or outcomes with HMRC. "Check every relief you can claim" is fine; "save you £X" is not.
- **No unconfirmed numbers:** no Google rating, review count or prices until Severin confirms them. These are still placeholders on the site.
- **The offer:** say "10% off the first year of filing, no upfront fees" only after Severin confirms it is still running.
- **Other countries:** name no countries besides the UK. Say "abroad", to match the site's UK-only positioning.

## 5. Production and adding it to the site

- **Filming:** film at the Fleet Street office with natural light and a lapel mic. Alain can read from a teleprompter, but it should sound spoken: pause at each full stop.
- **Captions and transcript:** burn captions into the social cut. On the website, use a captions file plus a full transcript under the video, which helps accessibility and SEO.
- **Hosting:**
  - Self-host an MP4 (H.264, under about 15 MB) with a poster image and `preload="none"`, so the page stays fast.
  - Or use YouTube with a click-to-load thumbnail. That needs `https://www.youtube-nocookie.com` added to `frame-src` in `site/vercel.json`, and it sets cookies after the click.
- **Schema:** add a `VideoObject` (name, description, thumbnailUrl, uploadDate, duration `PT2M15S`, contentUrl, transcript) to the page that hosts the video.
- **Tracking:** send `video_start` and `video_complete` events, and compare booking rates with and without the video.
