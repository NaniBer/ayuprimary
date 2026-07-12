function Staff() {
  const staff = [
    {
      name: 'Dr. Ahmad Hassan',
      role: 'Medical Director',
      department: 'Internal Medicine',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      credentials: 'MBBS, MD, FACP'
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Chief of Surgery',
      department: 'Surgery',
      image: 'https://images.unsplash.com/photo-1559839734-5b61b8ad1893?w=300&h=300&fit=crop&crop=face',
      credentials: 'MBBS, FRCS, FACS'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Pediatrics',
      department: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1537368910025-700a74fd54ad?w=300&h=300&fit=crop&crop=face',
      credentials: 'MD, FAAP'
    },
    {
      name: 'Dr. Aisha Rahman',
      role: 'Head of OB/GYN',
      department: 'Women\'s Health',
      image: 'https://images.unsplash.com/photo-1594824476967-48c21b0fcdc9?w=300&h=300&fit=crop&crop=face',
      credentials: 'MBBS, FRCOG'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Head of Emergency',
      department: 'Emergency Medicine',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face',
      credentials: 'MD, FACEP'
    },
    {
      name: 'Dr. Lisa Patel',
      role: 'Laboratory Director',
      department: 'Pathology',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face',
      credentials: 'MD, PhD'
    }
  ]

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Experts
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our dedicated team of healthcare professionals is committed to providing world-class medical care with compassion and expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:border-blue-200">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-700">
                      {member.credentials}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    {member.department}
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

export default Staff