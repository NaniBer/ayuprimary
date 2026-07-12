function Stats() {
  const stats = [
    {
      number: '150+',
      label: 'Medical Staff',
      description: 'Qualified doctors and specialists',
      icon: '👨‍⚕️',
      color: 'bg-blue-500'
    },
    {
      number: '50+',
      label: 'Nursing Staff',
      description: 'Experienced nurses and caregivers',
      icon: '👩‍⚕️',
      color: 'bg-cyan-500'
    },
    {
      number: '30+',
      label: 'Admin Staff',
      description: 'Support and management team',
      icon: '👥',
      color: 'bg-purple-500'
    },
    {
      number: '25+',
      label: 'Years of Service',
      description: 'Serving the community',
      icon: '🏆',
      color: 'bg-amber-500'
    },
    {
      number: '50K+',
      label: 'Patients Served',
      description: 'Annual patient visits',
      icon: '❤️',
      color: 'bg-rose-500'
    },
    {
      number: '15+',
      label: 'Departments',
      description: 'Specialized medical care',
      icon: '🏥',
      color: 'bg-emerald-500'
    }
  ]

  return (
    <div className="py-20 bg-white relative overflow-hidden">
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
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:border-blue-200 h-full">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
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