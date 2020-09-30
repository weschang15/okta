import React from "react"
import Layout from "../components/layout"
import { LogoFarm } from "../components/logo-farm/LogoFarm"
import Section from "../components/section/section"
import { SectionContent } from "../components/section/SectionContent"
import { SectionTitle } from "../components/section/SectionTitle"
import SEO from "../components/seo"

const SponsorsPage = () => {
  return (
    <Layout>
      <SEO title="Sponsors" />
      <Section>
        <SectionTitle>Sponsors</SectionTitle>
        <SectionContent>
          <p className="text-align-center">
            Oktane20 is fueled by support of our sponsors. Generate business
            with a forward-thinking group of IT professionals, and increase
            exposure for your solutions and services. Make sure you are a part
            of more strategic IT discussions that center on building new and
            differentiated experiences in an increasingly mobile and
            cloud-centric world.
          </p>
          <p className="text-align-center">
            Contact us at sponsorships@okta.com if you are interested in
            sponsoring.
          </p>
          <p className="text-align-center">
            <a href="https://www.okta.com/sites/default/files/Oktane20Live_Sponsorship_Prospectus_v5_03062020.pdf?_ga=2.88178907.1921147415.1601429013-170957558.1601429013">
              View the sponsorship prospectus
            </a>
          </p>
          <LogoFarm />
        </SectionContent>
      </Section>
    </Layout>
  )
}

export default SponsorsPage
