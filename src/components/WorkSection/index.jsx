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
          <a
            href="https://github.com/pages/auth?nonce=f69a323e-f779-4956-9605-f9976b340948&page_id=28416090&path=Lw"
            target="_blank"
          >
            <div className="third-project"></div>
          </a>
          <a href="https://projeto-frontend-m3.vercel.app/">
            <div className="four-project"></div>
          </a>
          <a href="">
            <div className="five-project"></div>
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
