import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div name="Contact" className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden py-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-20">
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            Contact Me
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or if you’re interested in collaborating. I’d be happy to connect!
          </p>
        </div>

        <form
          action="https://formsubmit.co/rupesh115511@gmail.com"
          method="POST"
          className={`mt-12 max-w-3xl mx-auto bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl p-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="mt-2 w-full py-3 px-4 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="mt-2 w-full py-3 px-4 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none transition-all"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows="5"
              className="mt-2 w-full py-3 px-4 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-600 outline-none transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 w-full py-3 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Contact;
