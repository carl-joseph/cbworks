import React from "react"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
  return (
    <header className='masthead'>
      <div className='flex space-between p20 sm-copy'>
        <Link className='link' to='/'>
          <div className='logo--main'/>
        </Link>
        <div className='flex gap-20'>
          <p>Information</p>
          <Link to='/projects'>Work</Link>
          <p>Enquiry</p>
        </div>
      </div>
    </header>
  )
}
