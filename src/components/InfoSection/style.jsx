import styled from 'styled-components'

export const StyledInfoSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-top: 50px;
  a {
    color: gray;
  }
  a:hover {
    color: var(--pink);
  }

  .info-devs {
    display: flex;
    flex-direction: column;
    color: white;
    gap: 50px;

    h1 {
      font-size: 22px;
    }
    h2 {
      font-size: 20px;
    }
  }

  .team {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    color: white;
    text-align: center;
    gap: 5px;

    .profile {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      text-align: center;
    }
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
    .bar {
      border-radius: 2px;
      width: 2px;
      height: 360px;
      background-color: white;
    }
    .courses {
      display: flex;
      gap: 10px;
      padding-top: 10px;
      .redirect-link {
        width: 30px;
        height: 30px;
      }
    }

    h3 {
    }
    p {
      color: var(--grey3);
    }
  }
  @media (min-width: 450px) {
    .info-devs {
      h2 {
        width: 450px;
      }
    }
  }
  @media (min-width: 700px) {
    .team {
      .profile {
        width: 300px;
      }
    }
  }
  @media (min-width: 900px) {
    .info-devs {
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 30px;
        width: 850px;
      }
    }
    .team {
      gap: 50px;
    }
  }
`
