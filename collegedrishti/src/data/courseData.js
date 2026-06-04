import React from 'react';
  
  const CourseData = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default CourseData;
  import React from 'react'

const CourseData = () => {
  return <div></div>
}

export default CourseData
import banner from '../../public/assets/images/coursesBanner.webp'

export const coursesData = {
  'distance-bba-from-du-sol': {
    shortName: 'BBA',

    title: 'Online BBA (DU SOL Bachelor of Business Administration)',

    description:
      ' Earn an Online BBA (Bachelor of Business Administration) to build a strong foundation in business, management, and leadership. Ideal for students who want flexible learning and career options in marketing, HR, finance, or entrepreneurship. Study at your own pace and prepare for the corporate world. Enrol now.',

    duration: '3 Years',

    level: 'Undergraduate',

    mode: 'Online / Offline',

    language: 'English',

    bannerImage: '/images/courses/bba-students.jpg',

    backgroundImage: banner,

    overview: {
      description:
        'It is the Online BBA program offered by the University of Delhi School of Open Learning (DU SOL) is specifically designed for students looking to pursue a career in the field of management and business with a flex-learning approach. This is an excellent choice for professionals working as well as competitive exam candidates and students unable to take regular classes on campus. The course is structured according to a semester, and it is completed over a period of 3 years.The curriculum of the course is focused on important management and business topics such as Marketing, Finance, Accounting, Human Resource Management, and Business Communication. In addition to the theoretical information, students also develop knowledge through practical assignments and projects, case studies and online learning assistance.One of the major advantages that is part of the DU SOL Online BBA course is the low cost of tuition, and DU SOL degrees are recognized and valid for higher education and employment opportunities as per UGC-DEB norms.  This is awarded by Delhi University. Students have access to the study material online, recordings of lectures, online academic sessions, as well as a user-friendly platform that provides a pleasant learning experience. This program is ideal for those who wish to build strong business skills and prepare themselves for future opportunities in their career or for further education options like an MBA.',

      points: [
        'Industry-relevant curriculum',
        'Experienced faculty & mentors',
        'Live projects & case studies',
        'Internship & placement support'
      ]
    },

    specializationSection: {
      title: 'BBA Specializations (Online)',

      description:
        'Choose a specialization in your final year to build domain expertise.',

      specializations: [
        {
          id: 1,
          title: 'Marketing Management',
          icon: 'FaBullhorn'
        },

        {
          id: 2,
          title: 'Finance Management',
          icon: 'FaChartLine'
        },

        {
          id: 3,
          title: 'Human Resource Management',
          icon: 'FaUsers'
        },

        {
          id: 4,
          title: 'Business Analytics',
          icon: 'FaChartBar'
        },

        {
          id: 5,
          title: 'International Business',
          icon: 'FaGlobe'
        },

        {
          id: 6,
          title: 'Entrepreneurship & Startups',
          icon: 'FaRocket'
        }
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
