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

import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { SectionHeading } from '@/components/SectionHeading'


const people = [
  {
    name: 'Joshua Passas',
    role: 'Director / Investigation',
    image: teamImage2,
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',

    modal:



                <><div>

            <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Jayden Brant
                </Dialog.Title>
                <div className="mt-2">
                    <p className="text-sm text-gray-500">

                    
                        Hi, I am the founder and managing partner of Origin Investigations Inc.
                    </p>
                    <p>
                        Throughout his career, Jayden has worked for the United States federal government in law enforcement and intelligence capacities. Jayden previously served as a Deputy Sheriff with the Los Angeles County Sheriff's Department. While there, he worked in field operations, custody, training bureau, and numerous special assignments within the department.
                    </p>
                    <p>
                        He has extensive knowledge, training, and experience in criminal investigation, interrogation, undercover surveillance, case management, evidence handling, and California and Federal law.
                    </p>
                    <p>
                        Jayden attained California Peace Officer Standards and Training (POST) Certification and completed POST Advanced Officer Training while with the LASD and continues to maintain certification. He also completed the challenging coursework for the POST Specialized Investigator Certification.
                    </p>
                    <p>
                        During his career, Jayden has worked with the LASD, LAPD, US Marshals Service, Diplomatic Security Service, US Secret Service, Federal Bureau of Investigation, Department of Homeland Security, US Immigration and Customs Enforcement, the Superior Court of California, as well as numerous local law enforcement agencies and independent investigators.
                    </p>
                    <p>
                        In addition to a law enforcement background, Jayden also has significant private sector experience. He has held leadership positions in the heavily regulated financial services industry not only overseeing operations of a Registered Investment Advisory Firm, but also conducting corporate due diligence and fraud investigations.
                    </p>
                    <p>
                        He has also provided regulatory compliance, security, and legal consulting for high-profile individuals and numerous companies across a wide variety of industries. Jayden attended Claremont McKenna College and studied computer engineering.
                    </p>
                    <p>
                        Jayden is a member of the California Association of Licensed Investigators, the United States Association of Professional Investigators, the Association of Former Intelligence Officers, and the International Association of Law Enforcement Intelligence Analysts.
                    </p>

                    <p className="mt-8">
                        <Link
                            href="#"
                            className="inline-flex items-center text-base font-medium tracking-tight text-red-800"
                        >

                            <span className="ml-0"><a href="https://www.linkedin.com/in/jaydenbrant" target="_blank">View on LinkedIn</a></span>
                        </Link>
                    </p>



                </div>
            </div>
        </div><div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setOpen(false)}
                >
                    Go back to dashboard
                </button>
            </div></>




       


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

                                       <>
                                           <button
                                               type="button"
                                               className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                               onClick={() => setOpen(true)}
                                           >
                                           Open Modal
                                            </button>

                                           <Transition.Root show={open} as={Fragment}>
                                               <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>



                                                   <div className="fixed inset-0 z-10">
                                                       <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
                                                           <Transition.Child
                                                               as={Fragment}
                                                               enter="ease-out duration-300"
                                                               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                               enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                               leave="ease-in duration-200"
                                                               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                           >
                                                               <Dialog.Panel >

                                                                   
                                                                       

                                                                       {person.modal}

                                                                       
                                                                   

                                                               </Dialog.Panel>
                                                           </Transition.Child>
                                                       </div>
                                                   </div>
                                               </Dialog>
                                           </Transition.Root>
                                       </>
                                       


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
