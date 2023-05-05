import Image from 'next/image'

import { Expandable } from '@/components/Expandable'

import teamImage2 from '@/images/avatars/avatar-passas.png'
import teamImage3 from '@/images/avatars/avatar-vannoy.png'
import teamImage4 from '@/images/avatars/avatar-wise.png'
import teamImage5 from '@/images/avatars/avatar-temp.png'
import teamImage6 from '@/images/avatars/avatar-min.png'
import teamImage7 from '@/images/avatars/avatar-sarco.png'

import React, { useState } from 'react';

import TeamMember from './TeamMember'

const people = [
  {
    name: 'Joshua Passas',
    role: 'Director / Investigation',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    content: 'test2',
  },

  {
    name: 'Victoria Vannoy',
    role: 'Director / Intelligence',
    image: teamImage3,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
    content: 'test3',
  },
  {
    name: 'Jaclyn Wise',
    role: 'Director / Case Management',
    image: teamImage4,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
    content: 'test4',
  },
  {
    name: 'Temp Person',
    role: 'Director / Client Relations',
    image: teamImage5,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
    content: 'test5',
  },
  {
    name: 'Yi Min',
    role: 'Director / Information Technology',
    image: teamImage6,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
    content: 'test6',
  },
  {
    name: 'Vanessa Sarco',
    role: 'Administration / Accounting',
    image: teamImage7,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
    content: 'test7',
  },
  // More people...
]

export function Team() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [open, setOpen] = useState(false);

  return (
    <Expandable>
      {({ isExpanded }) => (
        <>
          <div>
            <Expandable.Button onClick={toggleExpand}>Meet our leadership team</Expandable.Button>
            <div style={{ display: isExpanded ? "block" : "none" }}>
              <section id="team" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
                <div className="bg-white py-0 sm:py-0">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <ul
                      role="list"
                      className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                    >
                      {people.map((person, index) => (
                        <TeamMember key={`member-${index}`} member={person} />
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </Expandable>
  )
}
