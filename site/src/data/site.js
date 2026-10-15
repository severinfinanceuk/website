// Site-wide facts and the entity graph (Organization + WebSite), defined once.
// Base.astro prints these two nodes on every page; page graphs point to them by @id
// (publisher, provider, isPartOf), so search engines and AI tools see one firm, not many.
//
// Company facts from Companies House (SEVERIN FINANCE LIMITED, 08501829). The registered office is
// not used as the schema address: it is a legal address, not necessarily where clients visit.
// tbc: facts only Severin can give stay out of schema until confirmed: office address, ICO number.

export const SITE = 'https://severinfinance.com';
export const ORG_ID = `${SITE}/#org`;
export const WEBSITE_ID = `${SITE}/#website`;

export const COMPANY = {
  legalName: 'Severin Finance Limited', number: '08501829', registeredIn: 'England and Wales',
  registeredOffice: '23 Dorset Road, London, SW8 1EF', incorporated: '2013-04-24',
  regulator: 'the Chartered Institute of Management Accountants (CIMA)',
  companiesHouse: 'https://find-and-update.company-information.service.gov.uk/company/08501829',
};

export const PHONE = { display: '020 4542 2488', tel: '+442045422488', schema: '+44 20 4542 2488' };
export const EMAIL = 'enquiries@severinfinance.com';

// Profiles that prove who we are (Google Business Profile, LinkedIn, Companies House, Trustpilot).
// Add the real URLs here once they exist; empty means sameAs is left out.
export const sameAs = [COMPANY.companiesHouse];

// Search Console and Bing Webmaster Tools verification codes (meta tag method). Empty = no tag.
export const verification = { google: '', bing: '' };

// Pages kept out of search (noindex) and out of the sitemaps. Legal pages are drafts until
// Severin approves them; /reviews/ waits for real reviews. Remove a path to publish it.
export const noindexPaths = [
  '/privacy-policy/', '/cookie-policy/', '/terms/', '/complaints/', '/accessibility/', '/reviews/',
];

export const orgNode = {
  '@type': ['AccountingService', 'Organization'],
  '@id': ORG_ID,
  name: 'Severin Finance',
  legalName: COMPANY.legalName,
  foundingDate: COMPANY.incorporated,
  identifier: { '@type': 'PropertyValue', propertyID: 'Companies House company number', value: COMPANY.number },
  memberOf: { '@type': 'Organization', name: 'Chartered Institute of Management Accountants', alternateName: 'CIMA', url: 'https://www.cimaglobal.com/' },
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
  image: `${SITE}/logo.png`,
  telephone: PHONE.schema,
  email: EMAIL,
  slogan: 'Simplifying the complex, so that everything is just black and white.',
  description: 'UK accountancy firm in London: accounting, tax, payroll and company services for clients in London, across the UK and UK clients living abroad.',
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  areaServed: { '@type': 'Country', name: 'United Kingdom', sameAs: 'https://www.wikidata.org/wiki/Q145' },
  knowsLanguage: 'en-GB',
  contactPoint: {
    '@type': 'ContactPoint', contactType: 'customer service', telephone: PHONE.schema, email: EMAIL,
    areaServed: 'GB', availableLanguage: 'English',
  },
  ...(sameAs.length && { sameAs }),
};

export const websiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE}/`,
  name: 'Severin Finance',
  inLanguage: 'en-GB',
  publisher: { '@id': ORG_ID },
};

export const orgRef = { '@id': ORG_ID };
export const websiteRef = { '@id': WEBSITE_ID };

// The person who reviews pages (E-E-A-T). Same as on the service pages.
export const reviewer = {
  name: 'Alain Dastros', initials: 'AD', role: 'Managing Director, Severin Finance',
  credentials: { text: 'Qualifications to confirm (e.g. CIMA)', tbc: true },
};
