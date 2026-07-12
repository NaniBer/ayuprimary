function Stats() {
  const stats = [
    {
      number: '150+',
      label: 'Medical Staff',
      description: 'Qualified doctors and specialists',
      icon: '👨‍⚕️',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      number: '50+',
      label: 'Nursing Staff',
      description: 'Experienced nurses and caregivers',
      icon: '👩‍⚕️',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      number: '30+',
      label: 'Admin Staff',
      description: 'Support and management team',
      icon: '👥',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      number: '25+',
      label: 'Years of Service',
      description: 'Serving the community',
      icon: '🏆',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      number: '50K+',
      label: 'Patients Served',
      description: 'Annual patient visits',
      icon: '❤️',
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      number: '15+',
      label: 'Departments',
      description: 'Specialized medical care',
      icon: '🏥',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Our Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hospital at a Glance
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl transform group-hover:scale-105 transition-transform opacity-0 group-hover:opacity-100 blur-xl"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:border-transparent">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats