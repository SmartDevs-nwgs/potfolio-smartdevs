import styled from 'styled-components'
import loginKenzie from '../../assets/project-images/kenzielogin.jpg'
import kenzieLogin from '../../assets/project-images/kenzielogin2.jpg'

export const StyleWorkSection = styled.section`
  width: 100vw;
  height: 100vh;
  .projects {
    width: 100%;
    height: 300px;
    display: flex;
    flex-wrap: wrap;

    .principal-projects {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: 10px;
      gap: 15px;
      div {
        border-radius: 12px;
        width: 46%;
        height: 110px;
        background-image: url(${loginKenzie});
        background-size: contain;
        background-repeat: no-repeat;
      }
      div:hover {
        background-image: url(${kenzieLogin});
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    .another-projects {
      display: flex;
      width: 100%;
      justify-content: center;

      gap: 10px;
      div {
        border-radius: 12px;
        width: 30%;
        height: 80px;
        background-color: var(--border);
      }
    }
  }
  .contact-us-work {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 10px;
    color: white;

    .bar {
      border-radius: 2px;
      width: 4px;
      height: 150px;
      background-color: white;
    }
    .comment1 {
      padding-top: 10px;
      font-size: 10px;
      display: flex;
      flex-direction: column;
      gap: 45px;
    }
    .comment2 {
      padding-top: 40px;
      font-size: 10px;
      display: flex;
      flex-direction: column;
      gap: 55px;
    }
  }
  .div-button {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    button {
      background: linear-gradient(180deg, var(--purple1) 50%, var(--pink) 100%);
      border-radius: 18px;
      width: 200px;
      height: 40px;
    }
    button:hover {
      background: var(--grey1);
      color: var(--purple1);
    }
  }
  @media (min-width: 450px) {
    .projects {
      height: auto;
      .principal-projects {
        gap: 15px;
        div {
          width: 210px;
          height: 110px;
        }
      }
      .another-projects {
        gap: 10px;
        div {
          width: 138px;
          height: 80px;
        }
      }
    }
    .contact-us-work {
    }
  }
  @media (min-width: 700px) {
    .projects {
      padding-top: 0px;
      .principal-projects {
        gap: 16px;
        div {
          width: 280px;
          height: 150px;
        }
      }
      .another-projects {
        gap: 12px;
        div {
          width: 185px;
          height: 120px;
        }
      }
    }
    .contact-us-work {
    }
  }
  @media (min-width: 900px) {
    .projects {
      height: auto;
      gap: 10px;
      .principal-projects {
        gap: 20px;
        div {
          width: 350px;
          height: 200px;
        }
      }
      .another-projects {
        gap: 15px;
        div {
          width: 231px;
          height: 150px;
        }
      }
    }
    .contact-us-work {
      .bar {
        height: 200px;
      }
      .comment1 {
        padding-top: 10px;
        font-size: 12px;
        gap: 65px;
      }
      .comment2 {
        padding-top: 55px;
        font-size: 12px;
        gap: 75px;
      }
    }
    .div-button {
      margin-top: 40px;

      button {
        border-radius: 18px;
        width: 250px;
        height: 40px;
        font-size: 16px;
      }
    }
  }
  @media (min-width: 1200px) {
    .projects {
      .principal-projects {
        div {
          width: 480px;
          height: 270px;
        }
      }
      .another-projects {
        gap: 15px;
        div {
          width: 317px;
          height: 190px;
        }
      }
    }
    .contact-us-work {
      .comment1 {
        font-size: 14px;
      }
      .comment2 {
        font-size: 14px;
      }
    }
    .div-button button {
      font-size: 18px;
    }
  }
`
