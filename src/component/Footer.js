import React from "react"
import { Link } from "gatsby"
import * as styles from "../css/footer.module.css"

import links from "../constants/Links"
import socialIcons from "../constants/social-icons"
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.mpat}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Tembea travel company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  )
}
