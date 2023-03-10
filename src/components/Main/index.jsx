import { StyledMain } from './style'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { TbMessageCircle2Filled } from 'react-icons/tb'
import { BsFillPersonFill, BsArrowDownCircle } from 'react-icons/bs'

const Main = () => {
  return (
    <StyledMain>
      <div className='container'>
        <div className='content'>
          <div className='header'>
            <h1 className='logo'>Logo</h1>
            <div className='search'>
              <p>Pesquisar</p>
              <RxMagnifyingGlass className='lupa' />
            </div>
            <div className='icons'>
              <AiFillHome />
              <TbMessageCircle2Filled />
              <AiFillHeart />
              <BsFillPersonFill className='user-icon' />
            </div>
          </div>
          <div className='user-information'>
            <div className='circle'></div>
            <div className='info'>
              <div className='info1'></div>
              <div className='info2'></div>
              <div className='info3'></div>
            </div>
          </div>
          <section className='post'></section>
          <div className='team-smartdev'>
            <h1>SmartDevs</h1>
            <p>Um time de especialistas em React e Node ou</p>
            <p>a solução em desenvolvimento para o seu negócio</p>

            <button>Conheça nosso trabalho</button>
          </div>
        </div>
      </div>
    </StyledMain>
  )
}

export default Main
