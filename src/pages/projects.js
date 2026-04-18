import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ProjectGrid from "../components/projectGrid"
import Spacer from "../components/spacer"

export default function ProjectPage({data}) {
  var projects = data.projects
  return (
    <Layout>
      <Spacer />
      <ProjectGrid projects={projects.edges} />
      <Spacer />
    </Layout>
  )
}

export const Head = () => <Seo title='' />

export const query = graphql`
    query PageQuery {
      projects:allDatoCmsProject(sort: {position: ASC }) {
        edges {
          node {
            title
            slug
            image {
              gatsbyImageData
            }
            imageGallery {
              gatsbyImageData
            }
            backgroundColor {
              rgb
            }
            background {
              gatsbyImageData
            }
          }
        }
      }
    }       
`