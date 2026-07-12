function Navigation() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div>
              <a href="#about" className="text-2xl font-bold text-blue-600">
                Ayu Primary Hospital
              </a>
              <p className="text-xs text-gray-500 tracking-wide">World-Class Healthcare</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <a href="#about" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50 rounded-lg">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50 rounded-lg">
                Services
              </a>
              <a href="#staff" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50 rounded-lg">
                Our Team
              </a>
              <a href="#structure" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50 rounded-lg">
                Organization
              </a>
              <a href="#videos" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50 rounded-lg">
                Facilities
              </a>
              <a href="#sister-companies" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50 rounded-lg">
                Network
              </a>
              <a href="#location" className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50 rounded-lg">
                Visit Us
              </a>
              <a href="#contact" className="ml-4 bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation