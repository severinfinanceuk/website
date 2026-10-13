// Measurement settings, one place.
//
// Vercel Web Analytics: cookieless, no banner needed. Turn it on in the Vercel dashboard
// (Project > Analytics); the script below then starts reporting. It only loads on the built site.
//
// Google Analytics 4: paste the measurement ID (G-XXXXXXXXXX) to switch it on. While it is empty,
// nothing from Google loads and no cookie banner shows, because the site sets no optional cookies.
// With an ID, GA4 runs in Consent Mode v2: gtag.js loads only after the visitor clicks Accept
// (UK GDPR and PECR need consent before analytics cookies are set).

export const GA4_ID = '';

// First-party cookie that stores the visitor's choice ('granted' or 'denied') for 180 days
export const CONSENT_COOKIE = 'sf_consent';
export const CONSENT_DAYS = 180;
