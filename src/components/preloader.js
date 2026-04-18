import React, { useEffect } from "react"
import gsap from "gsap"

export default function Preloader() {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to('.preloader .word', { duration:3, opacity: 1, y: 0, stagger: 0.1, ease: "power2.out"})
    tl.to(".logo-wrapper", { top: 0, duration: 1.15, ease: "power3.inOut"}, '-=1')
    tl.to(".preloader .title", {  duration: .5, opacity:0}, '-=.5')
    tl.to(".preloader", { opacity: 0, duration: 0.65, pointerEvents: "none"})
    tl.fromTo(".project--feed-viewport",{y:70}, { y: 0, duration:1.75 }, '-=.75')
  }, [])

  const text = `A web development practice, led by Carl Beaverson. Partnering with leading designers and agencies to produce outstanding websites.`

  return (
    <div className='preloader flex'>
      <div className='text-wrapper w-100 p20 grid grid-4'>
        <div/>
        <p className='title'>
          {text.split(" ").map((word, i) => (
            <span key={i} className="word">
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
      <div className='bg-image flex'>
        <div className='logo-wrapper w-100 p20 grid grid-4'>
          <div className='logo--main alt'/>
        </div>
      </div>
    </div>
  )
}
