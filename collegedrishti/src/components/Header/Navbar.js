'use client'
import '../../app/globals.css'
import { useState } from 'react'
import Link from 'next/link'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaChevronDown,
  FaBars,
  FaYoutube,
  FaUser,
  FaTimes
} from 'react-icons/fa'

const menuData = [
  {
    title: 'Distance Course',
    submenu: [
      {
        heading: 'Bachelor Programs',
        items: [
          { title: 'Distance BA from DU SOL', slug: 'distance-ba-from-du-sol' },
          {
            title: 'Distance BBA from DU SOL',
            slug: 'distance-bba-from-du-sol'
          },
          {
            title: 'Distance BMS from DU SOL',
            slug: 'distance-bms-from-du-sol'
          },
          {
            title: 'Distance BCom from DU SOL',
            slug: 'distance-bcom-from-du-sol'
          },
          {
            title: 'Distance BLIS from DU SOL',
            slug: 'distance-blis-from-du-sol'
          }
        ]
      },
      {
        heading: 'Master Programs',
        items: [
          { title: 'Distance MA from DU SOL', slug: 'distance-ma-from-du-sol' },
          {
            title: 'Distance MBA from DU SOL',
            slug: 'distance-mba-from-du-sol'
          },
          {
            title: 'Distance MCOM from DU SOL',
            slug: 'distance-mcom-from-du-sol'
          },
          {
            title: 'Distance MLIS from DU SOL',
            slug: 'distance-mlis-from-du-sol'
          }
        ]
      }
    ]
  },
  {
    title: 'Online Course',
    submenu: [
      {
        heading: 'Bachelor Programs',
        items: [
          { title: 'Online BA from DU SOL', slug: 'online-ba-from-du-sol' },
          { title: 'Online BBA from DU SOL', slug: 'online-bba-from-du-sol' },
          { title: 'Online BCom from DU SOL', slug: 'online-bcom-from-du-sol' }
        ]
      },
      {
        heading: 'Master Programs',
        items: [
          { title: 'Online MA from DU SOL', slug: 'online-ma-from-du-sol' },
          { title: 'Online MBA from DU SOL', slug: 'online-mba-from-du-sol' },
          { title: 'Online MCA from DU SOL', slug: 'online-mca-from-du-sol' },
          { title: 'Online MCOM from DU SOL', slug: 'online-mcom-from-du-sol' },
          { title: 'Online MSC from DU SOL', slug: 'online-msc-from-du-sol' },
          { title: 'Online MJMC from DU SOL', slug: 'online-mjmc-from-du-sol' },
          { title: 'Online MLIS from DU SOL', slug: 'online-mlis-from-du-sol' },
          {
            title: 'Online MTech from DU SOL',
            slug: 'online-mtech-from-du-sol'
          }
        ]
      }
    ]
  },
  {
    title: 'Course Specialization',
    submenu: [
      {
        heading: 'Programs',
        items: [
          { title: 'MA', slug: 'ma-specialization' },
          { title: 'MBA', slug: 'mba-specialization' },
          { title: 'MCA', slug: 'mca-specialization' },
          { title: 'MCOM', slug: 'mcom-specialization' },
          { title: 'MSC', slug: 'msc-specialization' },
          { title: 'MJMC', slug: 'mjmc-specialization' },
          { title: 'MLIS', slug: 'mlis-specialization' },
          { title: 'MTech', slug: 'mtech-specialization' },
          { title: 'BBA', slug: 'bba-specialization' },
          { title: 'BCOM', slug: 'bcom-specialization' },
          { title: 'BA', slug: 'ba-specialization' },
          { title: 'BMS', slug: 'bms-specialization' },
          { title: 'BLIS', slug: 'blis-specialization' }
        ]
      }
    ]
  },
  {
    title: 'Student Zone',
    submenu: [
      {
        heading: 'Resources',
        items: [
          { title: 'DUSOL Admission', slug: 'dusol-admission' },
          { title: 'DUSOL Courses Fees', slug: 'dusol-courses-fees' },
          { title: 'DUSOL Hall Ticket', slug: 'dusol-hall-ticket' },
          { title: 'DU SOL Study Material', slug: 'du-sol-study-material' },
          { title: 'DUSOL Result', slug: 'dusol-result' },
          { title: 'DU SOL Library Portal', slug: 'du-sol-library-portal' },
          {
            title: 'DU SOL Assignment Status',
            slug: 'du-sol-assignment-status'
          },
          {
            title: 'DUSOL Alternative Universities',
            slug: 'dusol-alternative-universities'
          }
        ]
      }
    ]
  },
  { title: 'Blogs', slug: 'blogs' }
]


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className='w-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.35)]'>
      {/* TOP BAR */}
      <div className='bg-purple-900 text-white text-sm'>
        <div className='w-full px-3 sm:px-6 lg:px-10 py-2 flex flex-col lg:flex-row items-center justify-between gap-3'>
          <p className='text-center lg:text-left text-xs sm:text-sm'>
            Welcome to India&apos;s Most Trusted Education Portal
          </p>

          <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-sm'>
            <div className='flex items-center gap-1 whitespace-nowrap'>
              <FaPhoneAlt size={11} />
              <span>Helpline: 0123-456-7890</span>
            </div>

            <div className='hidden md:block h-4 w-px bg-white/40'></div>

            <div className='flex items-center gap-1 whitespace-nowrap'>
              <FaEnvelope size={11} />

              <span className='hidden sm:block'>
                info@dosolcollegedrishti.com
              </span>

              <span className='block sm:hidden'>info@gmail.com</span>
            </div>

            <div className='flex items-center gap-3 ml-1'>
              <FaFacebookF
                size={14}
                className='cursor-pointer hover:text-yellow-300 transition'
              />

              <FaInstagram
                size={15}
                className='cursor-pointer hover:text-yellow-300 transition'
              />

              <FaYoutube
                size={15}
                className='cursor-pointer hover:text-yellow-300 transition'
              />
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className='bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-3 sm:px-5 lg:px-6'>
          <div className='flex items-center justify-between py-3'>
            {/* LOGO */}
            <Link href='/' className='shrink-0'>
              <h1 className='text-sm sm:text-xl lg:text-2xl font-bold text-purple-900 leading-tight'>
                DOSOLCOLLEGEDRISHTI
              </h1>
            </Link>

            {/* DESKTOP MENU */}
            <nav className='hidden xl:flex items-center gap-4 2xl:gap-5 font-semibold text-[12px] 2xl:text-[13px] text-gray-800'>
              {menuData.map((menu, index) => (
                <div key={`${menu.title}-${index}`} className='relative group'>
                  {menu.submenu ? (
                    <>
                      <button className='flex items-center gap-1 whitespace-nowrap hover:text-purple-700 transition py-4'>
                        {menu.title}
                        <FaChevronDown size={10} />
                      </button>

                      {/* FIRST DROPDOWN */}
                      <div className='absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white shadow-2xl rounded-2xl min-w-65 border border-gray-100 py-3 z-50'>
                        {menu.submenu.map((section, idx) => (
                          <div
                            key={`${section.heading}-${idx}`}
                            className='relative group/submenu'
                          >
                            <button className='w-full flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition whitespace-nowrap'>
                              {section.heading}

                              <FaChevronDown size={10} className='-rotate-90' />
                            </button>

                            {/* SECOND DROPDOWN */}
                            <div className='absolute left-full top-0 invisible opacity-0 group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-300 bg-white shadow-2xl rounded-2xl min-w-70 border border-gray-100 py-3'>
                              {section.items.map((item, i) => (
                                <Link
                                  key={`${item.slug}-${i}`}
                                  href={`/course/${item.slug}`}
                                  className='block px-4 py-2.5 text-[13px] text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition whitespace-nowrap'
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={menu.slug ? `/${menu.slug}` : '#'}
                      className='hover:text-purple-700 transition'
                    >
                      {menu.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className='flex items-center gap-3'>
              <button className='bg-yellow-400 hover:bg-yellow-500 transition px-3 sm:px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-black text-[11px] sm:text-xs whitespace-nowrap'>
                <span className='hidden sm:block'>ENQUIRY NOW</span>

                <span className='sm:hidden'>ENQUIRY</span>

                <FaUser size={12} />
              </button>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setMobileMenu(prev => !prev)}
                className='xl:hidden text-purple-900 text-lg'
              >
                {mobileMenu ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ${
            mobileMenu ? 'max-h-500' : 'max-h-0'
          }`}
        >
          <div className='px-4 pb-5 bg-white border-t border-gray-100'>
            <div className='flex flex-col gap-2 pt-4'>
              {menuData.map((menu, index) => (
                <div key={`${menu.title}-${index}`}>
                  {menu.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className='w-full flex items-center justify-between text-left font-semibold text-sm text-gray-800 py-3'
                      >
                        {menu.title}

                        <FaChevronDown
                          size={11}
                          className={`transition ${
                            openDropdown === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openDropdown === index ? 'max-h-500 mt-2' : 'max-h-0'
                        }`}
                      >
                        {menu.submenu.map((section, idx) => (
                          <div
                            key={`${section.heading}-${idx}`}
                            className='mb-4 pl-3 border-l-2 border-purple-200'
                          >
                            <h4 className='text-xs font-bold text-purple-700 mb-2 uppercase'>
                              {section.heading}
                            </h4>

                            <div className='flex flex-col gap-2'>
                              {section.items.map((item, i) => (
                                <Link
                                  key={`${item.slug}-${i}`}
                                  href={`/course/${item.slug}`}
                                  className='text-xs text-gray-600 hover:text-purple-700'
                                >
                                  {item.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={menu.slug ? `/${menu.slug}` : '#'}
                      className='font-semibold text-sm text-gray-800'
                    >
                      {menu.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
