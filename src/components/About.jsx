function About() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Ayu Primary Care
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to Ayu Primary Care, where your health and well-being are our top priorities. 
              Our dedicated team of healthcare professionals is committed to providing comprehensive, 
              compassionate care to patients of all ages.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in [Year], we have been serving the [City Name] community with excellence in 
              medical care. Our state-of-the-art facility is equipped with modern technology and 
              staffed by experienced physicians who specialize in various fields of medicine.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Ayu Primary Care, we believe in building long-term relationships with our patients 
              and providing personalized care that addresses your unique health needs.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To deliver high-quality, patient-centered healthcare that promotes wellness 
              and improves the quality of life for our community.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Compassionate Care
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Medical Excellence
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Patient Safety
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Community Commitment
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About