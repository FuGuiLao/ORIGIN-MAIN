import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="TEST A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
      >
      <title>
          CA SUPERIOR COURT CASES
        </title>
        <p>
          Origin is a member of the Los Angeles County Court Investigator Panel. This means that we can provide criminal case investigative services at no costr to qualified defendants. We also offer thses services in partnership with law firms through our fully integrated case review process. Our highlay experienced investigators can help make the difference.
        </p>
        <div className="mt-8 flex gap-4">
              <Button href="#free-chapters" color="blue">
                Schedule a Consultation
              </Button>
            </div>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
      >
       <title>
          SPECIALIZED DATA
        </title>
        <p>
          Origin specialized in hard to get information, including bank and other asset searches, insurance policy information, employment data, medical records, travel information, and social media activity. Our specialized data services can help to uncover hidden information that can be valuable in civil proceedings. In addition to raw data, our experienced investigators and intelligence analysts can bring relevance to complex informaiton. 
        </p>
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      <Testimonials />
      <Author />
      <Footer />
    </>
  )
}
