// components/AccreditationsSection.jsx

import Image from 'next/image'
import img1 from '../../../public/assets/accreditationsImg/UGC.png'
import img2 from '../../../public/assets/accreditationsImg/AICTE.png'
import img3 from '../../../public/assets/accreditationsImg/DEB.jpg'
import img4 from '../../../public/assets/accreditationsImg/NAAC.png'
import img5 from '../../../public/assets/accreditationsImg/NIRF.png'
const accreditations = [
  {
    id: 1,
    title: 'UGC',
    subtitle: 'University Grants Commission',
    image: img1
  },
  {
    id: 2,
    title: 'AICTE',
    subtitle: 'All India Council for Technical Education',
    image: img2
  },
  {
    id: 3,
    title: 'DEB',
    subtitle: 'Distance Education Bureau',
    image: img3
  },
  {
    id: 4,
    title: 'NAAC',
    subtitle: 'Quality Education Recognized',
    image: img4
  },
  {
    id: 5,
    title: 'NIRF',
    subtitle: 'National Institutional Ranking Framework',
    image: img5
  }
]

export default function AccreditationsSection () {
  return (
    <section className='w-full py-6 sm:py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white border border-gray-200 rounded-2xl shadow-sm p-4 sm:p-6'>
          {/* Heading */}
          <h2 className='text-lg sm:text-xl font-bold text-[#2F1893] mb-6'>
            Accreditations & Approvals
          </h2>

          {/* Logos */}
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center'>
            {accreditations.map(item => (
              <div
                key={item.id}
                className='flex items-center gap-3 justify-center lg:justify-start text-center lg:text-left'
              >
                {/* Logo */}
                <div className='relative w-12 h-12 sm:w-14 sm:h-14 shrink-0'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-contain'
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className='text-sm sm:text-base font-bold text-black leading-tight'>
                    {item.title}
                  </h3>

                  <p className='text-[11px] sm:text-xs text-gray-600 leading-snug max-w-35'>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
