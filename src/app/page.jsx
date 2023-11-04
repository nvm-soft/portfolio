import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/laptop.jpg'

import centz from '@/images/clients/99centz.png'
import automate from '@/images/clients/automate.png'
import coinramp from '@/images/clients/coinramp.png'
import collegeGrid from '@/images/clients/college-grid.png'
import esc from '@/images/clients/esc.png'
import thymbol from '@/images/clients/thymbol.png'
import circlenomy from '@/images/clients/circlenomy.png'
import loadboard from '@/images/clients/loadboard.jpeg'

import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['99centz', centz],
  ['automate', automate],
  ['coinramp', coinramp],
  ['the-collage-grid', collegeGrid],
  ['esc', esc],
  ['thymbol', thymbol],
  ['circlenomy', circlenomy],
  ['loadboard260', loadboard]
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-primary py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;ve worked with Dozens of amazing people
          </h2>
          <div className="h-px flex-auto bg-secondary" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    className="w-28"
                    src={logo}
                    alt={client}
                    unoptimized
                  />
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
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-primary/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-primary">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-off-secondary" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-primary">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-off-black">
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
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like NextJS and Tailwindcss.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means building a cutting edge technology stack that will help to grow your business.
            </ListItem>
            <ListItem title="Custom content management">
              At Nvm Soft we understand the importance of having a robust and
              customised Software. That&apos;s why we use NodeJS and ReactJS to build scalable web applications.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a software development firm working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-primary [text-wrap:balance] sm:text-7xl">
            Software development firm based on Bangladesh
          </h1>
          <p className="mt-6 text-xl text-secondary">
            We are a Software development firm working at the intersection of
            design and technology. It’s a really busy intersection though — a
            lot of our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'The Open Collage', logo: collegeGrid }}
      >
        NVM Soft exceeded expectations with their work on a complex project involving mapping systems and unfamiliar tools like Leaflet. They quickly taught themselves and improvised well in areas where the designs were unclear and performance issues arose. They even solved a challenge where we had to render tens of thousands of images onscreen without crashing the browser. NVM Soft&apos;s communication was outstanding, sending numerous video updates to keep us informed. They did all of this while working through school, making their achievements even more impressive. Highly recommended with a 10/10 rating.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
