import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import "./Layout.css"

export const Layout = ({ children }) => {
  return (
    <div>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </div>
  )
}
