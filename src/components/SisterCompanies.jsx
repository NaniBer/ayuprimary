function SisterCompanies() {
  const companies = [
    {
      name: 'Ayu Diagnostic Center',
      description: 'Advanced diagnostic imaging and laboratory services with state-of-the-art equipment.',
      location: '456 Medical Plaza, Suite 200, City Center',
      specialties: ['MRI & CT Scans', 'Digital X-Ray', 'Pathology Lab', 'Health Screening']
    },
    {
      name: 'Ayu Pharmacy',
      description: 'Full-service pharmacy providing prescription medications and healthcare products.',
      location: '789 Health Street, Near Central Hospital, Downtown',
      specialties: ['Prescription Services', 'Medical Supplies', 'Health Consultations', 'Home Delivery']
    }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sister Companies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Part of the Ayu Healthcare Network, providing comprehensive medical services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {company.name}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {company.description}
              </p>
              <div className="flex items-center text-gray-600 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>{company.location}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {company.specialties.map((specialty, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {specialty}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SisterCompanies