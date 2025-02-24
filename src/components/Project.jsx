import React from 'react';

const Project = () => {
  return (
    <div name="Project" className="my-32 px-4 md:px-40">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Projects</h1>

      {/* Musiqo Project */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-20 bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-semibold text-white mb-4">Musiqo</h1>
          <p className="leading-relaxed text-gray-300 mb-4">
            The Music Player Website is a comprehensive platform designed for users to enjoy a wide range of music genres. Each folder in the website is organized to categorize songs based on their type, ensuring a seamless and intuitive user experience.
          </p>
        </div>
        <div className="lg:w-1/2 w-full rounded-lg overflow-hidden">
          <img className="object-cover w-full h-full" src="musiqo.jpg" alt="Musicapp" />
        </div>
      </section>

      {/* Weather App Project */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-20 bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="lg:w-1/2 w-full">
          <img className="object-cover rounded-lg w-full h-full" src="weather.jpg" alt="weatherapp" />
        </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-white mb-4">Weather App</h1>
          <p className="leading-relaxed text-gray-300 mb-4">
            The Weather Forecasting Website is an interactive platform that provides users with accurate and up-to-date weather information for various locations. It includes essential weather data such as temperature, precipitation, wind speed, and humidity.
          </p>
        </div>
      </section>

      {/* Password Manager Project */}
      <section className="flex flex-col lg:flex-row items-center gap-10 mb-20 bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-semibold text-white mb-4">Password Manager</h1>
          <p className="leading-relaxed text-gray-300 mb-4">
            The Password Management Website is a secure platform designed to store and manage users' login credentials efficiently. It allows users to store essential information like website names, usernames, and their corresponding passwords in an encrypted manner.
          </p>
        </div>
        <div className="lg:w-1/2 w-full rounded-lg overflow-hidden">
          <img className="object-cover w-full h-full" src="passop.jpg" alt="passwordmanager" />
        </div>
      </section>

      {/* GitHub Link */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-white mb-6">Check out the Code</h2>
        <a 
          href="https://github.com/Rup-23?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block py-2 px-6 bg-emerald-700 hover:bg-emerald-800 rounded-lg text-white text-lg font-semibold transition-all"
        >
          View on GitHub
        </a>
      </section>
    </div>
  );
};

export default Project;


