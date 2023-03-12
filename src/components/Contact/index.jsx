import { StyledContact } from './style'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <StyledContact>
      <div className="contacts">
        <h1>&lt;Contato&gt;</h1>
        <h2>
          Se interessou?<br></br> Entre em contato com a gente
        </h2>

        <div className="icons">
          <a href="https://wa.me/4491053179">
            <BsWhatsapp className="whatsapp" />
          </a>
          <a href="https://github.com/SmartDevs-nwgs">
            <AiFillGithub className="linkedin" />
          </a>
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact
