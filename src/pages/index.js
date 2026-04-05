import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ProjectFeed from "../components/projectFeed"

export default function IndexPage({data}) {
  var projects = data.projects
  return (
    <Layout preloader>
      <ProjectFeed projects={projects.edges} />
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