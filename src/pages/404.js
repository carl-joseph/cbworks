import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

export default function NotFoundPage() {
  return (
    <Layout>
      <h1>404: Not Found</h1>
      <p>You've just hit a page that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = () => <Seo title='404: Not Found' />
