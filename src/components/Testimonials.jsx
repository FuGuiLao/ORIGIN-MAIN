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

const testimonials = [
  [
    {
      content:
        'Morbi et sapien iaculis, vulputate magna vitae, convallis purus. Integer placerat et enim non accumsan. Aenean nec malesuada turpis.',
      author: {
        name: 'Antonio Littel',
        role: 'Attorney',
        image: avatarImage3,
      },
    },
    {
      content:
        'Mauris aliquet, risus vulputate laoreet aliquet, neque ipsum bibendum orci, quis congue ligula nisl eget turpis.',
      author: {
        name: 'Lynn Nolan',
        role: 'Pro-Per Defendant',
        image: avatarImage4,
      },
    },
    {
      content:
        'Aenean nec malesuada turpis. Integer tincidunt dignissim neque sit amet fringilla. Curabitur nisi neque.',
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
        'Integer tincidunt dignissim neque sit amet fringilla. Curabitur nisi neque, convallis ut sollicitudin vel, fermentum eget ipsum.',
      author: {
        name: 'Cameron Considine',
        role: 'Entrepreneur',
        image: avatarImage7,
      },
    },
    {
      content:
        'Cras eu ullamcorper velit. Donec eu quam in dolor pharetra vestibulum et eu sem.',
      author: {
        name: 'Regina Wisoky',
        role: 'Partner',
        image: avatarImage11,
      },
    },
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet.',
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
        'Integer tincidunt dignissim neque sit amet fringilla. Curabitur nisi neque, convallis ut sollicitudin vel, fermentum eget ipsum.',
      author: {
        name: 'Steven Hackett',
        role: 'Senior Attorney',
        image: avatarImage5,
      },
    },
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet.',
      author: {
        name: 'Carla Schoen',
        role: 'Business Owner',
        image: avatarImage10,
      },
    },
    {
      content:
        'Integer tincidunt dignissim neque sit amet fringilla. Curabitur nisi neque.',
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
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from our clients...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          We have worked with a variety of clients including law firms, government agencies, high-profile individuals, and companies. Hear is what
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
                >
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
