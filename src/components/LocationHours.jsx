function LocationHours() {
  const hours = [
    { day: 'Monday', hours: '24 Hours', highlight: false },
    { day: 'Tuesday', hours: '24 Hours', highlight: false },
    { day: 'Wednesday', hours: '24 Hours', highlight: false },
    { day: 'Thursday', hours: '24 Hours', highlight: false },
    { day: 'Friday', hours: '24 Hours', highlight: false },
    { day: 'Saturday', hours: '24 Hours', highlight: false },
    { day: 'Sunday', hours: '24 Hours', highlight: true }
  ]

  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-medium text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Visit Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Location & Hours
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're conveniently located and open 24/7 to serve your healthcare needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="group relative">
            <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p className="text-gray-600">123 Medical Center Drive, Suite 100</p>
                    <p className="text-gray-600">City Name, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Landmark</p>
                    <p className="text-gray-600">Near Central Park Mall</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Parking</p>
                    <p className="text-gray-600">Free parking available on-site</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-5">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Getting Here
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold">By Bus:</span> Routes 42, 55, 78 - Stop at Medical Center<br/>
                  <span className="font-semibold">By Metro:</span> Line 3 - City Hospital Station (5 min walk)<br/>
                  <span className="font-semibold">By Car:</span> Located on Main Street with easy access from Highway 101
                </p>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Open 24/7
                  </div>
                </div>
                <p className="text-center text-gray-600 text-sm mb-4">We're always here for you</p>
                
                <div className="space-y-2">
                  {hours.map((item, index) => (
                    <div key={index} className={`flex justify-between items-center py-2 px-3 rounded-xl ${item.highlight ? 'bg-emerald-50' : ''}`}>
                      <span className={`font-medium ${item.highlight ? 'text-emerald-700' : 'text-gray-700'}`}>
                        {item.day}
                      </span>
                      <span className={`font-bold ${item.highlight ? 'text-emerald-700' : 'text-blue-600'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-red-50 rounded-2xl p-5 border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-red-900 mb-1">Emergency Services</p>
                    <p className="text-red-700 text-sm">For medical emergencies, our ER is open 24/7 with immediate care available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationHours