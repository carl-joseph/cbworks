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
      ©{new Date().getFullYear()} CB WORKS, ALL RIGHTS RESERVED
    </div>
  )
}

const Socials = () => {
  return (
    <div className='op-50'>
      <a target='_blank' rel='norefferer' href='https://x.com/CarlBeaverson'>X</a>, <a target='_blank' rel='norefferer' href='https://instagram.com/cb.works'>Instagram</a>, <a target='_blank' rel='norefferer' href='https://linkedin.com/cb.works'>LinkedIn</a> 
    </div>
  )
}