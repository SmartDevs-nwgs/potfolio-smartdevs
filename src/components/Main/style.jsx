import styled from 'styled-components'

export const StyledMain = styled.div`
  background: linear-gradient(180deg, var(--purple2) -50%, #070816 100%);
  position: relative;
  top: 100px;
  width: 280px;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;

  .container {
    position: relative;
    top: 13px;
    border-radius: 16px;
    width: 90%;
    height: 100%;
    background: linear-gradient(180deg, #202738 0%, #070816 100%);
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
    width: 100%;
    margin-top: 5px;
  }
  .logo {
    color: white;
    font-size: 12px;
  }
  .search {
    background-color: #202738;
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
  .user-information {
    width: 50%;

    border: 1px solid #070816;
    margin-top: 25px;
    padding: 10px;

    .circle {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      background-color: gray;
    }
  }
`
