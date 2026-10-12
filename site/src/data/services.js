// Every service page we target, grouped by category. One source for the header Services
// mega-menu (desktop and mobile) and, later, the service hub pages.
// Groups follow docs/01-master-plan.md (UK keyword clusters). Each slug is the page's main
// commercial keyword (docs/03-service-page-template.md), e.g. /uk/tax/self-assessment-accountant/.
// UK services for now; country service lists (France, US, Canada...) come with their country hubs.

export const services = [
  {
    title: 'Accounting', href: '/uk/accounting/',
    items: [
      ['Limited company accounts', '/uk/accounting/limited-company-accountant/'],
      ['Bookkeeping', '/uk/accounting/bookkeeping-services/'],
      ['Payroll', '/uk/accounting/payroll-services/'],
      ['Management accounts & virtual FD', '/uk/accounting/virtual-finance-director/'],
      ['Landlords & property', '/uk/accounting/landlord-accountant/'],
      ['Contractors & IR35', '/uk/accounting/contractor-accountant/'],
    ],
  },
  {
    title: 'Tax', href: '/uk/tax/',
    items: [
      ['Self assessment', '/uk/tax/self-assessment-accountant/'],
      ['Corporation tax', '/uk/tax/corporation-tax-accountant/'],
      ['VAT returns', '/uk/tax/vat-accountant/'],
      ['Making Tax Digital', '/uk/tax/making-tax-digital-accountant/'],
      ['Capital gains tax', '/uk/tax/capital-gains-tax-accountant/'],
      ['Inheritance tax', '/uk/tax/inheritance-tax-planning/'],
      ['Tax refunds', '/uk/tax/tax-refunds/'],
      ['HMRC investigations', '/uk/tax/hmrc-tax-investigation/'],
    ],
  },
  {
    title: 'Company services', href: '/uk/company-services/',
    items: [
      ['Company formation', '/uk/company-services/company-formation/'],
      ['Company secretarial', '/uk/company-services/company-secretarial-services/'],
      ['Business valuation', '/uk/company-services/business-valuation/'],
      ['Succession & buy-outs', '/uk/company-services/succession-planning/'],
      ['EIS & SEIS', '/uk/company-services/eis-seis/'],
    ],
  },
  {
    title: 'Business finance', href: '/uk/business-finance/',
    items: [
      ['Business loans', '/uk/business-finance/business-loans/'],
      ['Tax bill funding', '/uk/business-finance/tax-bill-funding/'],
      ['Asset finance', '/uk/business-finance/asset-finance/'],
      ['Invoice finance', '/uk/business-finance/invoice-finance/'],
      ['Commercial mortgages', '/uk/business-finance/commercial-mortgages/'],
      ['Bridging loans', '/uk/business-finance/bridging-loans/'],
      ['Development finance', '/uk/business-finance/development-finance/'],
    ],
  },
  {
    title: 'Cross-border', href: '/cross-border/',
    items: [
      ['UK ↔ France', '/cross-border/uk-france-tax/'],
      ['US expat tax', '/us/expat-tax/'],
      ['Canada ↔ UK', '/ca/canada-uk-tax/'],
      ['Australia ↔ UK', '/au/australia-uk-tax/'],
      ['UK to Dubai', '/uae/moving-to-dubai/'],
      ['Non-resident UK tax', '/cross-border/non-resident-uk-tax/'],
      ['UK company from abroad', '/cross-border/uk-company-from-abroad/'],
    ],
  },
];
