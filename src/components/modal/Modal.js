import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import Portal from "../portal/Portal"

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.75);
  align-items: center;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.1)
  }

  to {
    opacity: 1;
    tranform: scale(1)
  }
`

const ModalWrapper = styled.div`
  position: relative;
  max-height: 90vh;
  width: 100%;
  max-width: 900px;
  margin: auto;
  padding: 48px;
  background: #13499e;
  border-radius: 5px;
  transition: transform 0.35s ease-in-out, opacity 0.35s ease-in-out;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  animation: ${popIn} 0.35s ease-in-out;
`

const ModalCloseButton = styled.button`
  cursor: pointer;
  color: #fff;
  height: 50px;
  width: 50px;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
`

const ModalContent = styled.div`
  text-align: center;
`

export function Modal({ children, onClose, isVisible }) {
  return (
    <Portal>
      <ModalBackdrop>
        <ModalWrapper className={isVisible ? "is-visible" : ""}>
          <ModalCloseButton onClick={onClose}>
            <svg x="0" y="0" viewBox="0 0 79.2 79.2">
              <line
                strokeWidth="2px"
                stroke="currentColor"
                x1="23.3"
                y1="55.9"
                x2="55.9"
                y2="23.3"
              ></line>
              <line
                strokeWidth="2px"
                stroke="currentColor"
                x1="23.3"
                y1="23.3"
                x2="55.9"
                y2="55.9"
              ></line>
            </svg>
          </ModalCloseButton>
          <ModalContent>{children}</ModalContent>
        </ModalWrapper>
      </ModalBackdrop>
    </Portal>
  )
}

Modal.defaultProps = {
  onClose: () => null,
  isVisible: false,
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
}
