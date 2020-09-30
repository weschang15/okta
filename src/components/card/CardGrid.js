import styled from "styled-components"

export const CardGrid = styled.div`
  @media (min-width: 479px) {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: 200px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 200px);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 200px);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 200px);
  }
`
