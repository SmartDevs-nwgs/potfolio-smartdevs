import { StyledNavBar } from './style'

const NavBar = () => {
  return (
    <StyledNavBar>
      <div className='container'>
        <a heref='' onClick={() => window.scrollTo({ top: 0 })}>
          Início
        </a>
        <a href='#work'>Projetos</a>
        <a href='#about'>Sobre</a>
        <a href='#contact'>Contato</a>
      </div>
    </StyledNavBar>
  )
}

export default NavBar
