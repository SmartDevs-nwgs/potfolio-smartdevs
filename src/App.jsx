import './App.css'
import NavBar from './components/NavBar'
import Container from './components/Container'
import WorkSection from './components/WorkSection'
import { GlobalStyle } from './global/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Container />
      <WorkSection />
    </>
  )
}

export default App
