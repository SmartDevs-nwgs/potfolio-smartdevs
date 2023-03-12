import { StyledInfoSection } from './style'
import axel from '../../assets/images/axel.jpeg'
import matheus from '../../assets/images/matheus.jpeg'
import { AiFillGithub } from 'react-icons/ai'
import { FiLinkedin } from 'react-icons/fi'

const InfoSection = () => {
  return (
    <>
      <StyledInfoSection>
        <div className="info-devs">
          <h1> &lt;Quem somos&gt;</h1>
          <h2>
            Uma agência de desenvolvedores focada na criação de websites e
            aplicativos responsivos, acessíveis e eficientes para melhorar a
            experiência do usuário.
          </h2>
          <h1>&lt;Nosso time&gt;</h1>
        </div>
        <section className="team">
          <div className="profile">
            <img className="profile-img" src={axel} />
            <h2>Axel Lima</h2>
            <p>20 anos</p>
            <h3>Desenvolvedor Full Stack</h3>
            <div className="courses">
              <a href="https://www.linkedin.com/in/axeellima/" target="_blank">
                <FiLinkedin className="redirect-link" />
              </a>
              <a href="https://github.com/Axeellima" target="_blank">
                <AiFillGithub className="redirect-link" />
              </a>
            </div>
          </div>
          <div className="bar"></div>
          <div className="profile">
            <img className="profile-img" src={matheus} />
            <h2>Matheus</h2>
            <p>20 anos</p>
            <h3>Desenvolvedor Front End</h3>
            <div className="courses">
              <div className="courses">
                <a
                  href="https://www.linkedin.com/in/matheus-guilherme-903351253/"
                  target="_blank"
                >
                  <FiLinkedin className="redirect-link" />
                </a>
                <a href="https://github.com/MatheusGuiB" target="_blank">
                  <AiFillGithub className="redirect-link" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </StyledInfoSection>
    </>
  )
}

export default InfoSection
