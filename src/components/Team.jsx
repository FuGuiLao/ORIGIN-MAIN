import Image from 'next/image'

import { Expandable } from '@/components/Expandable'
import { useState } from "react"
import teamImage1 from '@/images/avatars/avatar-brant.png'
import teamImage2 from '@/images/avatars/avatar-brant.png'



const people = [
  {
    name: 'Joshua Passas',
    role: 'Director / Investigation',
    image: teamImage1,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Yi Min',
    role: 'Director / Intelligence',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Victoria Vannoy',
    role: 'Chief Analyst',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Jaclyn Wise',
    role: 'Lead Case Manager',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Temp Person',
    role: 'Director / Client Relations',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Temp Person',
    role: 'Director / Marketing',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Steve Jones3',
    role: 'Investigator',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  // More people...
]

export function Team() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <Expandable>
            {({ isExpanded }) => (
            <>
        <div>
                        <Expandable.Button onClick={toggleExpand}>Meet our leadership</Expandable.Button>
            <div style={{ display: isExpanded ? "block" : "none" }}>
                <section id="team" aria-labelledby="author-title" className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">

<div className="bg-white py-0 sm:py-0">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                 

            
                    <ul
                        role="list"
                        className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
                    >
                        {people.map((person) => (
                            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                                <Image className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.image} alt="" />
                                <div className="flex-auto">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-900">{person.name}</h3>
                                    <p className="text-base leading-7 text-zinc-600">{person.role}</p>
                                    <p className="mt-6 text-base leading-7 text-zinc-600">{person.bio}</p>
                                </div>
                            </li>
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
