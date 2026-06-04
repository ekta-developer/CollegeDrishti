'use client'

import React, { useState } from 'react'
import Select from 'react-select'
import Image from 'next/image'
import img1 from '../../../public/assets/images/flags/in.png'
import img2 from '../../../public/assets/images/flags/us.png'
import img3 from '../../../public/assets/images/flags/gb.png'
import img4 from '../../../public/assets/images/flags/au.png'
import img5 from '../../../public/assets/images/flags/jp.png'
import img6 from '../../../public/assets/images/flags/de.png'
import img7 from '../../../public/assets/images/flags/fr.png'
import img8 from '../../../public/assets/images/flags/ae.png'
import img9 from '../../../public/assets/images/flags/cn.png'
import img10 from '../../../public/assets/images/flags/bd.png'

const countryOptions = [
  {
    value: '+91',
    label: '+91',
    flag: img1
  },
  {
    value: '+1',
    label: '+1',
    flag: img2
  },
  {
    value: '+44',
    label: '+44',
    flag: img3
  },
  {
    value: '+61',
    label: '+61',
    flag: img4
  },
  {
    value: '+81',
    label: '+81',
    flag: img5
  },
  {
    value: '+49',
    label: '+49',
    flag: img6
  },
  {
    value: '+33',
    label: '+33',
    flag: img7
  },
  {
    value: '+971',
    label: '+971',
    flag: img8
  },
  {
    value: '+86',
    label: '+86',
    flag: img9
  },
  {
    value: '+880',
    label: '+880',
    flag: img10
  }
]

const formatOptionLabel = ({ flag, label }) => (
  <div className='flex items-center gap-2'>
    <Image
      src={flag}
      alt='flag'
      width={20}
      height={20}
      className='rounded-full object-cover'
    />
    <span>{label}</span>
  </div>
)

const CounselingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    course: '',
    state: ''
  })
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <div className='bg-white border border-gray-300 rounded-md overflow-hidden'>
      {/* Header */}
      <div className='bg-[#652A84] text-white px-5 py-4'>
        <h3 className='text-lg font-semibold'>Book 100% Free Counseling</h3>

        <p className='text-sm mt-1 opacity-90'>
          Get 1 to 1 Expert Guidance from SO
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='p-5 space-y-4'
        suppressHydrationWarning
      >
        {/* Name */}
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter Your Name'
          autoComplete='off'
          suppressHydrationWarning
          className='w-full h-11 border border-gray-300 px-4 rounded text-sm outline-none focus:border-[#652A84]'
        />

        {/* Email */}
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter Your Email'
          autoComplete='off'
          suppressHydrationWarning
          className='w-full h-11 border border-gray-300 px-4 rounded text-sm outline-none focus:border-[#652A84]'
        />

        {/* Phone */}
        <div className='grid grid-cols-[90px_1fr] gap-3'>
          <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={setSelectedCountry}
            formatOptionLabel={formatOptionLabel}
            isSearchable
            classNamePrefix='react-select'
          />

          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter Your Number'
            autoComplete='off'
            suppressHydrationWarning
            className='h-11 border border-gray-300 px-4 rounded text-sm outline-none focus:border-[#652A84]'
          />
        </div>

        {/* Course */}
        <select
          name='course'
          value={formData.course}
          onChange={handleChange}
          autoComplete='off'
          suppressHydrationWarning
          className='w-full h-11 border border-gray-300 rounded px-4 text-sm outline-none focus:border-[#652A84]'
        >
          <option value=''>Select Course</option>
          <option value='bca'>BCA</option>
          <option value='mca'>MCA</option>
          <option value='btech'>B.Tech</option>
        </select>

        {/* State */}
        <select
          name='state'
          value={formData.state}
          onChange={handleChange}
          autoComplete='off'
          suppressHydrationWarning
          className='w-full h-11 border border-gray-300 rounded px-4 text-sm outline-none focus:border-[#652A84]'
        >
          <option value=''>Select State</option>
          <option value='up'>Uttar Pradesh</option>
          <option value='delhi'>Delhi</option>
          <option value='mh'>Maharashtra</option>
        </select>

        {/* Disclaimer */}
        <p className='text-[11px] text-gray-500 leading-5'>
          I authorise SO to contact me with updates via SMS/Email/WhatsApp.
        </p>

        {/* Submit */}
        <button
          type='submit'
          className='w-full bg-[#652A84] hover:bg-[#470f74] text-white font-semibold py-3 rounded transition duration-300'
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default CounselingForm
