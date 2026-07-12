import Navigation from './components/Navigation'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Staff from './components/Staff'
import OrganizationalStructure from './components/OrganizationalStructure'
import VideoGallery from './components/VideoGallery'
import SisterCompanies from './components/SisterCompanies'
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
        
        <section id="stats">
          <Stats />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="staff">
          <Staff />
        </section>
        
        <section id="structure">
          <OrganizationalStructure />
        </section>
        
        <section id="videos">
          <VideoGallery />
        </section>
        
        <section id="sister-companies">
          <SisterCompanies />
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