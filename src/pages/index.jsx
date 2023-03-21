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
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ORIGIN / Investigation / Intelligence
        </title>
        <meta
          name="description"
          content="Origin is a private investigation and intelligence agency. We assist governments, corporations, law firms, and individuals."
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Screencasts />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          
        }}
      >
      <title>
          CA SUPERIOR COURT CASES
        </title>
        <p>
          Origin is a member of the <b>California Superior Court Investigator Panel</b>. This means that we can provide criminal case investigative services at no cost to qualified defendants.
        </p>
        <p>
        &nbsp;
        </p>
       <p>
         We also offer thses services in partnership with law firms through our <b>fully integrated case review</b> process. Our highly experienced investigators can help make the difference.
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
         author={{
          
        }}
      >
       <title>
          SPECIALIZED DATA
        </title>
        <p>
          Our specialized data services can help to <b>uncover hidden informatio</b>n that can be valuable in criminal and civil proceedings. In addition to raw data, our experienced investigators and intelligence analysts can bring relevance to complex informaiton. 

            </p>
        <p>
        &nbsp;
        </p>
 <p>
          Origin specialized in <b>difficult to get information</b>, including bank and other asset searches, insurance policy information, employment data, medical records, travel information, and social media activity.
           </p> 
 <p>
        &nbsp;
        </p>
          <Button href="#free-chapters" color="blue">
                Request Specialized Data Now
              </Button>
      
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
