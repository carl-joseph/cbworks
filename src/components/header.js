import React from "react"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
  return (
    <header>
      <div className='flex space-between p20 sm-copy'>
        <Link className='link' to='/'>
          <div className='logo--main'/>
        </Link>
        <p>Information</p>
        <p>Project Enquiry</p>
        <p>Contact</p>
      </div>
    </header>
  )
}
