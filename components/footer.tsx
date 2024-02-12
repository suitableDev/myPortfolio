import React from 'react'
import { basicFetch, footerData } from '@/sanity/lib/fetchData'
import { PortableText } from '@portabletext/react'

export default async function Footer() {
  const footer = await basicFetch(footerData)
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
    <small className="mb-2 block text-xs">
      {footer.copyright}
    </small>
    <span className='text-sm'>
    <PortableText value={footer.text} />
    </span>
  </footer>
  )
}
