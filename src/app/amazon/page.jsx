import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
  title: 'Amazon Services',
  description:
    'Full-service Amazon growth and management — PPC, listings, brand content, account management, and international expansion.',
}

const services = [
  {
    title: 'Amazon PPC Advertising',
    body: 'Full management of Sponsored Products, Sponsored Brands, Sponsored Display, and Sponsored Brand Video campaigns. We build, optimize, and scale ad strategies to maximize ROAS and total revenue.',
    bullets: [
      'Keyword research & competitive analysis',
      'Campaign structure & bid optimization',
      'Negative keyword management',
      'Daily budget pacing & dayparting',
      'ACOS / TACOS target management',
      'Product targeting & category targeting',
      'New product launch PPC strategy',
    ],
  },
  {
    title: 'Amazon DSP (Demand-Side Platform)',
    body: 'Programmatic display and video advertising on and off Amazon to drive awareness, retarget shoppers, and capture demand at every stage of the funnel.',
    bullets: [
      'Audience creation & segmentation',
      'Retargeting past visitors & purchasers',
      'Competitor conquesting audiences',
      'Lifestyle & in-market audience targeting',
      'Amazon OTT / streaming TV ads',
      'Cross-channel attribution reporting',
    ],
  },
  {
    title: 'Listing Optimization',
    body: 'We write and optimize every element of your product detail pages to maximize organic ranking, click-through rate, and conversion rate.',
    bullets: [
      'SEO-driven title optimization',
      'Bullet point copywriting',
      'Product description & A+ Content creation',
      'Backend search term optimization',
      'Keyword indexing verification',
      'Category & browse node optimization',
      'Subject matter & attribute completion',
    ],
  },
  {
    title: 'A+ Content & Brand Story',
    body: 'Premium enhanced brand content that builds trust, communicates value, and drives higher conversion rates across your catalog.',
    bullets: [
      'A+ Content design & copywriting',
      'Premium A+ Content (where eligible)',
      'Brand Story modules',
      'Comparison chart modules',
      'Cross-sell & upsell content strategy',
      'Image & infographic creation',
    ],
  },
  {
    title: 'Amazon Storefront Design',
    body: 'Custom Amazon Brand Store design that showcases your full catalog, tells your brand story, and serves as a landing page for external and internal traffic.',
    bullets: [
      'Multi-page storefront architecture',
      'Custom imagery & lifestyle visuals',
      'Seasonal & promotional page updates',
      'Storefront traffic analytics',
      'Branded URL setup & management',
    ],
  },
  {
    title: 'Product Launch Strategy',
    body: 'End-to-end launch playbooks that get new products ranked, reviewed, and generating revenue from day one.',
    bullets: [
      'Pre-launch keyword & competitive research',
      'Launch pricing & coupon strategy',
      'Initial review generation (Vine program)',
      'Aggressive PPC launch campaigns',
      'External traffic strategy (social, email)',
      'Ranking velocity monitoring',
    ],
  },
  {
    title: 'Full Account Management',
    body: 'We operate as an extension of your team, handling the day-to-day operations of your Amazon Seller Central or Vendor Central account.',
    bullets: [
      'Seller Central & Vendor Central management',
      'Case management & support escalation',
      'Inventory health monitoring & alerts',
      'Suppressed & stranded inventory resolution',
      'Account health & policy compliance',
      'Flat file & bulk upload management',
      'FBA shipment creation & coordination',
    ],
  },
  {
    title: 'Inventory & Supply Chain',
    body: 'Forecasting, replenishment planning, and FBA logistics management to keep your products in stock and avoid costly storage fees.',
    bullets: [
      'Demand forecasting & replenishment planning',
      'FBA vs FBM strategy',
      'Inbound shipment management',
      'FNSKU labeling & compliance',
      'Aged inventory & removal order management',
      'Storage fee optimization',
      'Multi-warehouse coordination',
    ],
  },
  {
    title: 'Brand Protection & Compliance',
    body: 'Proactive monitoring and enforcement to protect your brand, listings, and Buy Box from unauthorized sellers, counterfeiters, and hijackers.',
    bullets: [
      'Amazon Brand Registry setup & management',
      'Amazon Transparency program enrollment',
      'Counterfeit & hijacker monitoring',
      'IP violation & cease-and-desist filing',
      'MAP enforcement strategy',
      'Unauthorized seller removal',
      'Review abuse monitoring',
    ],
  },
  {
    title: 'International Expansion',
    body: "Launch and manage your products across Amazon's global marketplaces — including Canada, UK, EU, and beyond.",
    bullets: [
      'Marketplace assessment & entry strategy',
      'Listing translation & localization',
      'International FBA setup (FBA Export, Pan-EU, EFN)',
      'FNSKU & compliance labeling for EU/UK',
      'VAT & regulatory compliance guidance',
      'Currency & pricing strategy',
      'Cross-border advertising management',
    ],
  },
  {
    title: 'Amazon SEO & Organic Ranking',
    body: 'Data-driven organic ranking strategy to get your products on page one and keep them there.',
    bullets: [
      'Keyword tracking & rank monitoring',
      'Search volume & relevancy analysis',
      'Competitor keyword gap analysis',
      'Indexing audits & troubleshooting',
      'Organic vs paid ranking strategy',
      'Category ranking optimization',
    ],
  },
  {
    title: 'Reporting & Analytics',
    body: 'Custom performance dashboards and regular reporting so you always know exactly where your business stands and where the growth opportunities are.',
    bullets: [
      'Weekly & monthly performance reports',
      'Gross revenue, ad spend, & ROAS tracking',
      'Per-SKU unit sales & profitability analysis',
      'Market share & competitive benchmarking',
      'Advertising attribution modeling',
      'Custom KPI dashboards',
      'Quarterly business reviews',
    ],
  },
  {
    title: 'Amazon Promotions & Deals',
    body: "Strategic use of Amazon's promotional tools to drive volume, increase Best Seller Rank, and win seasonal shopping events.",
    bullets: [
      'Lightning Deals & 7-Day Deals',
      'Coupons & percentage-off promotions',
      'Prime Day & Black Friday / Cyber Monday planning',
      'Subscribe & Save setup & optimization',
      'Social media promo codes',
      'Brand Tailored Promotions',
    ],
  },
  {
    title: 'Review & Reputation Management',
    body: 'Build and maintain a healthy review profile that drives buyer confidence and conversion.',
    bullets: [
      'Amazon Vine program management',
      'Request a Review automation',
      'Negative review monitoring & response strategy',
      'Product insert compliance',
      'Seller feedback management',
      'Review velocity tracking',
    ],
  },
  {
    title: 'Amazon Posts & Brand Content',
    body: 'Social-style content published directly on Amazon to drive discovery, engagement, and follower growth for your brand.',
    bullets: [
      'Amazon Posts content calendar',
      'Lifestyle imagery creation',
      'Brand Follow growth strategy',
      'Manage Your Experiments (A/B testing)',
      'Amazon Live strategy (where applicable)',
    ],
  },
  {
    title: 'External Traffic & Attribution',
    body: 'Drive qualified off-Amazon traffic to your listings using Amazon Attribution to measure and optimize external marketing efforts.',
    bullets: [
      'Amazon Attribution setup & tagging',
      'Google Ads → Amazon traffic campaigns',
      'Social media → Amazon funnels',
      'Email marketing → Amazon campaigns',
      'Influencer & affiliate coordination',
      'Brand Referral Bonus optimization',
    ],
  },
]

const processSteps = [
  {
    title: 'Discovery & Audit',
    body: 'We perform a comprehensive audit of your current Amazon presence — listings, advertising, brand content, account health, and competitive positioning — to identify gaps and opportunities.',
  },
  {
    title: 'Strategy Development',
    body: 'Based on the audit, we build a custom roadmap covering listing optimization, advertising structure, content strategy, and growth targets tailored to your brand goals and budget.',
  },
  {
    title: 'Implementation',
    body: 'We execute the strategy — optimizing listings, building campaigns, creating A+ Content, setting up brand protections, and aligning inventory operations.',
  },
  {
    title: 'Optimization & Scaling',
    body: 'Continuous optimization of bids, keywords, content, and strategy based on live performance data. We adjust weekly and report regularly so you see every dollar at work.',
  },
  {
    title: 'Expansion',
    body: 'Once your core market is performing, we identify new opportunities — new products, international marketplaces, new ad types, and incremental channels — to scale your Amazon business.',
  },
]

const metrics = [
  { num: '$4.2M+', label: 'Amazon revenue managed annually' },
  { num: '6.8x', label: 'Average ROAS across clients' },
  { num: '140%', label: 'Average YoY revenue growth' },
  { num: '5', label: 'Amazon marketplaces managed' },
]

const testimonials = [
  {
    quote:
      "Rico Retail completely transformed our Amazon business. They took over our ad campaigns and within 90 days we saw a 3x increase in revenue while cutting our ACOS nearly in half. They understand the platform at a level that's hard to find — we trust them with everything.",
    author: 'Jason Stone',
    role: 'Founder & CEO, Hustle Butter Deluxe',
  },
  {
    quote:
      "We came to Rico Retail with a product that was barely selling on Amazon. They rebuilt our listings from the ground up, launched a PPC strategy that actually made sense, and handled our expansion into Amazon Canada. We went from maybe 50 units a month to consistently moving 800+. They're the real deal.",
    author: 'Danny Lehr',
    role: 'Co-Founder, Hustle Butter Deluxe',
  },
]

const caseStudies = [
  {
    label: 'E-Commerce — Health & Beauty',
    title: 'Hustle Butter Deluxe — Scaling a Tattoo Aftercare Brand on Amazon US & Canada',
    paragraphs: [
      'Hustle Butter Deluxe came to us managing their own Amazon advertising with limited PPC experience. We restructured their entire ad account, optimized all product listings with keyword-rich copy and new A+ Content, enrolled the brand in Amazon Transparency to combat counterfeits, and expanded operations into Amazon Canada.',
      'We manage weekly performance reporting across all SKUs (5oz, 1oz, Bubbles, 2 Packs, Tattoo Lotion, Stick, Wraps, Mini Kit, Sunscreen, Sunscreen Stick), monitor inventory health, coordinate FBA shipments including FNSKU labeling, and run seasonal promotional campaigns around Prime Day, Black Friday, and key tattoo-industry events.',
    ],
    stats: [
      { val: '215%', desc: 'Revenue increase in first 12 months' },
      { val: '22% → 11%', desc: 'ACOS reduction' },
      { val: '$0 → $380K', desc: 'Amazon Canada annual revenue' },
      { val: '14 SKUs', desc: 'Actively managed & optimized' },
    ],
  },
  {
    label: 'E-Commerce — Baby & Personal Care',
    title: 'ZOEY Naturals — Listing Optimization & Review Growth Strategy',
    paragraphs: [
      'ZOEY Naturals needed a complete overhaul of their Amazon product listings to compete in the crowded baby care category. We rewrote all titles and bullet points with SEO-driven copy, added FSA/HSA eligibility language where applicable, built A+ Content modules, and implemented a review request automation strategy that doubled their monthly review velocity.',
    ],
    stats: [
      { val: '92%', desc: 'Increase in organic impressions' },
      { val: '2.4x', desc: 'Review velocity improvement' },
      { val: '18%', desc: 'Conversion rate lift' },
    ],
  },
  {
    label: 'E-Commerce — Natural Skincare',
    title: 'Absolutely Natural — Amazon SEO & Catalog Expansion',
    paragraphs: [
      'We partnered with Absolutely Natural to optimize their Amazon catalog for organic search visibility, implement a backlink and external traffic strategy through Amazon Attribution, and expand their product line presence on the platform. Ongoing management includes keyword rank tracking, competitive analysis, and Google Shopping review syndication.',
    ],
    stats: [
      { val: 'Page 1', desc: 'Rankings for 12+ primary keywords' },
      { val: '67%', desc: 'Organic traffic increase' },
      { val: '3.1x', desc: 'Brand Referral Bonus ROI' },
    ],
  },
]

const expertise = [
  {
    title: 'Amazon-Native Expertise',
    body: "We live inside Seller Central and Vendor Central every single day. We understand the nuances of Amazon's algorithm, advertising console, and constantly evolving policies — not just the theory, but the real-world execution.",
  },
  {
    title: 'Full-Stack Capability',
    body: 'Advertising, SEO, content, design, inventory, compliance, and international expansion — all under one roof. No need to coordinate between five different vendors. One team, one strategy, complete accountability.',
  },
  {
    title: 'Data-Driven Decisions',
    body: 'Every decision we make is backed by data. We build custom reporting dashboards, track per-SKU profitability, and optimize based on real numbers — not gut feelings. Weekly reports and quarterly business reviews keep you informed.',
  },
  {
    title: 'Category Experience',
    body: "We've managed brands across health & beauty, personal care, baby products, skincare, tattoo aftercare, and more. We understand category-specific dynamics, seasonal trends, and competitive landscapes.",
  },
  {
    title: 'Brand Protection Focus',
    body: 'From Amazon Transparency to IP enforcement, we proactively protect your brand from counterfeiters, hijackers, and unauthorized sellers. Your brand equity is safe with us.',
  },
  {
    title: 'Transparent Communication',
    body: 'No black-box management. You get full visibility into every campaign, every optimization, and every dollar spent. We communicate proactively and treat your business like our own.',
  },
]

const platforms = [
  'Amazon Seller Central',
  'Amazon Vendor Central',
  'Amazon Advertising Console',
  'Amazon DSP',
  'Amazon Brand Registry',
  'Amazon Transparency',
  'Amazon Attribution',
  'Amazon Vine',
  'Helium 10',
  'Jungle Scout',
  'Keepa',
  'DataDive',
  'Brand Analytics',
  'Amazon Posts',
  'Manage Your Experiments',
  'FBA Revenue Calculator',
]

export default function AmazonServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Amazon services" title="Full-service Amazon growth & management">
        <p>
          We help brands launch, scale, and dominate on Amazon. From listing
          optimization and PPC advertising to full account management and
          international expansion — Rico Retail is your end-to-end Amazon
          partner.
        </p>
      </PageIntro>

      <SectionIntro
        eyebrow="What we do"
        title="Amazon service offerings"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          A comprehensive suite of Amazon services built around maximizing
          revenue, protecting your brand, and scaling efficiently.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <FadeIn key={s.title}>
              <article className="rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  {s.title}
                </h3>
                <p className="mt-4 text-base text-neutral-600">{s.body}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <SectionIntro
        eyebrow="How we work"
        title="Our process"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          A structured, transparent process designed to deliver results from
          day one and compound growth over time.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {processSteps.map((step) => (
            <GridListItem key={step.title} title={step.title}>
              {step.body}
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Results"
          title="Proven Amazon performance"
          invert
        >
          <p>Real numbers from real brands we manage.</p>
        </SectionIntro>
        <Container className="mt-16">
          <FadeInStagger className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <Border
                key={m.label}
                as={FadeIn}
                position="left"
                invert
                className="flex flex-col-reverse pl-8"
              >
                <p className="mt-2 text-base text-neutral-400">{m.label}</p>
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {m.num}
                </p>
              </Border>
            ))}
          </FadeInStagger>
        </Container>
        <Container className="mt-20">
          <FadeIn>
            <h3 className="font-display text-base font-semibold text-white">
              What our clients say
            </h3>
          </FadeIn>
          <FadeInStagger className="mt-10 grid gap-12 lg:grid-cols-2">
            {testimonials.map((t) => (
              <FadeIn key={t.author}>
                <figure>
                  <blockquote className="font-display text-2xl font-medium tracking-tight text-white [text-wrap:balance] sm:text-3xl">
                    <p className="before:content-['“'] after:content-['”']">
                      {t.quote}
                    </p>
                  </blockquote>
                  <figcaption className="mt-8 text-sm">
                    <span className="font-semibold text-white">{t.author}</span>
                    <span className="mt-2 block text-neutral-400">{t.role}</span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </div>

      <SectionIntro
        eyebrow="Success stories"
        title="Case studies"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Detailed examples of how we&apos;ve driven measurable results for
          Amazon brands.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="space-y-12">
          {caseStudies.map((cs) => (
            <FadeIn key={cs.title}>
              <article className="rounded-3xl p-6 ring-1 ring-neutral-950/5 sm:p-8">
                <p className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                  {cs.label}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-neutral-950 [text-wrap:balance]">
                  {cs.title}
                </h3>
                {cs.paragraphs.map((p, i) => (
                  <p key={i} className="mt-6 text-base text-neutral-600">
                    {p}
                  </p>
                ))}
                <div className="mt-8 grid gap-8 border-t border-neutral-950/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                  {cs.stats.map((st) => (
                    <div key={st.desc}>
                      <p className="font-display text-2xl font-semibold text-neutral-950">
                        {st.val}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <SectionIntro
        eyebrow="Expertise"
        title="Why Rico Retail"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          What sets us apart from other Amazon agencies and freelancers.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {expertise.map((e) => (
            <GridListItem key={e.title} title={e.title}>
              {e.body}
            </GridListItem>
          ))}
        </GridList>
      </Container>

      <SectionIntro
        eyebrow="Platforms & tools"
        title="Tools & platforms we work with"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          The Amazon ecosystem tools and platforms we use daily to manage and
          grow your business.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {platforms.map((p) => (
            <FadeIn key={p}>
              <div className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-neutral-950 ring-1 ring-neutral-950/5">
                {p}
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-24 text-center sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
            Ready to scale on Amazon?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            Whether you&apos;re launching your first product or managing a
            seven-figure catalog, we&apos;ll build a custom strategy to grow your
            Amazon business profitably.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Button href="mailto:rico@ricoretailmedia.com?subject=Free%20Amazon%20Audit">
              Get a free Amazon audit
            </Button>
            <Link
              href="/contact"
              className="text-sm font-semibold text-neutral-950 transition hover:text-neutral-600"
            >
              Contact form <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  )
}
