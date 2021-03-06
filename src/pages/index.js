import React from "react"
import { SimpleHero } from "../component/SimpleHero"
import { Layout } from "../component/Layout"
import { Banner } from "../component/Banner"
import { Link } from "gatsby"
import { About } from "../component/Home/About"
import { Services } from "../component/Home/Services"
export default () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod nec ante viverra tincidunt"
        >
          <Link to="/tours" className="btn-white">
            Explore Tours
          </Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
