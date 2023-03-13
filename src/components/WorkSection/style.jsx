import styled from 'styled-components'
import kenziehub1 from '../../assets/project-images/kenziehub/kenzielogin.jpg'
import kenziehub2 from '../../assets/project-images/kenziehub/kenzielogin2.jpg'
import kenziehub3 from '../../assets/project-images/kenziehub/kenziehub3.png'

import motorshop1 from '../../assets/project-images/motorshop/motorshop1.png'
import motorshop2 from '../../assets/project-images/motorshop/motorshop2.png'
import motorshop3 from '../../assets/project-images/motorshop/motorshop3.png'
import motorshop4 from '../../assets/project-images/motorshop/motorshop4.png'

import burguer1 from '../../assets/project-images/burguer/burguer1.png'

import seupet1 from '../../assets/project-images/seupet/seupet1.png'
import seupet2 from '../../assets/project-images/seupet/seupet2.png'

import kenziehabits1 from '../../assets/project-images/kenziehabits/kenziehabits1.png'
import kenziehabits2 from '../../assets/project-images/kenziehabits/kenziehabits2.png'

export const StyleWorkSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #080918 10%, #0e1a35 90%);
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
        cursor: pointer;
      }
      .first-project {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        backface-visibility: hidden;

        background-image: url(${motorshop2});
      }
      .first-project:hover {
        animation: motorshop 4s linear infinite 0s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        @keyframes motorshop {
          20% {
            background-image: url(${motorshop1});
          }
          40% {
            background-image: url(${motorshop3});
          }

          60% {
            background-image: url(${motorshop4});
          }
        }
      }
      .second-project {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        backface-visibility: hidden;

        background-image: url(${seupet1});
      }
      .second-project:hover {
        animation: seupet 3s linear infinite 0s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        @keyframes seupet {
          50% {
            background-image: url(${seupet2});
          }
        }
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
        background-color: var(--border2);
        cursor: pointer;
      }
      .third-project {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        backface-visibility: hidden;

        background-image: url(${burguer1});
      }
      .four-project {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        backface-visibility: hidden;

        background-image: url(${kenziehub1});
      }
      
      .four-project:hover {
        animation: kenziehub 3s linear infinite 0s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        @keyframes kenziehub {
          40% {
            background-image: url(${kenziehub2});
          }

          60% {
            background-image: url(${kenziehub3});
          }
        }
      }
      .five-project {
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        backface-visibility: hidden;

        background-image: url(${kenziehabits2});
      }
      .five-project:hover {
        animation: kenziehabits 3s linear infinite 0s;
        animation-timing-function: ease-in-out;
        animation-delay: 1s;
        @keyframes kenziehabits {
          50% {
            background-image: url(${kenziehabits1});
          }
        }
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
