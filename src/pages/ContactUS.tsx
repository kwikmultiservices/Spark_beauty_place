import React from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import ContactUsBanner from '../comp/ContactUsBanner'
import ContactUs from '../comp/ContactUsMain'
import HairShowcase from '../comp/HairShowcase'
import ContactInfo from '../comp/ContactInfo'

function ContactUS() {
  return (
    <div>
        <Navbar/>
        <ContactUsBanner/>
        <ContactInfo/>
        <ContactUs/>
        <HairShowcase/>
        <Footer/>
    </div>
  )
}

export default ContactUS