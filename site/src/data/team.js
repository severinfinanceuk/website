// The Severin Finance team, from the team page on the current severinfinance.com.
// Used by the team cards (home page, /team/) and the Person nodes on /team/.
import alain from '../assets/team/alain-dastros.jpg';
import hassaan from '../assets/team/hassaan-asad.jpg';

export const TEAM = [
  {
    id: 'alain-dastros', name: 'Alain Dastros', role: 'Managing Director', photo: alain, focus: '50% 22%',
    bio: 'Over 30 years in accountancy in international roles, including Philips Consumer Electronics, Anheuser-Busch and property finance at DTZ. CIMA member in practice with an MBA from Cass Business School. Specialises in company structuring and tax, including cross-border affairs and double taxation.',
    languages: ['English', 'French', 'Romanian'],
    knowsAbout: ['Company structuring', 'Taxation', 'Double taxation relief'],
    memberOf: { '@type': 'Organization', name: 'Chartered Institute of Management Accountants', alternateName: 'CIMA', url: 'https://www.cimaglobal.com/' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Cass Business School, City University London' },
  },
  {
    id: 'hassaan-asad', name: 'Hassaan Asad', role: 'Accountant', photo: hassaan, focus: '41% 30%',
    bio: 'Over 4 years in accounting, now studying for the ACCA Strategic Professional qualification. Prepares VAT, self assessment and corporation tax returns, plus budgets and variance analysis, in Xero, QuickBooks, Sage and FreeAgent. Looks after client accounts and tax compliance day to day.',
    languages: ['English', 'Urdu', 'Punjabi'],
    knowsAbout: ['Tax compliance', 'VAT returns', 'Self assessment', 'Corporation tax'],
  },
];
