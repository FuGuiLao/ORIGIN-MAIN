import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Origin is a different kind of private investigation agency and our clients experience the difference on every case.
        </p>
        <p className="mt-4">
          Our in-house investigative team is comprised of experienced law enforcement and 
          intelligence professionals, and we have industry-leading technology and administrative support.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Origin works tirelessly to expose hidden or misunderstood evidence. With our uncommon depth of diligence, we find the answers that have eluded others.',
            'We focus on the details of every case. Our understanding of the real world injects our findings with authenticity to which clients and courts can relate.',
            'Origin reports are clear, comprehensive, and decisive. We account for alternative explanations and strive for definitive assessments whenever the facts allow.',
            'Our investigators are experienced professionals and are able to maintain critical focus during high-profile investigations and contentions court proceedings.',
            'Origin responds to what you think is urgent. We meet our deadlines, but maintain flexibility to serve the constantly changing priorities and schedules of our clients.',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-red-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Origin is a registered United States federal government contractor (7R8N0) and a licensed private 
          investigation agency with the State of California (187863).
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-red-600 hover:text-red-800"
          >
            Get more information, including our marketing book, straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
