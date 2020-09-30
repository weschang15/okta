import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { CardGrid } from "../card/CardGrid"
import { ModalToggle } from "../modal/ModalToggle"

const LogoFarmWrapper = styled.div`
  margin: 96px 0;
`

export function LogoFarm() {
  const data = useStaticQuery(graphql`
    query {
      files: allFile(filter: { relativePath: { regex: "^/sponsors/" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const createCardGridItems = data => {
    return data.files.edges
      .map(edge => {
        return (
          <ModalToggle key={edge.node.id}>
            <Img
              style={{
                maxWidth: "84%",
                margin: "auto",
              }}
              fluid={edge.node.childImageSharp.fluid}
            />
          </ModalToggle>
        )
      })
      .reverse()
  }
  return (
    <LogoFarmWrapper>
      <CardGrid>{createCardGridItems(data)}</CardGrid>
    </LogoFarmWrapper>
  )
}
