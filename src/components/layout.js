/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "./layout.css"

const LayoutWrapper = styled.div`
  background-color: #13499e;
  padding: 96px 0;
`

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
