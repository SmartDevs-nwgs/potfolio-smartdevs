import styled from 'styled-components'

export const StyledContact = styled.div`
  height: 300px;
  padding-top: 100px;
  padding-bottom: 400px;
  background-color: #080918;
  a {
    color: gray;
  }
  a:hover {
    color: var(--grey1);
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
      margin-top: 50px;
      font-size: 20px;
    }
  }
  .icons {
    margin-top: 50px;
    font-size: 20px;
    justify-content: center;
    display: flex;
    gap: 10px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  @media (min-width: 900px) {
    .contacts {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 26px;
      }
    }
  }
`
