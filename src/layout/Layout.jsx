import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main className='relative min-h-screen bg-primary'>{children}</main>
      <Footer />
    </>
  )
}
