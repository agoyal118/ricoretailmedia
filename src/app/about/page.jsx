import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageConnorMirabelli from '@/images/team/connor-mirabelli.png'
import imageEnricoMirabelli from '@/images/team/enrico-mirabelli.jpg'
import imageMattMarneris from '@/images/team/matt-marneris.jpg'
import imageArpitGoyal from '@/images/team/arpit-goyal.png'
import { loadCaseStudies } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Aligned Goals" invert>
            We have incentive driven compensation goals based on client results
            and goal completion.
          </GridListItem>
          <GridListItem title="Transparency" invert>
            We prioritize honesty and openness in all our client interactions.
            You can always expect clear communication and full transparency from
            our team.
          </GridListItem>
          <GridListItem title="Proactive Approach" invert>
            We anticipate challenges and opportunities, taking a proactive
            approach to ensure your success.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Enrico Mirabelli',
        role: 'Founder / CEO',
        image: { src: imageEnricoMirabelli },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Matt Marneris',
        role: 'Business Relations',
        image: { src: imageMattMarneris },
      },
      {
        name: 'Connor Mirabelli',
        role: 'Account Coordinator',
        image: { src: imageConnorMirabelli },
      },
      {
        name: 'Arpit Goyal',
        role: 'Content Specialist',
        image: { src: imageArpitGoyal },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let caseStudies = (await loadCaseStudies()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We are more than just a team—we are a partnership of innovative
            minds, working together to bring your vision to life. Our diverse
            expertise allows us to offer comprehensive solutions tailored to
            meet your unique needs.
          </p>
          <p>
            From the initial consultation to the final implementation, we
            prioritize open communication, transparency, and a deep
            understanding of your goals. Our collaborative method ensures that
            every project benefits from the collective creativity and insights
            of our dedicated professionals. We thrive on building strong,
            lasting relationships with our clients, founded on trust and mutual
            respect.
          </p>
          <p>
            Together, we can achieve extraordinary results. Join us on this
            journey of creativity, innovation, and success.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="4" label="Team members" />
          <StatListItem value="7" label="Clients" />
          <StatListItem value="3" label="Best selling products" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Case Studies"
        intro="Our team of experienced designers and media buyers have just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={caseStudies}
      />

      <ContactSection />
    </>
  )
}
