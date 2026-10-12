// Client reviews and the Google rating, shared by the whole site. Change them here and the home
// page, every service page and the hero trust lines all update.
// Home page shows the first 3 reviews, service pages the first 2: put the strongest first.
// Quote reviews word for word (typos included) and only with the client's permission.
// tbc: true = placeholder until Severin confirms it (shown in yellow).

export const reviewsHead = { eyebrow: 'Testimonials', h2: 'What our clients say' };

// Google rating: change value and count only, the sentences below build themselves.
// Used next to the reviews, in the hero trust lines and in the home page numbers ticker.
const value = 'X.X';
const count = 'XX';
export const rating = {
  value, count,
  text: `${value} ★ average from ${count} Google reviews`,
  short: `${value} ★ from ${count} Google reviews`,
  tbc: true,
};

export const reviews = [
  { name: 'Jonathon E', initials: 'JE', source: 'Client', text: 'I can only recommended Severin finance. They are always on top of things and there are no bad surprises!' },
  { name: 'Mark L', initials: 'ML', source: 'Client', text: 'Have used the tax services of Severin Finance for many years and they have proven themselves very reliable, knowledgeable and helpful in all of our dealings.' },
  { name: 'Reviewer name', initials: 'G', source: 'Google review', text: 'More real reviews go here, pulled from Google or Trustpilot with name, date and star rating.', tbc: true },
];
