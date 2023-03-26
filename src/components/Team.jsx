import Image from 'next/image'

import teamImage1 from '@/images/avatars/avatar-brant.png'
import teamImage2 from '@/images/avatars/avatar-brant.png'

import { Expandable } from '@/components/Expandable'

const people = [
  {
    name: 'John Smith',
    role: 'Investigator',
    image: 'teamImage1',
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Steve Jones',
    role: 'Investigator',
    image: 'teamImage2',
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  // More people...
]

export function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
      <Expandable>
        {({ isExpanded }) => (
          <>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            {Object.entries(people)
              .slice(0, isExpanded ? undefined : 0)
               .map(([title, pages]) => (
                 <li key={title}>
                   <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                    </h3>

                     <ul
                       role="list"
                         className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
                           {people.map((person) => (
                             <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                               <Image className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={people.image} alt="" />
                                <div className="flex-auto">
                                   <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                                   <p className="text-base leading-7 text-gray-600">{person.role}</p>
                                   <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                                </div>
                              </li>
                             ))}
                      </ul>
                 </li>
                ))}
             </ol>
        <Expandable.Button>Read more testimonials</Expandable.Button>
        </>
        )}
      </Expandable>

      </div>
    </div>
  )
}