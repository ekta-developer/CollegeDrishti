'use client'

import { homeSections } from './homeData'

export default function HomePage() {
  return (
    <div>
      {homeSections.map(section => (
        <div key={section.id}>{section.component}</div>
      ))}
    </div>
  )
}