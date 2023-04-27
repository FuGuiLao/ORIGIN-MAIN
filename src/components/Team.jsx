import Image from 'next/image'
import Link from 'next/link'

import { Expandable } from '@/components/Expandable'

import teamImage2 from '@/images/avatars/avatar-passas.png'
import teamImage3 from '@/images/avatars/avatar-vannoy.png'
import teamImage4 from '@/images/avatars/avatar-wise.png'
import teamImage5 from '@/images/avatars/avatar-temp.png'
import teamImage6 from '@/images/avatars/avatar-min.png'
import teamImage7 from '@/images/avatars/avatar-sarco.png'


import React, { useState } from 'react'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { SectionHeading } from '@/components/SectionHeading'


const people = [
  {
    name: 'Joshua Passas',
    role: 'Director / Investigation',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',

    modal: 'test',
 
        




       


  },

  {
    name: 'Victoria Vannoy',
    role: 'Director / Intelligence',
    image: teamImage3,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
  },
  {
    name: 'Jaclyn Wise',
    role: 'Director / Case Management',
    image: teamImage4,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
  },
  {
    name: 'Temp Person',
    role: 'Director / Client Relations',
    image: teamImage5,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
  },
  {
    name: 'Yi Min',
    role: 'Director / Information Technology',
    image: teamImage6,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
  },
  {
    name: 'Vanessa Sarco',
    role: 'Administration / Accounting',
    image: teamImage7,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui. THIS TEXT OPENS POP-UP MODAL',
  },
  // More people...
]




export function Team() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const [open, setOpen] = useState(false)



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
                           {people.map((person) => (
                            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
                                <Image className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.image} alt="" />
                                <div className="flex-auto">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-zinc-900">{person.name}</h3>
                                    <p className="text-base leading-7 text-zinc-600">{person.role}</p>
                                    <p className="mt-6 text-base leading-7 text-zinc-600">{person.bio}</p>

                                       
                                       <div>
                                           <button onClick={() => setOpen(true)}>Open Modal</button>

                                           {open && (


                                               <Transition.Root show={open} as={Fragment}>
                                                   <Dialog as="div" className="relative z-10" onClose={setOpen}>
                                                       <div className="fixed inset-0" />

                                                       <div className="fixed inset-0 overflow-hidden">
                                                           <div className="absolute inset-0  overflow-hidden">
                                                               <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                                                   <Transition.Child
                                                                       as={Fragment}
                                                                       enter="transform transition ease-in-out duration-500 sm:duration-700"
                                                                       enterFrom="translate-x-full"
                                                                       enterTo="translate-x-0"
                                                                       leave="transform transition ease-in-out duration-500 sm:duration-700"
                                                                       leaveFrom="translate-x-0"
                                                                       leaveTo="translate-x-full"
                                                                   >
                                                                       <Dialog.Panel className="pointer-events-auto w-screen content-end max-w-2xl">
                                                                           <div className="flex h-2/3  flex-col  overflow-y-scroll bg-white py-6 shadow-xl">
                                                                               <div className="px-4 sm:px-6">
                                                                                   <div className="flex items-start justify-between">
                                                                                       <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                                                           Panel title
                                                                                       </Dialog.Title>
                                                                                       <div className="ml-3 flex h-7 items-center">
                                                                                           <button
                                                                                               type="button"
                                                                                               className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                                               onClick={() => setOpen(false)}
                                                                                           >
                                                                                               <span className="sr-only">Close panel</span>
                                                                                               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                                                           </button>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                               <p className="relative mt-6 flex-1 px-4 sm:px-6">{person.modal}</p>
                                                                           </div>
                                                                       </Dialog.Panel>
                                                                   </Transition.Child>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </Dialog>
                                               </Transition.Root>




                                           )}
                                       </div>
                                       

                                                          

                                                                   
                                                                       

                                                                       

                                                                       
                                                                   


                                       


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
