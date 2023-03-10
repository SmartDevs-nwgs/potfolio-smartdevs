import { StyledMain } from './style'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { AiFillHome } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { TbMessageCircle2Filled } from 'react-icons/tb'
import { BsFillPersonFill } from 'react-icons/bs'

const Main = () => {
  return (
    <StyledMain>
      <div className="container">
        <div className="content">
          <div className="header">
            <a href="" className="logo">
              Logo
            </a>
            <div className="search">
              <p>Pesquisar</p>
              <RxMagnifyingGlass className="lupa" />
            </div>
            <div className="icons">
              <AiFillHome />
              <TbMessageCircle2Filled />
              <AiFillHeart />
              <BsFillPersonFill />
            </div>
          </div>
          <div className="user-information">
            <div className="circle"></div>
            <div className="info">
              <div className="info1"></div>
              <div className="info2"></div>
              <div className="info3"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledMain>
  )
}

export default Main
