function OrganizationalStructure() {
  const structure = [
    {
      level: 'Executive Leadership',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      roles: ['Medical Director', 'Hospital Administrator', 'Chief Nursing Officer'],
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      level: 'Department Heads',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      ),
      roles: ['Head of Surgery', 'Head of Internal Medicine', 'Head of Pediatrics', 'Head of Emergency', 'Head of Laboratory'],
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      level: 'Medical Staff',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      roles: ['Specialist Physicians', 'General Physicians', 'Resident Doctors', 'Consultants'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      level: 'Nursing & Support',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
      roles: ['Senior Nurses', 'Staff Nurses', 'Nursing Assistants', 'Medical Assistants'],
      gradient: 'from-rose-500 to-rose-600'
    },
    {
      level: 'Administrative & Technical',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      roles: ['Administrative Staff', 'Laboratory Technicians', 'Radiology Technicians', 'Pharmacy Staff'],
      gradient: 'from-amber-500 to-amber-600'
    }
  ]

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Organization
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Structure
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A well-organized structure ensuring efficient healthcare delivery at every level.
          </p>
        </div>
        
        <div className="space-y-6">
          {structure.map((level, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-500/5 rounded-2xl transform group-hover:scale-[1.02] transition-all"></div>
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${level.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {level.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-white bg-blue-600 w-7 h-7 rounded-full flex items-center justify-center">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {level.level}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="ml-[72px] grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {level.roles.map((role, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-white px-4 py-3 rounded-xl text-gray-700 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-sm font-medium">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrganizationalStructure