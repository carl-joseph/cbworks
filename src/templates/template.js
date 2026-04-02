import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Template() {
  return <Layout></Layout>
}

export const Head = () => <Seo title='Page Template' />
