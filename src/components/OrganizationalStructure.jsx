function OrganizationalStructure() {
  const structure = [
    {
      level: 'Executive Leadership',
      roles: ['Medical Director', 'Hospital Administrator', 'Chief Nursing Officer']
    },
    {
      level: 'Department Heads',
      roles: ['Head of Surgery', 'Head of Internal Medicine', 'Head of Pediatrics', 'Head of Emergency', 'Head of Laboratory']
    },
    {
      level: 'Medical Staff',
      roles: ['Specialist Physicians', 'General Physicians', 'Resident Doctors', 'Consultants']
    },
    {
      level: 'Nursing & Support',
      roles: ['Senior Nurses', 'Staff Nurses', 'Nursing Assistants', 'Medical Assistants']
    },
    {
      level: 'Administrative & Technical',
      roles: ['Administrative Staff', 'Laboratory Technicians', 'Radiology Technicians', 'Pharmacy Staff']
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Organizational Structure
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Our hospital is organized to deliver efficient and effective healthcare services.
          </p>
        </div>
        
        <div className="space-y-6">
          {structure.map((level, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {level.level}
                </h3>
              </div>
              <div className="ml-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {level.roles.map((role, idx) => (
                  <div key={idx} className="bg-gray-50 px-4 py-3 rounded-lg text-gray-700 border border-gray-200">
                    {role}
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

export default OrganizationalStructure