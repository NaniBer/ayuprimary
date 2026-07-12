function Services() {
  const services = [
    {
      title: 'Primary Care',
      description: 'Comprehensive healthcare services for patients of all ages, including routine check-ups, preventive care, and management of chronic conditions.'
    },
    {
      title: 'Pediatric Care',
      description: 'Specialized medical care for infants, children, and adolescents, focusing on growth, development, and childhood illnesses.'
    },
    {
      title: 'Geriatric Care',
      description: 'Healthcare services tailored to the unique needs of elderly patients, including management of age-related conditions and medications.'
    },
    {
      title: 'Chronic Disease Management',
      description: 'Ongoing care and support for patients with chronic conditions such as diabetes, hypertension, and heart disease.'
    },
    {
      title: 'Preventive Health',
      description: 'Screenings, immunizations, and wellness programs designed to prevent illness and maintain optimal health.'
    },
    {
      title: 'Women\'s Health',
      description: 'Comprehensive healthcare services for women, including reproductive health, prenatal care, and menopause management.'
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We offer a wide range of medical services to meet the healthcare needs of you and your family.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services