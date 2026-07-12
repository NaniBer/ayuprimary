function Services() {
  const services = [
    {
      title: 'Primary Care',
      description: 'Comprehensive healthcare services for patients of all ages, including routine check-ups, preventive care, and management of chronic conditions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency services with advanced trauma care facilities and experienced medical professionals ready to handle critical situations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'Pediatric Care',
      description: 'Specialized medical care for infants, children, and adolescents, focusing on growth, development, and childhood illnesses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Surgical Services',
      description: 'State-of-the-art operation rooms with cutting-edge technology for various surgical procedures with expert surgical teams.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
        </svg>
      ),
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing with modern equipment for accurate and timely results supporting medical diagnoses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Maternity & Delivery',
      description: 'Comprehensive maternity care with comfortable birthing suites and experienced obstetricians for safe deliveries.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1V8"/>
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Dental Care',
      description: 'Complete dental services including preventive care, cosmetic dentistry, and oral surgery with modern equipment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Ultrasound & Imaging',
      description: 'Advanced imaging services including ultrasound, X-ray, and MRI for accurate diagnosis and monitoring.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Pharmacy Services',
      description: 'Full-service pharmacy with prescription medications, medical supplies, and expert medication counseling.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
            Medical Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            World-Class Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We offer comprehensive medical services using the latest technology and techniques to provide the best possible care for our patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform group-hover:scale-105 transition-all opacity-0 group-hover:opacity-100 blur-xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:border-transparent h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services