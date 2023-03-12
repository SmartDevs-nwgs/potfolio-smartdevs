import './App.css'
import NavBar from './components/NavBar'
import Container from './components/Container'
import WorkSection from './components/WorkSection'
import InfoSection from './components/InfoSection'
import Contact from './components/Contact'
import { GlobalStyle } from './global/global'
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Container />
      <WorkSection />
      <InfoSection />
      <Contact />
    </>
  )
}

export default App
