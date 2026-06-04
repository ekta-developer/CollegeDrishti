// components/HeroBanner.jsx

import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, BookOpen, FileText, Users } from 'lucide-react'

import naacImg from '../../public/assets/accreditationsImg/NAAC.png'
import ugcImg from '../../public/assets/accreditationsImg/UGC.png'
import aicteImg from '../../public/assets/accreditationsImg/AICTE.png'
import bannerImg from '../../public/assets/images/du website banner copy (3).webp'

const features = [
  {
    icon: BookOpen,
    title: 'Trusted Information'
  },
  {
    icon: GraduationCap,
    title: 'Top Colleges'
  },
  {
    icon: FileText,
    title: 'Regular Updates'
  },
  {
    icon: Users,
    title: 'Expert Guidance'
  }
]

const accreditationData = [
  {
    id: 1,
    image: naacImg,
    title: 'NAAC',
    subtitle: 'GRADE A++'
  },
  {
    id: 2,
    image: ugcImg,
    title: 'APPROVED BY',
    subtitle: 'UGC - DEB'
  },
  {
    id: 3,
    image: aicteImg,
    title: 'ACCREDITED BY',
    subtitle: 'AICTE'
  }
]

const HeroBanner = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* Banner Wrapper */}
      <div className='relative min-h-75 lg:min-h-85 w-full'>
        {/* Background Image */}
        <Image
          src={bannerImg}
          alt='DU SOL Banner'
          fill
          className='object-cover object-center'
        />

        {/* Content */}
        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-75 lg:min-h-85 flex items-center'>
          <div className='max-w-xl text-white'>
            {/* Top Text */}
            <p className='text-[8px] sm:text-[9px] font-semibold tracking-[2px] text-yellow-300 uppercase mt-12'>
              Your Future Starts Here
            </p>

            {/* Heading */}
            <h1 className='mt-2 text-lg sm:text-2xl lg:text-4xl font-bold leading-tight'>
              Apply Now for DU SOL
              <br />
              UG & PG <span className='text-yellow-400'>Admission 2026 </span>
            </h1>

            {/* Description */}
            <p className='mt-3 text-[9px] sm:text-[10px] lg:text-xs text-gray-200 leading-5 max-w-lg'>
              Explore top colleges, online courses, admission updates, entrance
              exams, scholarships, and career guidance — all in one place.
            </p>

            {/* Accreditation Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
              {accreditationData.map(item => (
                <div
                  key={item.id}
                  className='flex items-center gap-2 transition-all duration-300'
                >
                  {/* Logo */}
                  <div className='shrink-0'>
                    <Image
                      src={item.image}
                      alt={item.subtitle}
                      width={35}
                      height={35}
                      className='object-contain'
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className='text-[7px] sm:text-[8px] font-medium uppercase tracking-wide text-white/80'>
                      {item.title}
                    </h3>

                    <p className='text-sm sm:text-base font-bold text-yellow-400 leading-tight'>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            {/* <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5'>
              {features.map((feature, index) => {
                const Icon = feature.icon

                return (
                  <div
                    key={index}
                    className='bg-white/10 border border-white/10 rounded-xl p-2 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 text-center'
                  >
                    <div className='w-7 h-7 mx-auto rounded-lg bg-yellow-400 flex items-center justify-center'>
                      <Icon className='w-3.5 h-3.5 text-black' />
                    </div>

                    <p className='mt-2 text-[8px] sm:text-[9px] font-medium text-white leading-4'>
                      {feature.title}
                    </p>
                  </div>
                )
              })}
            </div> */}

            {/* Buttons */}
            <div className='flex flex-wrap gap-3 mt-5 mb-12'>
              <Link
                href='/colleges'
                className='bg-yellow-400 hover:bg-yellow-500 text-black text-[10px] font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg'
              >
                EXPLORE NOW
              </Link>

              <Link
                href='/contact'
                className='border border-white/40 hover:bg-white hover:text-black text-white text-[10px] font-semibold px-4 py-2 rounded-lg transition-all duration-300'
              >
                GET FREE COUNSELLING
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
