import React from 'react';

const Home = () => (
  <section className="bg-blue-500 text-white py-16 px-6 sm:px-16">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome To our demo session coding practice </h1>
      <p className="text-lg sm:text-xl mb-8">
        This is a demo of a responsive page built with React and Tailwind CSS.
        in collaboration between kasera and willington juma Cs student 
        they are tech ethusuastics 
      </p>
      <a
        href="#gallery"
        className="bg-white text-blue-500 py-2 px-4 rounded-full text-lg"
      >
        Explore the Gallery
      </a>
    </div>
  </section>
);

export default Home;
