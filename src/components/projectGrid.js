import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Grid({ projects }) {
  return (
    <div className='p20 mth flex flex-col gap-20 row-150'>
      {projects.map((project, index) => (
        <Project project={project.node} index={index+1} key={index} />
      ))}
    </div>
  )
}

const Project = ({project, index}) => {
  return (
    <div className='project flex flex-col gap-10'>
      <div className='grid gap-10'>
        <Media image={project.image} title={project.title} />
        <Media image={project.imageGallery[0]} title={project.title} />
        <Media image={project.imageGallery[1]} title={project.title} />
      </div>
      <div className='grid gap-10'>
        <div className='flex gap-5 sm-copy black'>
          <p>0.{index} {project.title}</p>
          <span>/</span>
          <a href='#'>Visit Site</a>
        </div>
        <div className='op-50 w-80'>
          {project.description}
        </div>
        <div className='flex op-50 space-between'>
          <p>{project.designCredit}</p>
          <p>{project.year}</p>
        </div>
      </div>
    </div>
  )
}


const Media = ({ image, title }) => {
  const img = image?.gatsbyImageData
  const isPortrait = img ? img.height > img.width : false
  return (
    <div className='bg-grey ratio-1-1 flex pos-rel'>
        <div className={`project-media bg-grey pos-rel z-2 ${isPortrait ? "ratio-9-19 portrait" : "ratio-8-5"}`}>
          {image ? <GatsbyImage image={image.gatsbyImageData} className='bg-image' alt={title || ""} /> : ""}
        </div>
    </div>
  )
}