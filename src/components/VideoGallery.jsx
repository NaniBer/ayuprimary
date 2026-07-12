function VideoGallery() {
  const videos = [
    {
      title: 'Ultrasound Department',
      description: 'Take a virtual tour of our state-of-the-art ultrasound department.',
      videoId: '',
      thumbnail: 'https://via.placeholder.com/400x225?text=Ultrasound+Department'
    },
    {
      title: 'Laboratory Services',
      description: 'Explore our modern laboratory facilities and advanced testing capabilities.',
      videoId: '',
      thumbnail: 'https://via.placeholder.com/400x225?text=Laboratory+Services'
    },
    {
      title: 'Operation Room',
      description: 'See our advanced surgical suites equipped with cutting-edge technology.',
      videoId: '',
      thumbnail: 'https://via.placeholder.com/400x225?text=Operation+Room'
    },
    {
      title: 'Pharmacy',
      description: 'Tour our fully-stocked pharmacy providing prescription medications and healthcare products.',
      videoId: '',
      thumbnail: 'https://via.placeholder.com/400x225?text=Pharmacy'
    },
    {
      title: 'Delivery Services',
      description: 'Learn about our maternity and delivery services with comfortable birthing suites.',
      videoId: '',
      thumbnail: 'https://via.placeholder.com/400x225?text=Delivery+Services'
    },
    {
      title: 'Emergency Room',
      description: 'Explore our 24/7 emergency department with advanced trauma care facilities.',
      videoId: '',
      thumbnail: 'https://via.placeholder.com/400x225?text=Emergency+Room'
    },
    {
      title: 'Dental Clinic',
      description: 'Discover our dental clinic offering comprehensive oral health services and treatments.',
      videoId: '',
      thumbnail: 'https://via.placeholder.com/400x225?text=Dental+Clinic'
    }
  ]

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Facility Tours
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Watch videos showcasing our modern medical facilities and advanced healthcare technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoGallery