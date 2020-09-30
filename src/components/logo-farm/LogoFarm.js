import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"
import { CardGrid } from "../card/CardGrid"
import { Modal } from "../modal/Modal"
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
          <ModalToggle
            key={edge.node.id}
            render={({ on, toggle }) => {
              return (
                on && (
                  <Modal onClose={toggle} isVisible={on}>
                    <Img
                      style={{
                        maxWidth: 200,
                        margin: "2em auto",
                      }}
                      fluid={edge.node.childImageSharp.fluid}
                    />
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </p>
                  </Modal>
                )
              )
            }}
          >
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
