import React from "react"
import { Title } from "../Title"
import * as styles from "../../css/about.module.css"
import img from "../../images/defaultBCG.jpeg"
export const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About " subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about image" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the diffrence</h4>

          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}
