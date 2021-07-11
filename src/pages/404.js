import React from "react"
import { Layout } from "../component/Layout"
import * as styles from "../css/error.module.css"
import { Link } from "gatsby"
import { Banner } from "../component/Banner"
export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Opps it's a dead end">
          <Link to="/" className="btn-white">
            Back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
