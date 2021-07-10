import React from "react"
import { Link } from "gatsby"
import { Layout } from "../component/Layout"
export default function blog() {
  return (
    <Layout>
      hello from blog<Link to="/">Home</Link>
    </Layout>
  )
}
