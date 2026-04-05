import React, { useEffect, useMemo, useRef, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useLenis } from "lenis/react"

export default function ProjectFeed({ projects }) {
  const lenis = useLenis()
  const trackRef = useRef(null)
  const currentY = useRef(0)
  const targetY = useRef(0)
  const rafRef = useRef(null)
  const touchStartY = useRef(0)
  const [setHeight, setSetHeight] = useState(0)

  const allProjects = useMemo(() => [...projects, ...projects, ...projects], [projects])

  useEffect(() => {
    if (!lenis) return
    lenis.stop()
    return () => {
      lenis.start()
    }
  }, [lenis])

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return
      const items = trackRef.current.querySelectorAll(".project--feed-item")
      if (!items.length) return

      let total = 0
      for (let i = 0; i < projects.length; i++) {
        total += items[i].offsetHeight
      }
      setSetHeight(total)
      currentY.current = total
      targetY.current = total
    }

    measure()
    window.addEventListener("resize", measure)

    return () => {
      window.removeEventListener("resize", measure)
    }
  }, [projects])

  useEffect(() => {
    if (!setHeight || !trackRef.current) return
    const handleWheel = (e) => {
      targetY.current += e.deltaY
    }
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }
    const handleTouchMove = (e) => {
      const currentTouchY = e.touches[0].clientY
      const delta = touchStartY.current - currentTouchY
      targetY.current += delta
      touchStartY.current = currentTouchY
    }
    const animate = () => {
      currentY.current += (targetY.current - currentY.current) * 0.08
      if (currentY.current >= setHeight * 2) {
        currentY.current -= setHeight
        targetY.current -= setHeight
      }
      if (currentY.current <= 0) {
        currentY.current += setHeight
        targetY.current += setHeight
      }
      trackRef.current.style.transform = `translate3d(0, ${-currentY.current}px, 0)`
      rafRef.current = requestAnimationFrame(animate)
    }
    window.addEventListener("wheel", handleWheel, { passive: true })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [setHeight])

  return (
    <div className='project--feed'>
      <div className='project--feed-viewport p20'>
        <div className='project--feed-track max-600 ma' ref={trackRef}>
          {allProjects.map((project, index) => (
            <div className='project--feed-item' key={index}>
              <Project project={project.node} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Project = ({ project }) => {
  return (
    <div className='flex flex-col gap-10 pb40'>
      <div className='ratio-1-1 bg-grey flex pos-rel' style={{ background: project.backgroundColor?.rgb }}>
        <div className='project-media bg-grey ratio-8-5 pos-rel z-2'>
          {project.image ? <GatsbyImage image={project.image.gatsbyImageData} className='bg-image' alt={project.title || ""} /> : ""}
        </div>
        {project.background ? <GatsbyImage className='bg-image' image={project.background?.gatsbyImageData} alt={project.title || ""} /> : ""}
      </div>
      <div className='flex space-between'>
        <p className='sm-copy'>{project.title}</p>
        <p className='sm-copy'>More Info</p>
      </div>
    </div>
  )
}