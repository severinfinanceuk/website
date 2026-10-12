// Every location landing page we target, by country. One source for the header mega-menu,
// the /locations/ hub, the footer and (later) the location page template.
// Cities come from research/keywords/keyword-master.csv; Australia from keyword-candidates-it-au.csv;
// UAE is provisional until its keyword research is done.
// Order = priority: UK and France first.

export const locations = [
  {
    code: 'UK', country: 'United Kingdom', href: '/uk/',
    groups: [
      {
        title: 'London', href: '/uk/london/',
        items: [
          ['City of London', '/uk/london/city-of-london/'],
          ['Canary Wharf', '/uk/london/canary-wharf/'],
          ['Westminster', '/uk/london/westminster/'],
          ['Kensington', '/uk/london/kensington/'],
          ['Camden', '/uk/london/camden/'],
          ['Islington', '/uk/london/islington/'],
          ['Shoreditch', '/uk/london/shoreditch/'],
          ['Stratford', '/uk/london/stratford/'],
          ['Croydon', '/uk/london/croydon/'],
          ['Richmond', '/uk/london/richmond/'],
          ['Wimbledon', '/uk/london/wimbledon/'],
        ],
      },
      {
        title: 'Across the UK',
        items: [
          ['Manchester', '/uk/manchester/'],
          ['Birmingham', '/uk/birmingham/'],
          ['Leeds', '/uk/leeds/'],
          ['Liverpool', '/uk/liverpool/'],
          ['Bristol', '/uk/bristol/'],
          ['Brighton', '/uk/brighton/'],
          ['Cambridge', '/uk/cambridge/'],
          ['Oxford', '/uk/oxford/'],
          ['Reading', '/uk/reading/'],
          ['Milton Keynes', '/uk/milton-keynes/'],
        ],
      },
    ],
  },
  {
    code: 'FR', country: 'France', href: '/fr/', lang: 'fr',
    groups: [
      {
        items: [
          ['Français à Londres', '/fr/londres/'],
          ['Paris', '/fr/paris/'],
          ['Lyon', '/fr/lyon/'],
          ['Marseille', '/fr/marseille/'],
          ['Toulouse', '/fr/toulouse/'],
          ['Bordeaux', '/fr/bordeaux/'],
          ['Lille', '/fr/lille/'],
          ['Nantes', '/fr/nantes/'],
          ['Nice', '/fr/nice/'],
        ],
      },
    ],
  },
  {
    code: 'US', country: 'United States', href: '/us/',
    groups: [
      {
        items: [
          ['New York', '/us/new-york/'],
          ['Los Angeles', '/us/los-angeles/'],
          ['San Francisco', '/us/san-francisco/'],
          ['Chicago', '/us/chicago/'],
          ['Houston', '/us/houston/'],
          ['Miami', '/us/miami/'],
          ['Boston', '/us/boston/'],
        ],
      },
    ],
  },
  {
    code: 'CA', country: 'Canada', href: '/ca/',
    groups: [
      {
        items: [
          ['Toronto', '/ca/toronto/'],
          ['Vancouver', '/ca/vancouver/'],
          ['Montréal', '/ca/fr/montreal/', 'fr'],
          ['Calgary', '/ca/calgary/'],
          ['Ottawa', '/ca/ottawa/'],
        ],
      },
    ],
  },
  {
    code: 'AU', country: 'Australia', href: '/au/',
    groups: [
      {
        items: [
          ['Sydney', '/au/sydney/'],
          ['Melbourne', '/au/melbourne/'],
          ['Brisbane', '/au/brisbane/'],
          ['Perth', '/au/perth/'],
          ['Adelaide', '/au/adelaide/'],
          ['Canberra', '/au/canberra/'],
        ],
      },
    ],
  },
  {
    code: 'UAE', country: 'United Arab Emirates', href: '/uae/',
    groups: [
      {
        items: [
          ['Dubai', '/uae/dubai/'],
          ['DIFC', '/uae/dubai/difc/'],
          ['DMCC (JLT)', '/uae/dubai/dmcc/'],
          ['Business Bay', '/uae/dubai/business-bay/'],
          ['Abu Dhabi', '/uae/abu-dhabi/'],
          ['Sharjah', '/uae/sharjah/'],
        ],
      },
    ],
  },
];
