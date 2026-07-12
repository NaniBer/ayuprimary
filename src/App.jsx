import Navigation from './components/Navigation'
import About from './components/About'
import Services from './components/Services'
import LocationHours from './components/LocationHours'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="location">
          <LocationHours />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App