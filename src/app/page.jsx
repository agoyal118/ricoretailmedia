import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageAmazon from '@/images/homeAmazon.webp'
import logoDude from '@/images/clients/logoDudeWhite.webp'
import logoHBD from '@/images/clients/logoHBDTransparent.png'
import logoRhone from '@/images/clients/logoRhoneWhite.png'
import logoFillos from '@/images/clients/logoFillos.svg'
import logoFDC from '@/images/clients/logoFDCDark.webp'
import logoAN from '@/images/clients/logoANWhite.png'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['DudeWipes', logoDude],
  ['Rhone', logoRhone],
  ['Hustle Butter', logoHBD],
  [`Fillo's`, logoFillos],
  ['Fire Department Coffee', logoFDC],
  ['Absolutely Natural', logoAN],
]

const traditionalRetailers = [
  ['Walmart', logoDude],
  ['Target', logoDude],
  ['Kroger', logoDude],
  [`Sam's Club`, logoDude],
  ['Meijer', logoDude],
  ['Costco', logoDude],
]

const digitalRetailers = [
  ['Amazon', logoDude],
  ['TikTok', logoDude],
  ['GoPuff', logoDude],
  ['Instacart', logoDude],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We work with great brands
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized className="w-24" />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Marketplaces() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex justify-center gap-x-8">
          <h3 className="text-center font-display text-lg tracking-wider text-white sm:text-left">
            Retailers and Marketplaces Supported
          </h3>
        </FadeIn>
        <FadeIn className="mt-12 flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Traditional Retailers
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {traditionalRetailers.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <p className="text-white">{client}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
        <FadeIn className="mt-12 flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Digital Retailers
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {digitalRetailers.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <p className="text-white">{client}</p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our expert solutions in PPC and display advertising, along with
          comprehensive marketplace management, ensure your business stays ahead
          in a competitive market.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageAmazon}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="PPC & Display Advertising">
              Maximize your brand's visibility and drive targeted traffic with
              our expertly managed PPC and display advertising campaigns. We use
              data-driven strategies to optimize your ad spend and achieve
              measurable results.
            </ListItem>
            <ListItem title="Marketplace Management">
              Streamline your marketplace operations and boost sales with our
              comprehensive marketplace management services. From product
              listing optimization to performance tracking, we handle all
              aspects to ensure your brand excels on major e-commerce platforms.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            The eRetail Partner To High Potential Brands
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We operate as an extension of your team to help service and grow
            your business where it needs help today and can scale with you as
            your business expands.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Marketplaces />
      <Services />

      <ContactSection />
    </>
  )
}
