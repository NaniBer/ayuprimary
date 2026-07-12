function SisterCompanies() {
  const companies = [
    {
      name: 'Ayu Diagnostic Center',
      description: 'Advanced diagnostic imaging and laboratory services with state-of-the-art equipment for accurate diagnosis.',
      location: '456 Medical Plaza, Suite 200, City Center',
      phone: '(123) 456-7891',
      specialties: ['MRI & CT Scans', 'Digital X-Ray', 'Pathology Lab', 'Health Screening'],
      gradient: 'from-blue-600 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      name: 'Ayu Pharmacy',
      description: 'Full-service pharmacy providing prescription medications, healthcare products, and expert medication counseling.',
      location: '789 Health Street, Near Central Hospital, Downtown',
      phone: '(123) 456-7892',
      specialties: ['Prescription Services', 'Medical Supplies', 'Health Consultations', 'Home Delivery'],
      gradient: 'from-emerald-500 to-teal-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Healthcare Network
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sister Companies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Part of the Ayu Healthcare Network, providing comprehensive healthcare services to our community.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform group-hover:scale-105 transition-all opacity-0 group-hover:opacity-100 blur-xl"></div>
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${company.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${company.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {company.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {company.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <span className="text-sm">{company.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <span className="text-sm">{company.phone}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Specialties</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {company.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.gradient}`}></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SisterCompanies