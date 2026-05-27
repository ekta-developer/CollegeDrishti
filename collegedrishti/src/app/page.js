'use client'
// import Navbar from '@/components/Header/Navbar'
// import Image from 'next/image'
// import HomeBanner from '@/components/HomeBanner'
// import HomeSection from '@/components/HomeSection'
// import OurCourses from '@/components/OurCourses'
// import EligibilitySection from '@/components/EligibilitySection'
// import WhyChooseSection from '@/components/WhyChooseSection'
// import HowToApply from '@/components/HowToApply'
// import DynamicFAQS from '@/components/common/DynamicFAQ'
// import Footer from '@/components/footer/Footer'
// export default function Home () {
//   // data/faqData.js

//   const faqData = [
//     {
//       question: 'What is DU SOL?',
//       answer:
//         'DU SOL is the School of Open Learning, University of Delhi offering distance education programs.'
//     },
//     {
//       question: 'How can I apply for DU SOL programs?',
//       answer:
//         'You can apply online through the official admission portal by filling out the application form.'
//     },
//     {
//       question: 'What are the eligibility criteria?',
//       answer:
//         'Eligibility depends on the course you are applying for. Check the course details page.'
//     },
//     {
//       question: 'What is the last date to apply?',
//       answer:
//         'The last date varies every session. Please check official notifications regularly.'
//     },
//     {
//       question: 'How can I check my result?',
//       answer:
//         'You can check your result online through the university result portal using your roll number.'
//     }
//   ]
//   return (
//     <>
//       <div>
//         <Navbar />
//         <HomeBanner />
//         <HomeSection />
//         <OurCourses />
//         <EligibilitySection />
//         <WhyChooseSection />
//         <HowToApply />
//         <DynamicFAQS
//           title='Frequently Asked Questions'
//           faqs={faqData}
//           columns={2}
//         />
//         <Footer />
//       </div>
//     </>
//   )
// }

import { pagesData } from '@/data/pagesData'

export default function Home () {
  return (
    <div>
      {pagesData.home.sections.map((section, index) => (
        <div key={index}>{section}</div>
      ))}
    </div>
  )
}
