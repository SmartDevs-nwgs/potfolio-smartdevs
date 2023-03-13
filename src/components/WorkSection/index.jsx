import { useNavigate } from 'react-router'
import { StyleWorkSection } from './style'

const WorkSection = () => {
  const navigate = useNavigate()
  return (
    <StyleWorkSection id='work'>
      <div className='projects'>
        <div className='principal-projects'>
          <div
            className='first-project'
            onClick={() => {
              window.open('https://projeto-frontend-m3.vercel.app/')
            }}
          ></div>
          <div
            className='second-project'
            onClick={() => {
              window.open('https://projeto-frontend-m3.vercel.app/')
            }}
          ></div>
        </div>
        <div className='another-projects'>
          <div
            className='third-project'
            onClick={() => {
              window.open(
                'https://react-entrega-s1-hamburgueria-da-kenzie-axeellima.vercel.app/'
              )
            }}
          ></div>
          <div
            className='four-project'
            onClick={() => {
              window.open(
                'https://react-entrega-s2-formulario-de-cadastro-axeellima.vercel.app/'
              )
            }}
          ></div>

          <div
            className='five-project'
            onClick={() => {
              window.open('https://cuddly-engine-ff079d9f.pages.github.io/')
            }}
          ></div>
        </div>
      </div>
      <div className='contact-us-work'>
        <div className='comment1'>
          <h2>Curtiu nosso trabalho?</h2>
          <h2>Quer saber os valores?</h2>
        </div>
        <div className='bar'></div>
        <div className='comment2'>
          <h2>Quer fazer o seu site?</h2>
          <h2>Tem algum feedback?</h2>
        </div>
      </div>
      <div className='div-button'>
        <a href='#contact'>
          <button>Fale conosco</button>
        </a>
      </div>
    </StyleWorkSection>
  )
}
export default WorkSection
