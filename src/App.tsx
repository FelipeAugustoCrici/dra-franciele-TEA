import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Rights from './components/Rights'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

const WHATSAPP_NUMBER = '5511999999999'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre meus direitos relacionados ao autismo.'

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Rights />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
