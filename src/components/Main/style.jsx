import styled from 'styled-components'

export const StyledMain = styled.div`
  background: linear-gradient(180deg, var(--purple2) 0%, #080918e9 90%);
  position: relative;
  top: 100px;
  width: 80%;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;

  .container {
    position: relative;
    top: 11px;
    border-radius: 16px;
    width: 91%;
    height: 100%;
    background: linear-gradient(180deg, #202738 -40%, #080918 70%);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-top: 10px;
  }
  .logo {
    color: white;
    user-select: none;
    font-size: 12px;
  }
  .search {
    background-color: #192339;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    padding-left: 5px;
    padding-right: 5px;
    border: 1px solid white;
    color: white;
    font-size: 12px;
    width: 50%;
    p {
      user-select: none;
    }
    .lupa {
      margin-top: 2px;
      margin-left: 2px;
    }
  }
  .icons {
    color: white;
    display: flex;
    justify-content: center;
    gap: 3px;
  }
  .user-icon {
    display: none;
  }
  .user-information {
    user-select: none;
    width: 90%;
    border-radius: 5px;
    display: flex;

    border: 1px solid var(--border);
    margin-top: 25px;
    padding: 10px;

    .circle {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      background-color: var(--grey3);
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 7px;
      margin-left: 15px;
    }
    .info1 {
      border-radius: 16px;
      width: 50px;
      height: 10px;
      background-color: var(--border);
    }
    .info2 {
      border-radius: 16px;
      width: 80px;
      height: 10px;
      background-color: var(--border);
    }
    .info3 {
      border-radius: 16px;
      width: 110px;
      height: 10px;
      background-color: var(--border);
    }
  }
  .post {
    user-select: none;
    margin-top: 10px;
    width: 90%;
    height: 60px;
    background: linear-gradient(180deg, var(--border) 80%, #080918 100%);
    border-radius: 8px;
  }
  .team-smartdev {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    user-select: none;
    margin-top: 40px;

    h1 {
      opacity: 1;
      background: -webkit-linear-gradient(var(--purple1) 55%, #ffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 36px;
      margin-bottom: 5px;
    }
    p {
      color: var(--grey3);
      font-size: 10px;
    }
    button {
      border-style: none;
      background: linear-gradient(180deg, var(--purple1) 50%, var(--pink) 100%);
      width: 200px;
      height: 40px;
      margin-top: 15px;
      border-radius: 16px;
    }
    button:hover {
      background: var(--grey1);
      color: var(--purple1);
    }
  }
  @media (min-width: 450px) {
    width: 70%;

    .container {
      width: 93%;
    }
    .team-smartdev {
      margin-top: 40px;
    }
  }
  @media (min-width: 700px) {
    width: 620px;
    height: 320px;

    .user-icon {
      display: block;
    }
    .logo {
      font-size: 14px;
    }
    .search {
      font-size: 14px;
      .lupa {
        width: 18px;
        height: 18px;
      }
    }
    .icons svg {
      width: 18px;
      height: 18px;
    }
    .container {
      top: 20px;
      width: 94%;
    }
    .user-information {
      border: 2px solid var(--border);

      .circle {
        height: 80px;
        width: 80px;
      }
      .info {
        gap: 10px;
      }
      .info1 {
        width: 120px;
        height: 20px;
      }
      .info2 {
        width: 200px;
        height: 20px;
      }
      .info3 {
        width: 280px;
        height: 20px;
      }
    }
    .post {
      height: 85px;
      margin-top: 20px;
    }
    .team-smartdev {
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 14px;
      }
      button {
        margin-top: 20px;
        width: 300px;
        font-size: 14px;
      }
    }
  }
  @media (min-width: 900px) {
    .team-smartdev {
      margin-top: 80px;

      h1 {
        font-size: 56px;
      }
      p {
        font-size: 16px;
      }
      button {
        margin-top: 40px;
        width: 300px;
        font-size: 16px;
      }
    }
  }
`
