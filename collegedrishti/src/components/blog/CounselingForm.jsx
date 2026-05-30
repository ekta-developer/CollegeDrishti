'use client'

import React, { useState } from 'react'

const CounselingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    course: '',
    state: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <div className='bg-white border border-gray-300 rounded-md overflow-hidden'>
      {/* Header */}
      <div className='bg-[#0B5C84] text-white px-5 py-4'>
        <h3 className='text-lg font-semibold'>
          Book 100% Free Counseling
        </h3>

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
          className='w-full h-11 border border-gray-300 px-4 rounded text-sm outline-none focus:border-[#0B5C84]'
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
          className='w-full h-11 border border-gray-300 px-4 rounded text-sm outline-none focus:border-[#0B5C84]'
        />

        {/* Phone */}
        <div className='grid grid-cols-[90px_1fr] gap-3'>
          <select
            name='countryCode'
            value={formData.countryCode}
            onChange={handleChange}
            autoComplete='off'
            suppressHydrationWarning
            className='h-11 border border-gray-300 rounded px-2 text-sm outline-none focus:border-[#0B5C84]'
          >
            <option value='+91'>+91 🇮🇳</option>
          </select>

          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter Your Number'
            autoComplete='off'
            suppressHydrationWarning
            className='h-11 border border-gray-300 px-4 rounded text-sm outline-none focus:border-[#0B5C84]'
          />
        </div>

        {/* Course */}
        <select
          name='course'
          value={formData.course}
          onChange={handleChange}
          autoComplete='off'
          suppressHydrationWarning
          className='w-full h-11 border border-gray-300 rounded px-4 text-sm outline-none focus:border-[#0B5C84]'
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
          className='w-full h-11 border border-gray-300 rounded px-4 text-sm outline-none focus:border-[#0B5C84]'
        >
          <option value=''>Select State</option>
          <option value='up'>Uttar Pradesh</option>
          <option value='delhi'>Delhi</option>
          <option value='mh'>Maharashtra</option>
        </select>

        {/* Disclaimer */}
        <p className='text-[11px] text-gray-500 leading-5'>
          I authorise SO to contact me with updates via
          SMS/Email/WhatsApp.
        </p>

        {/* Submit */}
        <button
          type='submit'
          className='w-full bg-[#0B5C84] hover:bg-[#084563] text-white font-semibold py-3 rounded transition duration-300'
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default CounselingForm