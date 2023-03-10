import styled from 'styled-components'

export const StyledNavBar = styled.div`
  width: 100vw;
  height: 80px;
  position: absolute;
  top: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  z-index: 1;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
  }
  a {
    text-decoration: none;
    color: #98a1c0;
    font-size: 16px;
  }
`
