"use client"
import HomeBanner from '@/components/HomeBanner'
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

export const pagesData = {
  home: {
    title: 'Home',
    sections: [
      <HomeBanner key='banner' />,
      <HomeSection key='home-section' />,
      <OurCourses key='courses' />,
      <EligibilitySection key='eligibility' />,
      <WhyChooseSection key='why-choose' />,
      <HowToApply key='apply' />,
      <DynamicFAQS
        key='faq'
        title='Frequently Asked Questions'
        faqs={faqData}
        columns={2}
      />
    ]
  },

  courses: {
    title: 'Courses',
    sections: [
      <OurCourses key='courses-page' />,
      <EligibilitySection key='eligibility-page' />
    ]
  },

  admission: {
    title: 'Admission',
    sections: [<HowToApply key='how-to-apply-page' />]
  },

  faq: {
    title: 'FAQ',
    sections: [
      <DynamicFAQS
        key='faq-page'
        title='Frequently Asked Questions'
        faqs={faqData}
        columns={2}
      />
    ]
  }
}
