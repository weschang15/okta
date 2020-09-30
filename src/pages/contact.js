import React from "react"
import { ContactForm } from "../components/form/ContactForm"
import Layout from "../components/layout"
import Section from "../components/section/section"
import { SectionContent } from "../components/section/SectionContent"
import { SectionTitle } from "../components/section/SectionTitle"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionContent>
          <ContactForm />
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default ContactPage
