import { useState } from 'react'
import Head from 'next/head'

import { Banner } from '@/components/Banner'
import { OurPeople } from '@/components/OurPeople'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Investigation } from '@/components/Investigation'
import { OurServices } from '@/components/OurServices'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Team } from '@/components/Team'
import { Button } from '@/components/Button'
import CalendlySlideover from '@/components/CalendlySlideover'
import JobSlideover from '@/components/JobSlideover'
import HeyflowSlideover from '@/components/HeyflowSlideover'
import SpecializedDataSlideover from '@/components/SpecializedDataSlideover'

export default function Home() {
  const [openSchedule, setOpenSchedule] = useState(false)
  const [openJob, setOpenJob] = useState(false)
  const [openHeyflow, setOpenHeyflow] = useState(false)
  const [openSpecializedData, setOpenSpecializedData] = useState(false)

  return (
    <>
      <Head>
        <title>ORIGIN / Investigation / Intelligence</title>
        <meta
          name="description"
          content="Origin is a private investigation and intelligence agency. We assist governments, corporations, law firms, and individuals."
        />
        <meta name="apple-mobile-web-app-title" content="ORIGIN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(a,b,c,d,e,f,g){c[d]=c[d]||function(){(c[d].q=c[d].q||[]).push(arguments)};c['_lsAlias']=c[d];e=a.createElement(b);e.type='text/javascript';e.async=true;e.src='https://app.chatsupport.co/api/client/get/script/LS-42bf8cb7';f=function(){g=a.getElementsByTagName(b)[0];g.parentNode.insertBefore(e,g)};c.addEventListener('load',f)})(document,'script',window,'_ls');_ls('init',{'projectId':'LS-42bf8cb7'});
            `,
          }}
        />
        <script src="https://static.heyflow.app/widget/latest/webview.js"></script>
      </Head>
      <Banner />
      <Hero />
      <Introduction />
      <NavBar />
      <OurServices />
      <Testimonial id="testimonial-from-tommy-stroman" author={{}}>
        <title>CA SUPERIOR COURT CASES</title>
        <p className={`${openSchedule ? 'pr-[17px] sm:pr-0' : ''}`}>
          Origin is a member of the{' '}
          <b>
            United States Federal Court and the California Superior Court
            Investigator Panel
          </b>
          . This means that we can provide comprehensive criminal case
          investigative services at no cost to qualified defendants.
        </p>
        <p>&nbsp;</p>
        <p>
          We also offer these services in partnership with law firms through our{' '}
          <b>fully integrated case review</b> process. Our highly experienced
          investigators can help make the difference in court.
        </p>
        <p>&nbsp;</p>
        <Button color="red" onClick={() => setOpenSchedule(true)}>
          Schedule a Consultation
        </Button>
        <CalendlySlideover
          open={openSchedule}
          onClose={() => setOpenSchedule(false)}
        />
      </Testimonial>

      <Investigation />
      <Testimonial id="testimonial-from-gerardo-stark" author={{}}>
        <title>SPECIALIZED DATA</title>
        <p className={`${openHeyflow ? 'pr-[17px] sm:pr-0' : ''}`}>
          Origin's specialized data services can{' '}
          <b>uncover hidden information</b> that can be valuable in criminal and
          civil cases. Our intelligence analysts can bring relevance to complex
          information.
        </p>
        <p>&nbsp;</p>
        <p className={`${openHeyflow ? 'pr-[17px] sm:pr-0' : ''}`}>
          We specialize in <b>impossible to get information</b>, including bank
          and asset locates, insurance policy information, employment data,
          medical records, travel information, and social media activity.
        </p>
        <p>&nbsp;</p>
        {/* <Button
          color="red"
          onClick={() => {
            window.open(
              'https://get-in-touch-733c19.zapier.app/specialized-data-request',
              '_blank'
            )
          }}
        >
          Order Specialized Data Now
        </Button> */}
        <Button
          color="red"
          onClick={() => {
            setOpenSpecializedData(true)
          }}
        >
          Order Specialized Data Now
        </Button>
        <SpecializedDataSlideover
          open={openSpecializedData}
          onClose={() => setOpenSpecializedData(false)}
        />
        {/* <Button color="red" onClick={() => setOpenHeyflow(true)}>
          Order Specialized Data Now
        </Button>
        <HeyflowSlideover open={openHeyflow} onClose={() => setOpenHeyflow(false)} title="Order Specialized Data Now" flowId="specialized-data-request" /> */}
      </Testimonial>
      <Resources />
      <FreeChapters />
      <Pricing />
      
      <Testimonials />
        <Testimonial id="testimonial-from-gerardo-stark" author={{}}>
        <title>JOIN OUR TEAM</title>
        <p className={`${openHeyflow ? 'pr-[17px] sm:pr-0' : ''}`}>
          Origin is always looking for talented individuals to join our growing team. 
          We are {' '} <b>actively recruiting</b> investigators with law enforcement or related experience, 
          as well as intelligence analysts, case managers, and client relations professionals.
        </p>
  {/*   <p>&nbsp;</p>
        <p className={`${openHeyflow ? 'pr-[17px] sm:pr-0' : ''}`}>
          We specialize in <b>impossible to get information</b>, including bank
          and asset locates, insurance policy information, employment data,
          medical records, travel information, and social media activity.
        </p>
  */}
        <p>&nbsp;</p>
        {/* <Button
          color="red"
          onClick={() => {
            window.open(
              'https://get-in-touch-733c19.zapier.app/specialized-data-request',
              '_blank'
            )
          }}
        >
          Submit an Application
        </Button> */}
        <Button
          color="red"
          onClick={() => {
            setOpenJob(true)
          }}
        >
          Submit an Application
        </Button>
        <JobSlideover
          open={openJob}
          onClose={() => setOpenjob(false)}
        />
        {/* <Button color="red" onClick={() => setOpenHeyflow(true)}>
          Submit an Application
        </Button>
        <HeyflowSlideover open={openHeyflow} onClose={() => setOpenHeyflow(false)} title="Order Specialized Data Now" flowId="specialized-data-request" /> */}
      </Testimonial>
      <OurPeople />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
