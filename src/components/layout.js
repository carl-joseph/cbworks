import React from "react"
import Header from "./header"
import { ReactLenis } from "lenis/react"
import Footer from "./footer"
import "../scss/site.scss"

const SCROLL_OPTIONS = {
    duration: 1.2,
    orientation: "vertical",
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
}

export default function Layout({ children }) {
  return (
    <ReactLenis root options={SCROLL_OPTIONS}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ReactLenis>
  )
}
