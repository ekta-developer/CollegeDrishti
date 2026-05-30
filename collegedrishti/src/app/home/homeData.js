'use client'

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
      'DU SOL is the School of Open Learning, University of Delhi offering distance education programs.'
  },
  {
    question: 'How can I apply for DU SOL programs?',
    answer:
      'You can apply online through the official admission portal by filling out the application form.'
  },
  {
    question: 'What are the eligibility criteria?',
    answer:
      'Eligibility depends on the course you are applying for. Check the course details page.'
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