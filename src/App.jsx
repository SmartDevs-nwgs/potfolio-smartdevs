import './App.css'
import NavBar from './components/NavBar'
import Container from './components/Container'
import { GlobalStyle } from './global/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Container />
    </>
  )
}

export default App
