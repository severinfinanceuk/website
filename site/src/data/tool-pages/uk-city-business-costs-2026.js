// UK city business costs 2026-27 (data study): /resources/uk-city-business-costs-2026/.
// Page: src/pages/resources/uk-city-business-costs-2026.astro (key findings cards + Dataset schema).
// Every figure comes from the sourced fact tables on our location pages (src/data/location-pages/*.js),
// checked on 13 October 2026, plus the GOV.UK Clean Air Zone list (updated 12 February 2026).
// The £100,000 worked example is our own arithmetic on those published rates. If a location page
// figure changes, change it here too.
const S = '2026-27, before reliefs';

export default {
  url: '/resources/uk-city-business-costs-2026/',
  title: 'UK City Business Costs 2026-27 | Severin Finance',
  description: 'Business rates, BID levies and clean air charges in 22 UK places for 2026-27, with a worked example for a £100,000 office. Free consultation.',
  eyebrow: 'Data study',
  h1: 'UK city business costs 2026-27: rates, BID levies and clean air charges',
  crumb: 'City business costs 2026-27',
  summary: 'Business rates, BID levies and clean air charges compared across 22 UK places, with sources.',
  reviewed: { date: '2026-10-13', label: '13 October 2026' },
  toolLabel: 'Key findings',
  hero: {
    answer: 'An office with a rateable value of £100,000 pays £48,000 in business rates in 2026-27 outside London, £50,000 in a London borough because of the Crossrail supplement, and £54,200 in the City of London. Business Improvement District levies add 1% to 2% of rateable value in most centres, and outside London only Birmingham and Bristol charge for clean air.',
  },
  findings: [
    ['£6,200', 'Extra a year a £100,000 office pays in the City of London, compared with a city outside London, before BID levies'],
    ['2%', 'Highest headline BID levy we found: Brilliant Brighton from 1 July 2026, ahead of Leeds at 1.94%'],
    ['£12,000 to £180,000', 'Range of rateable values at which a BID levy starts, from Stratford and Twickenham to Bloomsbury and Holborn'],
    ['2 of 10', 'Cities outside London with a charging Clean Air Zone: Birmingham and Bristol'],
  ],
  service: {
    href: '/uk/accounting/virtual-finance-director/', label: 'Our finance director service',
    boxTitle: 'Plan for every local cost', text: 'We check your rates bill, BID levy and vehicle charges and build them into your budget and cash flow forecast.',
  },
  sections: [
    {
      id: 'rates', h2: 'What are the business rates multipliers for 2026-27?',
      body: [
        '<p>Business rates in England use the same multipliers everywhere. Your bill is the rateable value of your premises multiplied by the rate in pence per £1, less any reliefs. A new rating list started on 1 April 2026, based on rents at 1 April 2024, and the 40% retail, hospitality and leisure relief ended on 31 March 2026. Lower multipliers for those sectors replace it. All 22 places in this study are in England; Scotland, Wales and Northern Ireland set their own rates.</p>',
        { caption: 'Business rates multipliers in England, 2026-27', head: ['Rateable value', 'Standard', 'Retail, hospitality and leisure'], rows: [
          ['Under £51,000 (small business multiplier)', '43.2p per £1', '38.2p per £1'],
          ['£51,000 to £499,999 (standard multiplier)', '48.0p per £1', '43.0p per £1'],
          ['£500,000 or more (high value multiplier)', '50.8p per £1', '50.8p per £1 (no lower rate)'],
        ], after: 'Source: GOV.UK, notification of the non-domestic rating multipliers for 2026-27. Pubs and live music venues get a further 15% off their 2026-27 bill.' },
        '<p>Transitional relief limits how far a bill can rise after the revaluation. In London a bill can rise by at most 5% for rateable values up to £28,000, 15% up to £100,000 and 30% above. Outside London the first band ends at £20,000. If you lost small business rate relief at the revaluation, Supporting Small Business Relief caps the rise at £800 a year or the transitional cap, whichever is higher.</p>',
      ],
    },
    {
      id: 'london', h2: 'What extra do London businesses pay?',
      body: [
        '<p>Every London borough adds the Crossrail Business Rate Supplement of 2p per £1, but only on rateable values over £92,000. The Greater London Authority says about 87% of London properties are below that threshold. The City of London Corporation adds its own premium as well, to pay for policing, security and resilience in the Square Mile.</p>',
        { caption: 'London additions to the business rates bill, 2026-27', head: ['Charge', 'Where', 'Amount'], rows: [
          ['Crossrail Business Rate Supplement', 'All of London', '2p per £1, only on rateable values over £92,000'],
          ['City premium', 'City of London', '2.9p per £1 on small business rates, 3.2p on all others'],
          ['One-year City supplement', 'City of London', 'A further 1p per £1 from 1 April 2026, offset for properties on Transitional Relief or Supporting Small Business Relief'],
          ['City totals', 'City of London', '46.1p (small), 51.2p (standard), 54.0p (high value) per £1'],
        ], after: 'Sources: Greater London Authority, Crossrail Business Rate Supplement 2026-27; City of London Corporation, how your business rates bill is calculated.' },
      ],
    },
    {
      id: 'bids', h2: 'How much are BID levies in each city centre?',
      body: [
        '<p>A Business Improvement District (BID) is an area where businesses vote to pay a levy on top of business rates to fund local projects such as cleaning, security and events. Once a ballot passes, every business above the threshold in the area must pay, whether or not it voted. The levy is a percentage of rateable value, and many BIDs use an older rating list or add a yearly inflation rise. The last column shows the headline rate applied to a rateable value of £100,000, before caps, discounts and rises.</p>',
        { caption: 'BID levies in the places we cover, 2026-27', head: ['Place and BID', 'Who pays (rateable value)', 'Levy', 'Headline levy on £100,000'], rows: [
          ['Brighton: Brilliant Brighton', 'Above the BID threshold', '2% from 1 July 2026 (1.5% before), on 31 March 2025 values', '£2,000'],
          ['Leeds: LeedsBID', '£60,000 or more', '1.94% in 2026-27, capped at £40,800', '£1,940'],
          ['Richmond: Be Richmond', '£35,000 or more', '1.74% of 2017 rateable value, capped at £7,750', '£1,740 on the 2017 value'],
          ['Manchester: CityCo city centre BID', '£40,000 or more', '1.7% of 2023 value (1.5% for offices with no street frontage), rising 2% a year from year three, capped at £32,000', 'From £1,700'],
          ['Twickenham: Discover Twickenham', '£12,000 or more', '1.6% of 2023 rateable value, capped at £12,000', '£1,600 on the 2023 value'],
          ['Stratford: Stratford Original', '£12,000 or more', '1.5%, third term 2025 to 2030', '£1,500'],
          ['Bristol: Clifton Village BID', 'Above the BID threshold', '1.5%, term from 1 November 2022', '£1,500'],
          ['Cambridge: Cambridge BID', 'Above £34,500', '1.25%, April 2023 to March 2028', '£1,250'],
          ['Milton Keynes: CMK BID', '£50,000 or more', '1.25%, rising 3% a year since 2023 (1% for tenants of the main shopping centres)', 'From £1,250'],
          ['Croydon: Croydon BID', '£40,000 or more', '1% to 31 March 2027; 1.3% proposed from April 2027', '£1,000'],
          ['Bristol: Bristol BID (City Centre, Broadmead, Redcliffe and Temple)', '£30,000 or more', 'Set by premises; ask Bristol BID', 'Varies'],
          ['Liverpool: Retail & Leisure BID and Culture & Commerce BID', '£45,000 or more', 'Set by each BID', 'Varies'],
        ], after: 'Sources: each BID or billing council, listed on the right. Ballots due in 2026: Croydon (closes 21 October), Wimbledon (5 November, proposed 1.30% from April 2027 on premises of £20,000 or more) and Angel Islington (19 November).' },
        '<p>London has many more BIDs than we can list: Westminster alone has 20, and the City of London has 5 (Aldgate Connect, Cheapside, Culture Mile, Fleet Street Quarter and Eastern City). In Camden, the threshold varies widely from one BID to the next:</p>',
        { caption: 'BID levy thresholds in Camden', head: ['BID', 'Levy starts at a rateable value of'], rows: [
          ['Hatton Garden', '£40,000'],
          ['Euston Town', '£70,000'],
          ['Camden Town Unlimited', '£120,000'],
          ['Fitzrovia Partnership', '£160,000'],
          ['Central District Alliance (Bloomsbury, Holborn, St Giles)', '£180,000'],
        ], after: 'Source: Camden Council, Business Improvement District levy. Camden Town Unlimited, Euston Town and Hatton Garden won renewal ballots on 27 February 2026.' },
      ],
    },
    {
      id: 'example', h2: 'What does a £100,000 office pay in each place?',
      body: [
        '<p>To compare like with like, we took an office with a rateable value of £100,000, which falls in the standard multiplier band (48.0p per £1). The table adds the London supplements and, where the levy rate is published, the city centre BID levy at its headline rate. It ignores reliefs, transitional relief and BID caps, and assumes the same rateable value on every rating list a BID uses.</p>',
        { caption: `Yearly business rates and BID levy on a £100,000 office, ${S}`, head: ['Location', 'Business rates', 'London supplements', 'BID levy', 'Total'], rows: [
          ['Outside London, no BID', '£48,000', 'None', 'None', '£48,000'],
          ['Cambridge city centre', '£48,000', 'None', '£1,250', '£49,250'],
          ['Manchester city centre', '£48,000', 'None', 'From £1,700', 'From £49,700'],
          ['Leeds city centre', '£48,000', 'None', '£1,940', '£49,940'],
          ['Brighton city centre (full-year rate)', '£48,000', 'None', '£2,000', '£50,000'],
          ['London borough, no BID', '£48,000', '£2,000 Crossrail', 'None', '£50,000'],
          ['Croydon town centre', '£48,000', '£2,000 Crossrail', '£1,000', '£51,000'],
          ['Stratford', '£48,000', '£2,000 Crossrail', '£1,500', '£51,500'],
          ['City of London, before any BID', '£51,200', '£2,000 Crossrail + £1,000 one-year supplement', 'Varies by BID', '£54,200'],
        ], after: 'Our arithmetic on the published 2026-27 rates. The City of London figure uses the City standard total of 51.2p per £1.' },
        '<p>The gap between the cheapest and the dearest location is £6,200 a year before any City BID levy, or about 13%. For most small firms the bigger question is whether they fall under a threshold: below £92,000 there is no Crossrail supplement, and many BIDs only charge above £30,000 to £60,000. Our <a href="/uk/accounting/virtual-finance-director/">finance director service</a> builds these costs into your budget before you sign a lease, and our <a href="/resources/cash-flow-forecasting/">cash flow forecasting guide</a> shows how to plan for a yearly levy bill.</p>',
      ],
    },
    {
      id: 'clean-air', h2: 'Which cities charge for clean air or congestion?',
      body: [
        { caption: 'Clean air and road charges, 2026', head: ['Place', 'Scheme', 'Daily charge for vehicles that do not meet the standard'], rows: [
          ['All London boroughs', 'Ultra Low Emission Zone (ULEZ)', '£12.50'],
          ['Central London', 'Congestion Charge (from 2 January 2026)', '£18, whatever the vehicle'],
          ['Birmingham', 'Clean Air Zone (class D), inside the A4540 Middleway', '£8 cars, taxis and vans; £50 coaches, buses and HGVs'],
          ['Bristol', 'Clean Air Zone (class D)', '£9 cars, taxis and vans; £100 HGVs, buses and coaches'],
          ['Oxford', 'Zero Emission Zone pilot, 9 central streets, 7am to 7pm', 'Set by emissions; zero-emission vehicles free'],
          ['Greater Manchester', 'Non-charging clean air plan', 'None'],
          ['Leeds', 'No Clean Air Zone (council decision, October 2020)', 'None'],
          ['Brighton, Cambridge, Liverpool, Milton Keynes, Reading', 'Not on the GOV.UK Clean Air Zone list', 'None'],
        ], after: 'Sources: TfL; Brum Breathes; Clean Air for Bristol; Oxfordshire County Council; Clean Air Greater Manchester; GOV.UK, driving in a Clean Air Zone (updated 12 February 2026). Oxford traffic filters started on 28 September 2026: cars need a permit, and the fine is £70 (£35 if paid within 21 days).' },
        '<p>A charge you pay for a business journey is normally an allowable business expense. A penalty charge notice for not paying is not, and neither is a charge on your commute between home and your usual workplace. If you are choosing a van, check that it meets the standard before you buy: a non-compliant van driven into the Bristol zone every working day would cost over £2,000 a year.</p>',
      ],
    },
    {
      id: 'other', h2: 'What other local costs should businesses budget for?',
      body: [
        { caption: 'Wages and other local charges, 2026-27', head: ['Item', 'Where', 'Amount'], rows: [
          ['National Living Wage (21 and over), legal minimum', 'Everywhere', '£12.71 an hour from 1 April 2026'],
          ['Real Living Wage (voluntary)', 'Outside London', '£13.45 an hour'],
          ['London Living Wage (voluntary)', 'London', '£14.80 an hour'],
          ['Late Night Levy', 'Islington', '£299 to £4,400 a year for premises selling alcohol between 00:01 and 06:00'],
          ['Band D council tax', 'Birmingham', '£2,353.17'],
          ['Band D council tax', 'Merton (Wimbledon)', '£2,140.52, or £2,181.90 with the commons levy'],
          ['High Value Council Tax Surcharge (from April 2028)', 'England, homes worth £2 million or more', '£2,500 to £7,500 a year'],
        ], after: 'Sources: GOV.UK; Living Wage Foundation; Islington Council; Birmingham City Council; Merton Council.' },
      ],
    },
    {
      id: 'method', h2: 'How we compiled this study',
      body: [
        '<p>We gathered these figures for our <a href="/locations/">location pages</a> on 22 places in England, from GOV.UK, the billing councils, the Greater London Authority, TfL and each BID company, and checked them on 13 October 2026. The worked example is our own arithmetic on the published rates. BID levies change each year with inflation rises and new ballots, so check the latest rules with the BID before you rely on a figure.</p>',
        '<p>Journalists and researchers may quote these figures with a link to this page. For local detail, see our pages for <a href="/uk/london/">London</a>, <a href="/uk/manchester/">Manchester</a>, <a href="/uk/birmingham/">Birmingham</a>, <a href="/uk/leeds/">Leeds</a>, <a href="/uk/bristol/">Bristol</a> and the <a href="/uk/london/city-of-london/">City of London</a>.</p>',
      ],
    },
  ],
  faqs: [
    { q: 'What is a BID levy?', a: 'A charge on top of business rates, paid by businesses inside a Business Improvement District once a ballot approves it. It is a percentage of rateable value, usually 1% to 2%, and only applies above a threshold set by each BID.' },
    { q: 'Is a BID levy tax deductible?', a: 'Yes, a BID levy paid by a trading business is normally an allowable expense against profits, like business rates. Penalties for paying late are not.' },
    { q: 'Do I pay the Crossrail supplement?', a: 'Only if your premises are in London and have a rateable value over £92,000. It is 2p per £1 of rateable value and appears on your business rates bill. About 87% of London properties are below the threshold.' },
    { q: 'Why is the City of London more expensive?', a: 'The City of London Corporation adds a premium of 2.9p or 3.2p per £1 to the national multipliers, plus a one-year 1p supplement from April 2026. It pays for policing, security and resilience in the Square Mile.' },
  ],
  sources: [
    ['https://www.gov.uk/government/publications/22026-notification-of-non-domestic-rating-multipliers-for-202627/22026-notification-of-non-domestic-rating-multipliers-for-202627', 'GOV.UK: Business rates multipliers 2026-27'],
    ['https://www.gov.uk/apply-for-business-rate-relief/supporting-small-business-relief', 'GOV.UK: Supporting Small Business Relief'],
    ['https://www.london.gov.uk/md3465-crossrail-business-rates-supplement-approval-policies-2026-27', 'Greater London Authority: Crossrail Business Rate Supplement 2026-27'],
    ['https://www.cityoflondon.gov.uk/services/business-rates/how-your-bill-is-calculated', 'City of London Corporation: How your bill is calculated'],
    ['https://www.camden.gov.uk/business-improvement-district-bid-levy', 'Camden Council: BID levy'],
    ['https://www.leedsbid.co.uk/governance/', 'LeedsBID: governance and levy 2025 to 2030'],
    ['https://cityco.com/?p=25385', 'CityCo: Manchester City Centre BID levy rules 2023-28'],
    ['https://www.brighton-hove.gov.uk/council-and-democracy/voting-and-elections/brighton-bid-ballot', 'Brighton & Hove City Council: Brighton BID ballot'],
    ['https://cambridge.gov.uk/news/2022/11/11/result-of-cambridge-bid-renewal-ballot', 'Cambridge City Council: BID renewal ballot'],
    ['https://www.milton-keynes.gov.uk/business/business-rates/business-improvement-district-levies', 'Milton Keynes City Council: BID levies'],
    ['https://www.richmond.gov.uk/services/business/business_improvement_district', 'Richmond Council: Business Improvement Districts'],
    ['https://croydonbid.com/ballot-2026/', 'Croydon BID: 2026 renewal ballot'],
    ['https://stratfordoriginal.com/renewal-ballot/', 'Stratford Original BID: renewal ballot'],
    ['https://www.bristol.gov.uk/business/business-rates/business-rates-explained/business-improvement-districts', 'Bristol City Council: Business Improvement Districts'],
    ['https://liverpoolbidcompany.com/retail-leisure-bid/', 'Liverpool BID Company: Retail & Leisure BID'],
    ['https://www.gov.uk/guidance/driving-in-a-clean-air-zone', 'GOV.UK: Driving in a Clean Air Zone'],
    ['https://tfl.gov.uk/modes/driving/ultra-low-emission-zone', 'TfL: Ultra Low Emission Zone'],
    ['https://tfl.gov.uk/modes/driving/congestion-charge', 'TfL: Congestion Charge'],
    ['https://www.brumbreathes.co.uk/info/25/welcome-2/45/charges-operation-1/3', 'Brum Breathes: Clean Air Zone charges'],
    ['https://www.cleanairforbristol.org/caz/charges-bristol-clean-air-zone/', 'Clean Air for Bristol: charges'],
    ['https://news.oxfordshire.gov.uk/britains-first-zero-emission-zone-begins-in-oxford/', 'Oxfordshire County Council: Zero Emission Zone'],
    ['https://www.gov.uk/government/news/national-living-wage-increases-to-1271-per-hour', 'GOV.UK: National Living Wage from April 2026'],
    ['https://www.livingwage.org.uk/what-real-living-wage', 'Living Wage Foundation: Real Living Wage'],
  ],
};
