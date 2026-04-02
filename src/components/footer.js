import React from "react"

export default function Footer() {
  return (
    <footer className='p20'>
      © {new Date().getFullYear()} &middot; Built by
      {` `}
      <a href='https://c-b.works'>CB Works</a>
    </footer>
  )
}
