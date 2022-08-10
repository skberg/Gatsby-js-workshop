import React from "react"
import {  graphql, Link } from 'gatsby'
import Layout from "../comp/Layout"
import '../styles/index.css'
import Img from "gatsby-image"
export default function Home({ data }) {

//dd
  

  return (
    <Layout>
      <section className="hederholder">
        <div className="header">
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Drammen.</p>
          <Link  to="/projects" className="btn">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
 
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
