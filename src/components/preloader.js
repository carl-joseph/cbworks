import React, { useEffect } from "react"
import gsap from "gsap"

export default function Preloader() {
  useEffect(() => {
  const tl = gsap.timeline()
  tl.to(".preloader .title", {  duration: .65, opacity:1})
  tl.to(".preloader .title", {  duration: .35, delay:1.5, opacity:0})
  tl.to(".logo-wrapper", { top: 0, duration: 1.35, ease: "power3.inOut"}, '-=.25')
  .to(".preloader", { opacity: 0, duration: 0.5, ease: "power2.out", pointerEvents: "none"})
}, [])
  return (
    <div className='preloader flex'>
      <div className='logo-wrapper w-100 p20 grid grid-4'>
        <div className='logo--main'/>
        <p className='title'>A web development practice, led by Carl Beaverson. Partering with leading designers and agencies to produce outstanding websites.</p>
      </div>
    </div>
  )
}
