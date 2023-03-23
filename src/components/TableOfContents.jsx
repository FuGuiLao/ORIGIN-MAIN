import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

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

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Our Services
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Origin is a full-service private investigation and intelligence agency.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Our investigators specialize in matters related to criminal investigations, intelligence gathering, corporate and insurance fraud, surveillance, background investigations, computer forensics, threat assessment, and missing persons. We maintain an extensive network of assets to assist with cases throughout the United States and abroad.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-zinc-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
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
      </Container>
    </section>
  )
}
