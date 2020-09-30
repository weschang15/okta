import React from "react"
import styled from "styled-components"
import Toggle from "../toggle/Toggle"

const ModalButton = styled.button`
  background: #292654;
  cursor: pointer;
  height: 100%;
  width: 100%;
`

export function ModalToggle({ children, content }) {
  return (
    <Toggle>
      {({ on, toggle }) => {
        return (
          <>
            {on && <div>{content}</div>}
            <ModalButton aria-label="Open modal" onClick={toggle}>
              {children}
            </ModalButton>
          </>
        )
      }}
    </Toggle>
  )
}
