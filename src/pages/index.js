import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Section from "../components/section/Section"
import { SectionContent } from "../components/section/SectionContent"
import { SectionTitle } from "../components/section/SectionTitle"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <SectionTitle>Welcome!</SectionTitle>
      <SectionContent>
        <p>Use the links below to navigate between pages.</p>
        <p>
          Not everything on my wishlist was completed but I was able to complete
          all tasks.
        </p>
        <p>
          If I had the time, I would've paginated the posts archive and
          incorporated a primary navigation.
        </p>
        <Link to="/posts">Go to Posts archive</Link> <br />
        <Link to="/sponsors">Go to Sponsors page</Link> <br />
        <Link to="/contact">Go to Contact page</Link>
      </SectionContent>
    </Section>
  </Layout>
)

export default IndexPage
