function Staff() {
  const staff = [
    {
      name: 'Dr. Ahmad Hassan',
      role: 'Medical Director',
      department: 'Internal Medicine',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Chief of Surgery',
      department: 'Surgery',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Head of Pediatrics',
      department: 'Pediatrics',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Aisha Rahman',
      role: 'Obstetrics & Gynecology',
      department: 'Women\'s Health',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Head of Emergency',
      department: 'Emergency Medicine',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Lisa Patel',
      role: 'Laboratory Director',
      department: 'Pathology',
      image: 'https://via.placeholder.com/150'
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Staff
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to providing excellent medical care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Staff