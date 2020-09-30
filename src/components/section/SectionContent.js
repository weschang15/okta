import PropTypes from "prop-types"
import styled from "styled-components"

export const SectionContent = styled.div`
  max-width: 90%;
  margin: auto;
  ${({ textAlign }) => (textAlign.length ? `text-align: ${textAlign};` : "")}
  ${({ textColor }) => (textColor.length ? `color: ${textColor};` : "")}
`

SectionContent.defaultProps = {
  textAlign: "",
  textColor: "",
}

SectionContent.propTypes = {
  textAlign: PropTypes.string,
  textColor: PropTypes.string,
}
