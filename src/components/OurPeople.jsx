import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/avatar-brant.png'

const tableOfContents = {
  'Government / Legal': {
    'Origin investigators have extensive law enforcement training and experience. We contract with attorneys and government agencies to provide comprehensive criminal investigative support services. While most private investigation agencies work primarily with private clients, we actively seek involvement in complex criminal investigations. Origin can help to supplement the limited time resources of government agencies or examine alternative scenarios for defense attorneys. In addition to detailed case management, we are able to canvass large areas, inverview witnesses, work with forensic investigators, and conduct undercover surveillance and high-level interrogation.': 1,
  },
  'Corporate': {
    'Origin works with companies of all sized to increase the efficiency of their business operations. Not only are our investigators trained law enforcement professional, but experienced private sector leaders. Our investigators know the difference between criminal activity and negligence, waste, and abuse. Having investigators with private sector experience makes a difference; our investigators know what to look for when examining employee files, financial statements, and regulatory compliance issues. Origin can help with a single incident or provide onging services to improve human resources, business operations, inventory management, and prevent corporate espionage.': 2,

  },
  'Commercial': {
    'Origin provides comprehensive commercial services to a wide range of entitiles. As one of our core competencies, we assist by exposing the facts necessary to build your case and prevent fraudulent activity. We can provide investigative services after an incident has occurred or implement preclusive measures to ensure adverse conditions are avoided altogether. These measures include comprehensive background investigations, threat assessment for venues or special events, and other intelligence gathering. Our team consists of highly trained professionals with years of law enforcement and private sector experience using sophisticated technology to meet the needs of our clients.': 3,
    
  },
  'Individual': {
    'Origin\'s experienced investigators are trianed to deal with sensitive and urgent private matters. Whether it is a domestic affair, a lawsuit, or a criminal matter so private that it precludes the immediate involvement of law enforcement; Origin can help answer the questions that you need answered. No case is too simple or too complex. Our clear, comprehensive, and decisive reports wil present evidence that will either support your instincts or account for alternative explanation. Origin will ensure that your case will be handled with unparalleled professionalism, confidentiality, and attention to detail.': 3,
  },
}

export function OurPeople() {
  return (
    <section
      id="ourpeople"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-zinc-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-zinc-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-zinc-300 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="author-title">
              Our People
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
              <span className="block text-red-800">Jayden Brant –</span> <bold>Hi, I am the founder and managing partner of Origin Investigations Inc.</bold>
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
            Throughout his career, Jayden has worked for the United States federal government in law enforcement and intelligence capacities. Jayden previously served as a Deputy Sheriff with the Los Angeles County Sheriff's Department. While there, he worked in field operations, custody, training bureau, and numerous special assignments within the department.
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
            He has extensive knowledge, training, and experience in criminal investigation, interrogation, undercover surveillance, case management, evidence handling, and California and Federal law.
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
            Jayden attained California Peace Officer Standards and Training (POST) Certification and completed POST Advanced Officer Training while with the LASD and continues to maintain certification. He also completed the challenging coursework for the POST Specialized Investigator Certification.
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
            During his career, Jayden has worked with the LASD, LAPD, US Marshals Service, Diplomatic Security Service, US Secret Service, Federal Bureau of Investigation, Department of Homeland Security, US Immigration and Customs Enforcement, the Superior Court of California, as well as numerous local law enforcement agencies and independent investigators.
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
            In addition to a law enforcement background, Jayden also has significant private sector experience. He has held leadership positions in the heavily regulated financial services industry not only overseeing operations of a Registered Investment Advisory Firm, but also conducting corporate due diligence and fraud investigations.
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
            He has also provided regulatory compliance, security, and legal consulting for high-profile individuals and numerous companies across a wide variety of industries. Jayden attended Claremont McKenna College and studied computer engineering.
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
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
      </div>
 <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-zinc-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-zinc-300/30 rounded-2xl bg-zinc-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-zinc-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-zinc-50"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
    </section>
  )
}
