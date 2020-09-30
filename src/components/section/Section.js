import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: auto;

  @media (max-width: 1400px) {
    max-width: 1180px;
  }

  @media (max-width: 1280px) {
    padding: 0 24px;
  }
`

const SectionElement = styled.section``

function Section({ children }) {
  return (
    <SectionWrapper>
      <SectionElement>{children}</SectionElement>
    </SectionWrapper>
  )
}

export default Section
