function VideoGallery() {
  const videos = [
    {
      title: 'Ultrasound Department',
      description: 'Take a virtual tour of our state-of-the-art ultrasound department with advanced imaging technology.',
      videoId: '',
      thumbnail: 'https://images.unsplash.com/photo-1551076805-e1869033e56a?w=600&h=400&fit=crop',
      color: 'bg-blue-500'
    },
    {
      title: 'Laboratory Services',
      description: 'Explore our modern laboratory facilities equipped with cutting-edge diagnostic equipment.',
      videoId: '',
      thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop',
      color: 'bg-emerald-500'
    },
    {
      title: 'Operation Room',
      description: 'See our advanced surgical suites equipped with the latest medical technology.',
      videoId: '',
      thumbnail: 'https://images.unsplash.com/photo-1551190822-a93216d873c5?w=600&h=400&fit=crop',
      color: 'bg-purple-500'
    },
    {
      title: 'Pharmacy',
      description: 'Tour our fully-stocked pharmacy providing prescription medications and healthcare products.',
      videoId: '',
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      color: 'bg-green-500'
    },
    {
      title: 'Delivery Services',
      description: 'Learn about our maternity and delivery services with comfortable birthing suites.',
      videoId: '',
      thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0a?w=600&h=400&fit=crop',
      color: 'bg-pink-500'
    },
    {
      title: 'Emergency Room',
      description: 'Explore our 24/7 emergency department with advanced trauma care facilities.',
      videoId: '',
      thumbnail: 'https://images.unsplash.com/photo-1587351021759-3e566b6af775?w=600&h=400&fit=crop',
      color: 'bg-red-500'
    },
    {
      title: 'Dental Clinic',
      description: 'Discover our dental clinic offering comprehensive oral health services and treatments.',
      videoId: '',
      thumbnail: 'https://images.unsplash.com/photo-1606811841689-23c77f561a5d?w=600&h=400&fit=crop',
      color: 'bg-cyan-500'
    }
  ]

  return (
    <div className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full mb-4 font-medium text-sm border border-white/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            Virtual Tours
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore Our Facilities
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Take a virtual tour of our world-class medical facilities and see the advanced technology we use to provide exceptional care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer transform group-hover:scale-110 transition-transform shadow-2xl">
                      <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className={`inline-block ${video.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {video.title.split(' ')[0]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoGallery