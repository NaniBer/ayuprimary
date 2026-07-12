function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ayu Primary Care</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing compassionate, high-quality healthcare to our community. 
              Your health is our priority.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-white transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Medical Center Drive, Suite 100</li>
              <li>City Name, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@ayuprimary.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ayu Primary Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer