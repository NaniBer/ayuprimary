function Stats() {
  const stats = [
    {
      number: '150+',
      label: 'Medical Staff',
      description: 'Qualified doctors and specialists'
    },
    {
      number: '50+',
      label: 'Nursing Staff',
      description: 'Experienced nurses and caregivers'
    },
    {
      number: '30+',
      label: 'Administrative Staff',
      description: 'Support and management team'
    },
    {
      number: '25+',
      label: 'Years of Service',
      description: 'Serving the community'
    },
    {
      number: '50,000+',
      label: 'Patients Served',
      description: 'Annual patient visits'
    },
    {
      number: '15+',
      label: 'Departments',
      description: 'Specialized medical departments'
    }
  ]

  return (
    <div className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hospital Statistics
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Key figures showcasing our hospital's capacity and commitment to healthcare excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200">
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