// Every location landing page we target, by country. One source for the header mega-menu,
// the /locations/ hub, the footer and (later) the location page template.
// Cities come from research/keywords/keyword-master.csv. UK only: Severin is registered in the UK.

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
];
