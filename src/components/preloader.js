import React, { useEffect } from "react"
import gsap from "gsap"

export default function Preloader() {
  useEffect(() => {
  const tl = gsap.timeline()
  tl.to('.preloader .word', { duration:3, opacity: 1, y: 0, stagger: 0.1, ease: "power2.out"})
  tl.to(".preloader .title", {  duration: .65, opacity:0}, '-=.5')
  tl.to(".logo-wrapper", { top: 0, duration: 1.35, ease: "power3.inOut"}, '-=.25')
  .to(".preloader", { opacity: 0, duration: 0.5, ease: "power2.out", pointerEvents: "none"})
}, [])

  const text = `A web development practice, led by Carl Beaverson. Partnering with leading designers and agencies to produce outstanding websites.`

  return (
    <div className='preloader flex'>
      <div className='logo-wrapper w-100 p20 grid grid-4'>
        <div className='logo--main alt'/>
        <p className='title'>
          {text.split(" ").map((word, i) => (
            <span key={i} className="word">
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
