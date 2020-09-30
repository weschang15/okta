import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Toggle from "../toggle/Toggle"

const ModalButton = styled.button`
  background: #292654;
  cursor: pointer;
  height: 100%;
  width: 100%;
`

export function ModalToggle({ children, render }) {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            {render({ on, toggle })}
            <ModalButton aria-label="Open modal" onClick={toggle}>
              {children}
            </ModalButton>
          </>
        )
      }}
    </Toggle>
  )
}

ModalToggle.defaultProps = {
  render: () => null,
}

ModalToggle.propTypes = {
  render: PropTypes.func.isRequired,
}
