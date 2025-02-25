import React from 'react';

const Gallery = () => (
  <section id="gallery" className="bg-gray-100 py-16 px-6 sm:px-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Our Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 1"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 2"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="Gallery Image 3"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
