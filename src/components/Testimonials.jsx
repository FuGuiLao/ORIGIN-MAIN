import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'
import seal_bh from '@/images/seal_bh.png'
import seal_casc from '@/images/seal_casc.png'
import seal_doj from '@/images/seal_doj.png'
import seal_ic from '@/images/seal_ic.png'
import seal_la from '@/images/seal_la.png'
import seal_state from '@/images/seal_state.png'

const testimonials = [
  [
    {
      content:
        'Origin investigators helped us to develop a defense strategy based on their law enforcement perspective. Our client was facing 40 years and took a single misdemeanor plea.',
      author: {
        name: 'Antonio Littel',
        role: 'Attorney',
        image: avatarImage3,
      },
    },
    {
      content:
            'Origin’s digital forensics team analyzed over 40 employee computers and were able to locate evidence of corporate espionage and theft of trade secrets.',
      author: {
        name: 'Lynn Nolan',
        role: 'Pro-Per Defendant',
        image: avatarImage4,
      },
    },
    {
      content:
        'We have used several process service companies that promise results, but if we really need someone served, we always call Origin. They have the experience to quickly locate and serve even the most difficult-to-serve subjects.',
      author: {
        name: 'Krista Prosacco',
        role: 'Senior Litigator',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'Unlike most private investigators, Origin has a diverse team and always finds the right person for each assignment. This can make the difference when working challenging cases.',
      author: {
        name: 'Cameron Considine',
        role: 'Government Agency Representative',
        image: avatarImage7,
      },
    },
    {
      content:
        'Origin’s case review and accident reconstruction decisively proved our client was not at fault. LAPD agreed and promptly amended their report.',
       author: {
        name: 'Regina Wisoky',
        role: 'Partner',
        image: avatarImage11,
      },
    },
    {
      content:
        'We often use Origin for our low-income clients through court appointment and they always provide a very high quality of service.',
      author: {
        name: 'Vernon Cummerata',
        role: 'In-House Council',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'Our client was facing a felony DUI. During the initial case review, the investigator noticed significant issues with the field sobriety tests and the case was dismissed.',
      author: {
        name: 'Steven Hackett',
        role: 'Senior Attorney',
        image: avatarImage5,
      },
    },
    {
      content:
        'Origin always seems to have the best data. Before, we were always getting outdated subject information. I don’t know how they do it, but their addresses and other contact information is always spot-on and saves us a ton of time.',
      author: {
        name: 'Carla Schoen',
        role: 'Business Owner',
        image: avatarImage10,
      },
    },
    {
      content:
        'Origin was able to quickly recover our client’s rare Porsche out of state. They liaised with several law enforcement agencies and navigated a super complex case. ',
      author: {
        name: 'Leah Kiehn',
        role: 'Attorney',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-zinc-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-zinc-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-zinc-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-zinc-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-zinc-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-900">
          Some kind words from our clients...
        </h2>
     <div className="mx-auto mt-4 mb-4 grid max-w-lg grid-cols-4 items-center gap-x-7 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src={seal_bh}
            alt=""
            width={158}
            height={158}
          />
          <Image
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src={seal_casc}
            alt=""
            width={158}
            height={158}
          />
          <Image
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src={seal_doj}
            alt=""
            width={158}
            height={158}
          />
          <Image
            className="col-span-2 max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={seal_ic}
            alt=""
            width={158}
            height={158}
          />
          <Image
            className="col-span-2  max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={seal_la}
            alt=""
            width={158}
            height={158}
          />
          <Image
            className="col-span-2  max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={seal_state}
            alt=""
            width={158}
            height={158}
          />
        </div>
        <p className="mt-4 text-lg tracking-tight text-zinc-600">
          We have worked with a variety of clients including law firms, government agencies, corporations, and high-profile individuals. Hear is what
          they had to say about our agency.
        </p>
      </Container>
      <Expandable>
        {({ isExpanded }) => (
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={isExpanded ? undefined : 'hidden lg:list-item'}
                >TEST6
                  <ul role="list">
                    {column
                      .slice(0, isExpanded ? undefined : 2)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && 'hidden lg:list-item',
                            testimonialIndex === 1 && 'lg:mt-8',
                            testimonialIndex > 1 && 'mt-8'
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
              
            </ul>
            <Expandable.Button>Read more testimonials</Expandable.Button>

          </>
        )}
      </Expandable>
    </section>
  )
}
