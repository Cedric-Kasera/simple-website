import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-blue-500 text-white py-16 px-6 sm:px-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-white text-blue-500 py-3 rounded-full text-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
