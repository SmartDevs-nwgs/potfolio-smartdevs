import { StyleWorkSection } from './style'

const WorkSection = () => {
  return (
    <StyleWorkSection>
      <div className="projects">
        <div className="principal-projects">
          <a href="">
            <div className="first-project"></div>
          </a>
          <a
            href="https://react-entrega-s2-formulario-de-cadastro-axeellima.vercel.app/"
            target="_blank"
          >
            <div className="second-project"></div>
          </a>
        </div>
        <div className="another-projects">
          <a href="">
            <div></div>
          </a>
          <a href="">
            <div></div>
          </a>
          <a href="">
            <div></div>
          </a>
        </div>
      </div>
      <div className="contact-us-work">
        <div className="comment1">
          <h2>Curtiu nosso trabalho?</h2>
          <h2>Quer saber os valores?</h2>
        </div>
        <div className="bar"></div>
        <div className="comment2">
          <h2>Quer fazer o seu site?</h2>
          <h2>Tem algum feedback?</h2>
        </div>
      </div>
      <div className="div-button">
        <button>Fale conosco</button>
      </div>
    </StyleWorkSection>
  )
}
export default WorkSection
