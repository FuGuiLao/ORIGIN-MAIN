import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import criminalImage from '@/images/screencasts/criminal-investigations.jpg'
import surveillanceImage from '@/images/screencasts/surveillance.jpg'
import locatesImage from '@/images/screencasts/difficult-locates.jpg'
import forensicsImage from '@/images/screencasts/digital-forensics.jpg'

const videos = [
  {
    title: 'Criminal Investigations',
    description:
      'Origin can provide detailed case review and complete parallel investigations from pre-arrest to trial, including appeals.',
     image: criminalImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Surveillance',
    description:
      'Our operatives are diverse, experienced, and highly skilled in contact and non=contact surveillance.',
     image: surveillanceImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Difficult Locates',
    description:
      'Origin can find subjects who don\'t want to be found, through data-driven analysis and field investigations.',
     image: locatesImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Digital Forensics',
    description:
      'Origin has experts on staff in data forensics, to analyze devices and provide data recovery and retention services.',
     image: forensicsImage,
    runtime: { minutes: 23, seconds: 25 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
          Investigation
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          With our diverse team and uncommon resources, it is always our goal to be your primary investigative agency.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          We provide comprehensive services and have the investigative and administrative staff to respond quickly and get results, even where others have failed. No task is too simple or case too complex.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-y-10 gap-x-8 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-0 shadow-lg"
                
              >
              
                  <Image  className="relative flex h-44 items-center justify-center rounded-2xl px-0 shadow-lg" src={video.image} alt="" unoptimized />
              
              </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
