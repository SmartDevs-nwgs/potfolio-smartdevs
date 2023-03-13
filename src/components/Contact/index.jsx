import { StyledContact } from './style'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <StyledContact id='contact'>
      <div className='contacts'>
        <h1>&lt;Contato&gt;</h1>
        <h2>
          Se interessou?<br></br> Entre em contato com a gente
        </h2>

        <div className='icons'>
          <Link
            to='https://api.whatsapp.com/send?phone=5544991053179'
            target='_blank'
          >
            <BsWhatsapp />
          </Link>
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact
