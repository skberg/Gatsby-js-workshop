import React from 'react'
import Layout from '../../comp/Layout'
import { graphql,Link } from 'gatsby'
import '../../styles/project.css'
import Img from 'gatsby-image'
export default function index({data}) {

console.log(data)

const porjects = data.porjects.nodes

  return (
    <Layout>
    <div className="portfolio">
      <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <br></br>
      <div className='projects'>
        {porjects.map(porject =>(
          <Link to={'/projects/' + porject.frontmatter.slug} key={porject.id}>
            <div>
              {/*<Img fluid={porject.frontmatter.thumb.childImageSharp.fluid}/>*/}
              <Img fluid={porject.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{porject.frontmatter.title}</h3>
              <p>{porject.frontmatter.stack}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  )
}


//export page query
export const query = graphql`
query MyQuery {
  porjects:allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          id
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}



`

