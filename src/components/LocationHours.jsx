function LocationHours() {
  const hours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Location & Hours
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Address:</span><br />
                123 Medical Center Drive<br />
                Suite 100<br />
                City Name, State 12345
              </p>
              <p className="text-gray-700 mt-4">
                <span className="font-medium">Landmark:</span> Near Central Park Mall
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium">Parking:</span> Free parking available on-site
              </p>
            </div>
            
            <div className="mt-6 bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Getting Here</h4>
              <p className="text-gray-700 text-sm">
                <strong>By Bus:</strong> Routes 42, 55, 78 - Stop at Medical Center<br />
                <strong>By Metro:</strong> Line 3 - City Hospital Station (5 min walk)<br />
                <strong>By Car:</strong> Located on Main Street with easy access from Highway 101
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Operating Hours</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2">
                {hours.map((item, index) => (
                  <li key={index} className="flex justify-between text-gray-700">
                    <span className={item.hours === 'Closed' ? 'text-gray-500' : 'font-medium'}>
                      {item.day}
                    </span>
                    <span className={item.hours === 'Closed' ? 'text-gray-500' : ''}>
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800">
                <span className="font-semibold">Emergency:</span> For medical emergencies, please call 911 or visit your nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationHours