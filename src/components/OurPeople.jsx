import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/avatar-brant.png'

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



    </section>
  )
}
