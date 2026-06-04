
  'use client'

import React from 'react'

import HeroBanner from '@/components/HeroBanner'
import HomeSection from '@/components/HomeSection'
import HowToApply from '@/components/HowToApply'
import OurCourses from '@/components/OurCourses'
import WhyChooseSection from '@/components/WhyChooseSection'
import DynamicFAQS from '@/components/common/DynamicFAQ'
import EligibilitySection from '@/components/EligibilitySection'

const faqData = [
  {
    question: 'What is DU SOL?',
    answer:
      'DU SOL (School of Open Learning) is a distance and online education institution under the University of Delhi that offers UG and PG programs.'
  },
  {
    question: 'Is DU SOL recognized by UGC?',
    answer:
      'Yes, DU SOL is recognized by the University Grants Commission (UGC) and approved for distance learning education.'
  },
  {
    question: 'What courses are offered by DU SOL?',
    answer:
      'DU SOL offers various undergraduate and postgraduate programs, including BA, BCom, BBA, BMS, MA, MCom, MBA, and more.'
  },
  {
    question: 'Who can apply for DU SOL admission?',
    answer:
      'Students who have completed their 10+2 or graduated from a recognized board or university can apply according to the course eligibility criteria.'
  },
  {
    question: 'What is the mode of study at DU SOL?',
    answer:
      'DU SOL provides education through online and distance learning modes, allowing students to study flexibly.'
  },
  {
    question: 'How can I apply for DU SOL admission?',
    answer:
      'Students can apply online by filling out the application form, uploading documents, and completing the admission process through the official portal.'
  },
  {
    question: 'Does DU SOL provide study material?',
    answer:
      'Yes, DU SOL provides study materials and academic support for enrolled students through online and offline resources.'
  },
  {
    question: 'Are DU SOL degrees valid for jobs and higher studies?',
    answer:
      'Yes, degrees offered by DU SOL are valid for government jobs, private sector employment, and higher education opportunities.'
  },
  {
    question: 'Can working professionals apply for DU SOL courses?',
    answer:
      'Yes, DU SOL programs are suitable for working professionals because of their flexible learning structure.'
  },
  {
    question: 'Where can students get DU SOL admission updates?',
    answer:
      'Students can get the latest DU SOL admission updates, eligibility details, course information, and guidance through COLLEGEDRISHTI.'
  }
]

export const homeSections = [
  {
    id: 'banner',
    component: <HeroBanner />
  },
  {
    id: 'home-section',
    component: <HomeSection />
  },
  {
    id: 'courses',
    component: <OurCourses />
  },
  {
    id: 'eligibility',
    component: <EligibilitySection />
  },
  {
    id: 'why-choose',
    component: <WhyChooseSection />
  },
  {
    id: 'apply',
    component: <HowToApply />
  },
  {
    id: 'faq',
    component: (
      <DynamicFAQS
        title='Frequently Asked Questions'
        faqs={faqData}
        columns={2}
      />
    )
  }
]

const HomeData = () => {
  return (
    <main className='w-full overflow-hidden'>
      {homeSections.map(section => (
        <React.Fragment key={section.id}>{section.component}</React.Fragment>
      ))}
    </main>
  )
}

export default HomeData
