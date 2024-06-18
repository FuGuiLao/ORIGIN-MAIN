import { Expandable } from '@/components/Expandable'

import teamImage2 from '@/images/avatars/avatar-passas.png'
import teamImage3 from '@/images/avatars/avatar-enriquez.png'
import teamImage4 from '@/images/avatars/avatar-cheng.png'
import teamImage5 from '@/images/avatars/avatar-temp.png'
import teamImage6 from '@/images/avatars/avatar-min.png'
import teamImage7 from '@/images/avatars/avatar-sarco.png'
import teamImage8 from '@/images/avatars/avatar-popham.png'
import teamImage9 from '@/images/avatars/avatar-new.png'

import React, { useState } from 'react';

import TeamMember from './TeamMember'
import HeyflowSlideover from './HeyflowSlideover'

const people = [
  {
    name: 'Joshua Passas',
    role: 'Director / Investigation Division',
    image: teamImage2,
    bio: 'Joshua provides case oversight and supervises our investigative staff. As a veteran law enforcement officer, Joshua brings institutional management skills and extensive practical knowledge of law enforcement and the investigative process.',
  },

  {
    name: 'Melissa Enriquez',
    role: 'Director / Intelligence Division',
    image: teamImage3,
    bio: 'Melissa serves as our lead analyst and provides strategic oversight of our intelligence staff. As a veteran law enforcment officer and intelligence professional, her expertise, resources, and attention to detail provide unmatched insight into our cases.',
  },
  {
    name: 'Vanessa Sarco',
    role: 'Director / Case Management Division',
    image: teamImage7,
    bio: 'Vanessa supervises our case management staff, and oversees scheduling, travel planning, and client accounting. Her experience in business administration and customer service is critical to providing our clients with a high level of support.',
  },
  {
    name: 'Abram Popham',
    role: 'Director / Client Relations Division',
    image: teamImage8,
    bio: 'Abram connects our diverse client base with our comprehensive investigative resources, and supervisors our marketing efforts and client relations personnel. Abram is a professional account executive, but also has experience as a law enforcment officer.',
  },
  {
    name: 'Yi Min',
    role: 'Director / Technology Services Division',
    image: teamImage6,
    bio: 'Yi supervises our technical services and data forensics staff. His professional law enforcement and military experience, coupled with advanced degrees in technology, has provided him with a broad range of qualifications and skills.',
  },
    {
    name: 'Lok Cheng',
    role: 'Director / Administrative Services Division',
    image: teamImage4,
    bio: 'Lok serves as our admin director and supervises our general office staff. She coordinates human resources, recruiting, and strategic planning initiatives. Lok has a Masters of Business Administration and undergraduate degree from The University of Amsterdam.',
  },
  //  {
   // name: 'Join our Team',
   // role: 'Submit an Application',
    // image: teamImage9,
   // bio: 'Origin is always looking for talented individuals to join our growing team. We are actively recruiting investigators with law enforcement and/or fraud investigation experience, as well as intelligence analysts, case managers, and client relations professionals.',
 // },
  // More people...
]

export function Team() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openSlideover, setOpenSlideover] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
                        // <TeamMember key={`member-${index}`} member={person} setOpenSlideover={setOpenSlideover}/>
                        <TeamMember key={`member-${index}`} member={person}/>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <HeyflowSlideover open={openHeyflow} onClose={() => setOpenHeyflow(false)} title="Join our Team" flowId="origin-job-application" /> */}
        </>
      )}
    </Expandable>
  )
}
