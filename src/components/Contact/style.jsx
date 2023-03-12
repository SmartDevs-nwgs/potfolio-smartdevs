import styled from 'styled-components'

export const StyledContact = styled.div`
  height: 300px;
  padding-top: 100px;
  a {
    color: gray;
  }
  a:hover {
    color: blue;
  }
  .contacts {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    gap: 20px;
    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 20px;
    }
  }
  .icons {
    font-size: 20px;
    justify-content: center;
    display: flex;
    gap: 10px;
  }
`
