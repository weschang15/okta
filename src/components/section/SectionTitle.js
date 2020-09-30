import styled from "styled-components"

export const SectionTitle = styled.h2`
  border-top: 4px solid ${({ borderTopColor }) => borderTopColor};
  display: inline-block;
  padding-top: 12px;
  margin-bottom: 48px;
  color: ${({ textColor }) => textColor};
`

SectionTitle.defaultProps = {
  borderTopColor: "#fff",
  textColor: "#fff",
}
