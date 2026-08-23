import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"


export default function Grid({ projects }) {
  return (
    <div className='p20 mth m-m0 m-mt40 flex flex-col gap-20 row-150 m-pr0 m-pl0'>
      {projects.map((project, index) => (
        <Project project={project.node} index={index+1} key={index} />
      ))}
    </div>
  )
}

const Project = ({project, index}) => {
  var projectIndex = index;
  return (
    <div className='project'>
      <Swiper className='project-gallery' slidesPerView={1.15} slidesOffsetBefore={20} slidesOffsetAfter={20} spaceBetween={10} breakpoints={{ 768: { slidesPerView: 3, slidesOffsetBefore: 0, slidesOffsetAfter: 0, enabled: false } }}>
        {project.imageGallery.map((image, index) => (
          <SwiperSlide key={image.id || index}>
            <div className='flex flex-col gap-10'>
              <Media image={image} title={project.title} link={project.link} />
              {( index === 0 ? <Title title={project.title} index={projectIndex} link={project.link} />:'' )}
              {( index === 1 ? <Description description={project.description} />:'' )}
              {( index === 2 ? <Credit credit={project.designCredit} year={project.year} />:'' )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
} 

const Title = ({title, index, link}) => {
  return (
    <div className='flex gap-5 sm-copy black'>
      <p>{(index < 10 ? '0':'')}{index}. {title}</p>
      {( link ? <><span className='grey'>/</span><a className='link-gr' target='_blank' rel='noreferrer' href={link}>Visit Site</a></>:'')}
    </div>
  )
}

const Description = ({description}) => {
  return (
    <div className='op-50 w-90 m-100'>
      {description}
    </div>
  )
}

const Credit = ({year, credit}) => {
  return (
    <div className='flex op-50 space-between'>
      <p>{credit}</p>
      <p>{year}</p>
    </div>
  )
}


const Media = ({ image, title, link }) => {
  const img = image?.gatsbyImageData
  const isPortrait = img ? img.height > img.width : false
  const video = image.customData.video; 
  return (
    <div className='bg-grey ratio-1-1 flex pos-rel'>
      <div className={`bg-grey project-media  pos-rel z-2 ${isPortrait ? "ratio-9-19 portrait" : "ratio-8-5"}`}>
        <a className='bg-image z-2' href={link} target='_blank' rel='noreferrer'/>
        {image ? <GatsbyImage image={image.gatsbyImageData} className='bg-image' alt={title || ""} /> : ""}
        {video ? <video src={video} playsInline autoPlay muted loop className='bg-image' />:''}
      </div>
    </div>
  )
}