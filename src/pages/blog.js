import React from "react"
import { Link } from "gatsby"
import { Layout } from "../component/Layout"
// import { graphql } from "gatsby"

const blog = () => {
  return (
    <Layout>
      hello from blog<Link to="/">Home</Link>
    </Layout>
  )
}

export default blog
