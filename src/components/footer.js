import React from "react"

export default function Footer() {
  return (
    <footer className='colophon'>
      <div className='p20 flex space-between sm-copy'>
        <Socials />
        <Copyright />
      </div>
    </footer>
  )
}

const Copyright = () => {
  return (
    <div className='op-50'>
      ©{new Date().getFullYear()} CB WORKS, ALL RIGHTs RESERVED
    </div>
  )
}

const Socials = () => {
  return (
    <div>
      Socials
    </div>
  )
}