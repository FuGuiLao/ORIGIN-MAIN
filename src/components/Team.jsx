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
    bio: 'Joshua Passas serves as the director of operations for the investigative division of Origin. In that capacity, he provides case oversight and supervises the associated administrative staff.',
    content: 'Joshua Passas serves as the director of operations for the investigative division of Origin. In that capacity, he provides case oversight and supervises the investigative staff. \nAs a veteran law enforcement officer with experience working with the Fontana Police Department, Las Vegas Metropolitan Police Department, and the Nevada Department of Corrections, Joshua brings a high level of institutional management skills coupled with extensive practical knowledge of law enforcement and the investigative process.<br>Throughout his career, Joshua has handled countless major criminal investigations including fraud, sexual assault, fatal DUI collisions, and murder. He also served as a Nevada Peace Officer Standards and Training (POST) instructor and a field training officer with the Las Vegas Police Department.<br>While with the Fontana Police Department, Joshua excelled in the area of DUI enforcement, earning several awards from Mothers Against Drunk Driving (MAAD) including multiple Double Century Awards (200+ DUI Arrests) and the top DUI Arresting Officer Award for San Bernardino County Drug Recognition Expert (DRE) and certified in accident reconstruction as member of the Major Accident Investigation Team.<br>Joshua holds a Masters Degree of Advanced Study in Criminology, Law, and Society from the University of California, Irvine. He also attained a Bachelor of Science Degree in Criminal Justice Management from Liberty University, where he graduated Magna Cum Laude.',
  },

  {
    name: 'Victoria Vannoy',
    role: 'Director / Intelligence',
    image: teamImage3,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    content: 'test3',
  },
  {
    name: 'Yi Min',
    role: 'Director / Information Technology',
    image: teamImage6,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    content: 'test6',
  },
  {
    name: 'Vanessa Sarco',
    role: 'Administration / Accounting',
    image: teamImage7,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
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
