import React from "react"
import { Link } from "gatsby"

export default function Header({ siteTitle }) {
  return (
    <header>
      <div className='flex p20'>
        <Link className='link' to='/'>
          {siteTitle}
        </Link>
      </div>
    </header>
  )
}
