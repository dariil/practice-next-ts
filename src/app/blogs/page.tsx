import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Blog' //Ignores the template metadata from the root layout
  },
}

export default function page() {
  return (
    <>
        <h1>Blogs Page</h1>
    </>
  )
}
