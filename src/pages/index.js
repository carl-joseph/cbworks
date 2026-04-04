import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import ProjectFeed from "../components/projectFeed"

export default function IndexPage() {
  return (
    <Layout>
       <ProjectFeed />
    </Layout>
  )
}

export const Head = () => <Seo title='' />
