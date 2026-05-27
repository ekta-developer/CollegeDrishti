import banner from '../../public/assets/images/coursesBanner.webp'
export const coursesData = {
  'distance-bba-from-du-sol': {
    shortName: 'BBA',

    title: 'Bachelor of Business Administration (BBA)',

    description:
      'Build a strong foundation in business management, leadership, and entrepreneurship. Gain practical skills and industry insights to kickstart your career.',

    duration: '3 Years',

    level: 'Undergraduate',

    mode: 'Online / Offline',

    language: 'English',

    bannerImage: '/images/courses/bba-students.jpg',

    backgroundImage: banner,

    title: 'Bachelor of Business Administration (BBA)',

    overview: {
      description:
        'The BBA program is designed to provide students with a comprehensive understanding of business principles and management practices.',

      points: [
        'Industry-relevant curriculum',
        'Experienced faculty & mentors',
        'Live projects & case studies',
        'Internship & placement support'
      ]
    },

    curriculum: [
      {
        semester: 'Semester 1',

        subjects: [
          {
            name: 'Principles of Management',
            hours: '20 Hours'
          },
          {
            name: 'Financial Accounting',
            hours: '18 Hours'
          },
          {
            name: 'Business Economics',
            hours: '18 Hours'
          }
        ]
      },

      {
        semester: 'Semester 2',

        subjects: [
          {
            name: 'Marketing Management',
            hours: '20 Hours'
          },
          {
            name: 'Business Statistics',
            hours: '16 Hours'
          }
        ]
      }
    ],

    feeStructure: [
      {
        title: 'Application Fee',
        amount: '₹1,000'
      },

      {
        title: 'Course Fee (Total)',
        amount: '₹49,999'
      },

      {
        title: 'Examination Fee (Per Year)',
        amount: '₹2,000'
      }
    ],

    courseDetails: [
      {
        label: 'Duration',
        value: '3 Years'
      },

      {
        label: 'Level',
        value: 'Undergraduate'
      },

      {
        label: 'Mode',
        value: 'Online / Offline'
      },

      {
        label: 'Language',
        value: 'English'
      },

      {
        label: 'Eligibility',
        value: '10+2 (Any Stream)'
      },

      {
        label: 'Difficulty Level',
        value: 'Beginner'
      }
    ]
  }
}
